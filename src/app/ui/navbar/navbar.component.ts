import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  private navLinks = [
    { path: '', text: 'Home'},
    { path: 'stats', text: 'Stats' },
    { path: 'about', text: 'About' }
  ];
  constructor() { }

  ngOnInit() {
  }

}
