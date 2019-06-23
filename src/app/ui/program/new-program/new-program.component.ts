import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Program } from 'src/app/models/training.model';
import { TrainingService } from 'src/app/core/training/training.service';

@Component({
  selector: 'app-new-program',
  templateUrl: './new-program.component.html',
  styleUrls: ['./new-program.component.scss']
})
export class NewProgramComponent implements OnInit {

  @Input() user: User;
  program: Program;
  programForm: FormGroup;

  constructor(public fb: FormBuilder, private training: TrainingService) { }

  ngOnInit() {
    this.programForm = this.fb.group({
      displayName: '',
      description: ''
    });
  }

  submitForm() {
    this.program = { uid: this.user.uid, ...this.programForm.value };
    this.training.createProgram(this.program);
  }

}
