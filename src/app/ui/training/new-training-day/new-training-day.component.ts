import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { TrainingDay } from 'src/app/models/training';

@Component({
  selector: 'app-new-training-day',
  templateUrl: './new-training-day.component.html',
  styleUrls: ['./new-training-day.component.scss']
})
export class NewTrainingDayComponent implements OnInit {

  trainingDay: TrainingDay;
  trainingDayForm: FormGroup;

  constructor(public fb: FormBuilder) { }

  ngOnInit() {
    this.trainingDayForm = this.fb.group({
      displayName: '',
    });
  }

  submitForm() {
    this.trainingDay = { ...this.trainingDayForm.value};
  }

}
