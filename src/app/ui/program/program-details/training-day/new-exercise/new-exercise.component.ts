import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { TrainingService } from 'src/app/core/training/training.service';
import { Exercise, TrainingDay } from 'src/app/models/training.model';

@Component({
  selector: 'app-new-exercise',
  templateUrl: './new-exercise.component.html',
  styleUrls: ['./new-exercise.component.scss']
})
export class NewExerciseComponent implements OnInit {

  DEFAULT_SET = 5;
  DEFAULT_REP = 5;
  DEFAULT_WEIGHT = 15;

  @Input() trainingDay: TrainingDay;

  exercise: Exercise;
  editMode: boolean;
  exerciseForm: FormGroup;

  constructor(private fb: FormBuilder, private training: TrainingService) { }

  ngOnInit() {

    this.exerciseForm = this.fb.group({
      displayName: ''
    });
  }

  submitForm() {
    this.exercise = this.exerciseForm.value;
    this.exercise.trainingDayId = this.trainingDay.id;
    this.exercise.totalSets = this.DEFAULT_SET;
    this.exercise.totalReps = this.DEFAULT_REP;
    this.exercise.weight = this.DEFAULT_WEIGHT;

    this.training.createExercise(this.exercise);
  }

}
