import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-anonymous',
  templateUrl: './nav-anonymous.component.html',
  styleUrls: ['./nav-anonymous.component.scss']
})
export class NavAnonymousComponent implements OnInit {

  private navLinks = [
    { path: '', text: 'Get Started'},
    { path: 'stats', text: 'FAQ' },
    { path: 'about', text: 'Mobile' }
  ];

  constructor() { }

  ngOnInit() {
  }

}
