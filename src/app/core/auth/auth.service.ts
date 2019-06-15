import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable, combineLatest, of } from 'rxjs';
import { switchMap, map} from 'rxjs/operators';
import { Router } from '@angular/router';
import { auth } from 'firebase';

@Injectable()
export class AuthService {

  user$: Observable<User>;

  constructor(
    private afAuth: AngularFireAuth,
    private afs: AngularFirestore,
    private router: Router
  ) {
    //// Get auth data, then get firestore user document || null
    this.user$ = this.afAuth.authState.pipe(
      switchMap(user => {
        if (user) {
          return this.getUserInfo(user);
        } else {
          return of(null);
        }
      })
    );
  }

  googleLogin() {
    const provider = new auth.GoogleAuthProvider();
    return this.oAuthLogin(provider);
  }

  facebookLogin() {
    const provider = new auth.FacebookAuthProvider();
    return this.oAuthLogin(provider);
  }

  signOut() {
    this.afAuth.auth.signOut().then(() => {
        this.router.navigate(['/']);
    });
  }

  private async oAuthLogin(provider: auth.AuthProvider) {
    const credential = await this.afAuth.auth.signInWithPopup(provider);
    this.updateUserData(credential.user);
  }

  private updateUserData(user: User) {
    const userRef: AngularFirestoreDocument<User> = this.afs.doc(`users/${user.uid}`);

    // Have to use pure Javascript objects
    const data: User = {
      uid: user.uid,
      email: user.email || null,
      displayName: user.displayName || 'anonymous',
      photoURL: user.photoURL || 'https://goo.gl/Fz9nrQ'
    };

    return userRef.set(data);
  }

  // Use this to add any information you want to attach to the user object
  private getUserInfo(userInfo: User): Observable<User> {
    const user$ = this.afs.doc<User>(`users/${userInfo.uid}`).valueChanges();

    return combineLatest([user$]).pipe(
      map(([user]) => {
        return {
          ...user
        };
      })
    );
  }
}
