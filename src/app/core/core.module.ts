import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from './auth/auth.service';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { SharedService } from './shared/shared.service';
import { TrainingService } from './training/training.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AngularFirestoreModule,
    AngularFireAuthModule
  ],
  providers: [
    AuthService,
    SharedService,
    TrainingService
  ]
})
export class CoreModule { }
