import { Component, OnInit, Input } from '@angular/core';
import { TrainingDay } from 'src/app/models/training';

@Component({
  selector: 'app-training-day-card',
  templateUrl: './training-day-card.component.html',
  styleUrls: ['./training-day-card.component.scss']
})
export class TrainingDayCardComponent implements OnInit {

  @Input() day: TrainingDay;
  constructor() { }

  ngOnInit() {
  }

}
