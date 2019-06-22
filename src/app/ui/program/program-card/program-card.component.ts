import { Component, OnInit, Input } from '@angular/core';
import { Program } from 'src/app/models/training';
import { TrainingService } from 'src/app/core/training/training.service';

@Component({
  selector: 'app-program-card',
  templateUrl: './program-card.component.html',
  styleUrls: ['./program-card.component.scss']
})
export class ProgramCardComponent implements OnInit {

  @Input() program: Program;
  @Input() user: User;

  isActive: boolean;
  constructor(private training: TrainingService) { }

  ngOnInit() {
    this.isActive = this.user.activeProgramId === this.program.id;
  }

  setActiveProgram() {
    this.training.setActiveProgram(this.user, this.program.id);
  }

}
