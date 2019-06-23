import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Exercise } from 'src/app/models/training.model';
import { TrainingService } from 'src/app/core/training/training.service';

@Component({
  selector: 'app-exercise',
  templateUrl: './exercise.component.html',
  styleUrls: ['./exercise.component.scss']
})
export class ExerciseComponent implements OnInit {

  @Input() exercise: Exercise;

  editMode: boolean;
  exerciseForm: FormGroup;

  constructor(private fb: FormBuilder, private training: TrainingService) { }

  ngOnInit() {
    if (!this.exercise) {
      this.exercise = new Exercise();
    }

    this.exerciseForm = this.fb.group({
      ...this.exercise
    });
  }

  saveChanges() {
    // this.training.
  }

}
