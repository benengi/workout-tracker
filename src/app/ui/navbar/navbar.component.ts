import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AuthService } from 'src/app/core/auth/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  @Input() clicked = false;
  @Output() toggleEvent = new EventEmitter<{ collapsed: boolean }>();

  collapsed: boolean;
  constructor(private auth: AuthService) { }

  ngOnInit() {
  }

  emitTogglerStatus(event: any) {
    console.log(event);
    this.toggleEvent.emit({collapsed: this.collapsed });
  }

}
