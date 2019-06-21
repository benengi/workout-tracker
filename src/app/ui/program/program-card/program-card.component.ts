import { Component, OnInit, Input } from '@angular/core';
import { Program } from 'src/app/models/training';

@Component({
  selector: 'app-program-card',
  templateUrl: './program-card.component.html',
  styleUrls: ['./program-card.component.scss']
})
export class ProgramCardComponent implements OnInit {

  @Input() program: Program;
  @Input() isActive: boolean;
  constructor() { }

  ngOnInit() {
  }

}
