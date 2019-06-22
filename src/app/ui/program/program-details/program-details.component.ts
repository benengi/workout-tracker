import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TrainingService } from 'src/app/core/training/training.service';
import { Observable } from 'rxjs';
import { Program } from 'src/app/models/training';

@Component({
  selector: 'app-program-details',
  templateUrl: './program-details.component.html',
  styleUrls: ['./program-details.component.scss']
})
export class ProgramDetailsComponent implements OnInit {

  program$: Observable<Program>;

  constructor(
    public route: ActivatedRoute,
    private training: TrainingService
  ) { }

  ngOnInit() {
    this.program$ = this.getProgram(this.route.snapshot.paramMap.get('id'));
  }

  private getProgram(id: string): Observable<Program> {
    return this.program$ = this.training.getProgram(id);
  }

}
