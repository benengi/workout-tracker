import { Component, OnInit, Input } from '@angular/core';
import { TrainingDay } from 'src/app/models/training';

@Component({
  selector: 'app-program-day',
  templateUrl: './program-day.component.html',
  styleUrls: ['./program-day.component.scss']
})
export class ProgramDayComponent implements OnInit {

  @Input() day: TrainingDay;
  constructor() { }

  ngOnInit() {
  }

}
