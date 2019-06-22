import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TrainingService } from 'src/app/core/training/training.service';
import { Observable } from 'rxjs';
import { Program } from 'src/app/models/training';
import { FormBuilder, FormGroup } from '@angular/forms';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-program-details',
  templateUrl: './program-details.component.html',
  styleUrls: ['./program-details.component.scss']
})
export class ProgramDetailsComponent implements OnInit {

  program: Program;
  program$: Observable<Program>;
  programNameForm: FormGroup;

  editProgramMode = false;

  constructor(
    public route: ActivatedRoute,
    private training: TrainingService,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.program$ = this.getProgram(this.route.snapshot.paramMap.get('id'));
    this.program$.subscribe(program => {
      this.program = program;
      this.initNameForm(this.program);
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

  initNameForm(program: Program) {
    this.programNameForm = this.fb.group({
      displayName: program.displayName
    });
  }

  private getProgram(id: string): Observable<Program> {
    return this.program$ = this.training.getProgram(id);
  }

}
