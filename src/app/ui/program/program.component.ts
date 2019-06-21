import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-program',
  templateUrl: './program.component.html',
  styleUrls: ['./program.component.scss']
})
export class ProgramComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  openNewProgramForm() {
    console.log('Open New Program Form');
  }

}
