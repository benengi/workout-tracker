import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/auth/auth.service';

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
  constructor(private auth: AuthService) { }

  ngOnInit() {
  }

}
