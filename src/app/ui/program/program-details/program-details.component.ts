import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TrainingService } from 'src/app/core/training/training.service';
import { Observable } from 'rxjs';
import { Program, TrainingDay } from 'src/app/models/training';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-program-details',
  templateUrl: './program-details.component.html',
  styleUrls: ['./program-details.component.scss']
})
export class ProgramDetailsComponent implements OnInit {

  program: Program;
  program$: Observable<Program>;
  trainingDays$: Observable<TrainingDay[]>;

  editProgramMode = false;

  constructor(
    public route: ActivatedRoute,
    private training: TrainingService
  ) { }

  ngOnInit() {
    this.program$ = this.getProgram(this.route.snapshot.paramMap.get('id'));
    this.trainingDays$ = this.getTrainingDays();
  }

  private getProgram(id: string): Observable<Program> {
    return this.program$ = this.training.getProgram(id);
  }

  private getTrainingDays(): Observable<TrainingDay[]> {
    return this.program$.pipe(
      switchMap(program => this.training.getTrainingDays(program.id))
    );
  }

}
