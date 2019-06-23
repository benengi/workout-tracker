import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/auth/auth.service';
import { TrainingService } from 'src/app/core/training/training.service';
import { Observable } from 'rxjs';
import { Program } from 'src/app/models/training.model';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-program',
  templateUrl: './program.component.html',
  styleUrls: ['./program.component.scss']
})
export class ProgramComponent implements OnInit {

  programs: Program[];
  programs$: Observable<Program[]>;

  constructor(public auth: AuthService, private training: TrainingService) { }

  ngOnInit() {
    this.programs$ = this.getUserPrograms();
  }

  private getUserPrograms(): Observable<Program[]> {
    return this.auth.user$.pipe(
      switchMap(user => {
        return this.training.getPrograms(user.uid);
      })
    );
  }
}
