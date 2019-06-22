import { Component, OnInit, Input } from '@angular/core';
import { Program } from 'src/app/models/training';
import { FormBuilder, FormGroup } from '@angular/forms';
import { TrainingService } from 'src/app/core/training/training.service';

@Component({
  selector: 'app-program-name',
  templateUrl: './program-name.component.html',
  styleUrls: ['./program-name.component.scss']
})
export class ProgramNameComponent implements OnInit {

  @Input() program: Program;

  programNameForm: FormGroup;
  editProgramMode = false;

  constructor(
    private training: TrainingService,
    private fb: FormBuilder) { }

  ngOnInit() {
    this.initNameForm(this.program);
  }

  initNameForm(program: Program) {
    this.programNameForm = this.fb.group({
      displayName: program.displayName
    });
  }

  saveName() {
    this.program.displayName = this.programNameForm.value.displayName;
    this.program = { ...this.program };

    this.training.updateProgram(this.program).subscribe(() => {
      this.toggleEditNameMode();
    });
  }

  toggleEditNameMode() {
    this.editProgramMode = !this.editProgramMode;
  }
}
