import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Exercise } from 'src/app/models/training.model';
import { TrainingService } from 'src/app/core/training/training.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-exercise',
  templateUrl: './exercise.component.html',
  styleUrls: ['./exercise.component.scss']
})
export class ExerciseComponent implements OnInit {

  exercise$: Observable<Exercise>;
  editMode: boolean;
  exerciseForm: FormGroup;

  constructor(
    public route: ActivatedRoute,
    private training: TrainingService) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.exercise$ = this.training.getExercise(id);
  }

  repCounter(reps: number): Array<any> {
    return new Array(reps);
  }
  saveChanges() {
    // this.training.
  }

}
