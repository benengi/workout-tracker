import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from 'src/app/core/auth/auth.service';

@Component({
  selector: 'app-nav-known',
  templateUrl: './nav-known.component.html',
  styleUrls: ['./nav-known.component.scss']
})
export class NavKnownComponent implements OnInit {

  private navLinks = [
    { path: '', text: 'Workout'},
    { path: 'exercises', text: 'Exercises' },
    { path: 'stats', text: 'Stats' },
    { path: 'faq', text: 'FAQ' },
    { path: 'about', text: 'About' }
  ];

  @Input() user: User;
  constructor(private auth: AuthService) { }

  ngOnInit() {
  }

}
