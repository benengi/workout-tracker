import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/auth/auth.service';
import { Observable, from, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { TrainingService } from 'src/app/core/training/training.service';
import { Program, TrainingDay } from 'src/app/models/training.model';

@Component({
  selector: 'app-training',
  templateUrl: './training.component.html',
  styleUrls: ['./training.component.scss']
})
export class TrainingComponent implements OnInit {

  user: User;
  activeProgram$: Observable<Program>;
  trainingDays$: Observable<TrainingDay[]>;

  constructor(private auth: AuthService, private training: TrainingService) { }

  ngOnInit() {
    this.init();
  }

  addTrainingDay() {
    // Open a form
  }

  private init() {
    this.activeProgram$ = this.getActivePrograms();
    this.trainingDays$ = this.getTrainingDays();
  }

  private getActivePrograms() {
    return this.auth.user$.pipe(
      switchMap(user => {
        return this.training.getActiveProgram(user);
      })
    );
  }

  private getTrainingDays() {
    return this.activeProgram$.pipe(
      switchMap(program => {
        if (program) {
          return this.training.getTrainingDays(program.id);
        } else {
          return of(null);
        }
      })
    );
  }

}
