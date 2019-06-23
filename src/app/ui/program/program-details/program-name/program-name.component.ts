import { Component, OnInit, Input } from '@angular/core';
import { Program } from 'src/app/models/training.model';
import { FormBuilder, FormGroup } from '@angular/forms';
import { TrainingService } from 'src/app/core/training/training.service';

@Component({
  selector: 'app-program-name',
  templateUrl: './program-name.component.html',
  styleUrls: ['./program-name.component.scss']
})
export class ProgramNameComponent implements OnInit {

  @Input() program: Program;

  programForm: FormGroup;
  editProgramMode = false;

  constructor(
    private training: TrainingService,
    private fb: FormBuilder) { }

  ngOnInit() {
    this.initForm(this.program);
  }

  initForm(program: Program) {
    this.programForm = this.fb.group({
      displayName: program.displayName
    });
  }

  save() {
    this.program.displayName = this.programForm.value.displayName;
    this.program = { ...this.program };

    this.training.updateProgram(this.program).subscribe(() => {
      this.toggleEditMode();
    });
  }

  toggleEditMode() {
    this.editProgramMode = !this.editProgramMode;
  }
}
