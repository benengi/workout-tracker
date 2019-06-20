import { Component, OnInit } from '@angular/core';
import { Card } from 'src/app/models/card.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  cards = [
    new Card('Summary', '/summary', 'card-obj col-12', null),
    new Card('Workout', '/workout',  'card-obj col-sm-6',
      [
        { path: 'workout', displayName: 'Open' }
      ]
    ),

    new Card('Weekly Track', '/track', 'card-obj col-sm-6', null),
    new Card('Weight', '/weight', 'card-obj col-sm-6', null),
  ];
  constructor() { }

  ngOnInit() {
  }

}
