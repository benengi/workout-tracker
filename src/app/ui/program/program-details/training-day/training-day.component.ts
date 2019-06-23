import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/auth/auth.service';
import { TrainingService } from 'src/app/core/training/training.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { TrainingDay, Exercise } from 'src/app/models/training.model';

@Component({
  selector: 'app-training-day',
  templateUrl: './training-day.component.html',
  styleUrls: ['./training-day.component.scss']
})
export class TrainingDayComponent implements OnInit {

  trainingDay$: Observable<TrainingDay>;
  exercises$: Observable<Exercise[]>;

  constructor(
    private auth: AuthService,
    public route: ActivatedRoute,
    public router: Router,
    private training: TrainingService) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.trainingDay$ = this.training.getTrainingDay(id);
    this.trainingDay$.subscribe(day => {
      this.exercises$ = this.training.getExercises(day.id);
    });
  }

  addExercise(id: string) {
    // open the exercise page
    id ? this.router.navigate(['/exercise/{id}']) : this.router.navigate(['/exercise']);
  }

}
