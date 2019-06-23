import { Component, OnInit, Input } from '@angular/core';
import { Program } from 'src/app/models/training.model';
import { TrainingService } from 'src/app/core/training/training.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-program-description',
  templateUrl: './program-description.component.html',
  styleUrls: ['./program-description.component.scss']
})
export class ProgramDescriptionComponent implements OnInit {

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
      description: program.description
    });
  }

  save() {
    this.program.description = this.programForm.value.description;
    this.program = { ...this.program };

    this.training.updateProgram(this.program).subscribe(() => {
      this.toggleEditMode();
    });
  }

  toggleEditMode() {
    this.editProgramMode = !this.editProgramMode;
  }

}
