import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/auth/auth.service';
import { TrainingService } from 'src/app/core/training/training.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { TrainingDay } from 'src/app/models/training.model';

@Component({
  selector: 'app-training-day',
  templateUrl: './training-day.component.html',
  styleUrls: ['./training-day.component.scss']
})
export class TrainingDayComponent implements OnInit {

  trainingDay$: Observable<TrainingDay>;

  constructor(
    private auth: AuthService,
    public route: ActivatedRoute,
    private training: TrainingService) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.trainingDay$ = this.training.getTrainingDay(id);
  }

  addExercise() {
    // open the exercise page
  }

}
