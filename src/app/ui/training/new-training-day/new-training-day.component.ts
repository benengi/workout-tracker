import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { TrainingDay } from 'src/app/models/training';
import { TrainingService } from 'src/app/core/training/training.service';
import { AuthService } from 'src/app/core/auth/auth.service';

@Component({
  selector: 'app-new-training-day',
  templateUrl: './new-training-day.component.html',
  styleUrls: ['./new-training-day.component.scss']
})
export class NewTrainingDayComponent implements OnInit {

  @Input() programId: string;

  user: User;
  trainingDay: TrainingDay;
  trainingDayForm: FormGroup;

  constructor(
    public fb: FormBuilder,
    private auth: AuthService,
    private training: TrainingService) { }

  ngOnInit() {
    this.auth.user$.subscribe(user => {
      this.user = user;
    });

    this.trainingDayForm = this.fb.group({
      displayName: '',
    });
  }

  submitForm() {
    this.trainingDay = { ...this.trainingDayForm.value};
    this.trainingDay.uid = this.user.uid;
    this.trainingDay.programId = this.programId;
    this.training.createTrainingDay(this.trainingDay);
  }

}
