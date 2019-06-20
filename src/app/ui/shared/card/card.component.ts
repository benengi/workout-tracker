import { Component, OnInit, Input } from '@angular/core';
import { Card } from 'src/app/models/card.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() cardProperties: Card;

  private DEFAULT_CARD_PROPERTY = {
    title: 'DEFAULT CARD',
    gridClasses: 'col-sm-6',
    imagePath: '',
    actions: [
      { path: '', displayName: 'Sample Option 1' },
      { path: '', displayName: 'Sample Option 2' }
    ]
  };

  constructor() {
    // this.cardProperties = this.DEFAULT_CARD_PROPERTY;
  }

  ngOnInit() {
  }

}
