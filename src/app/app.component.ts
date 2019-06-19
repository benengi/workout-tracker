import { Component, Output, EventEmitter, ElementRef, OnInit } from '@angular/core';
import { SharedService } from './core/shared/shared.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  private navToggler: ElementRef;
  clicked = false;
  title = 'starting-strength';

  constructor(private shared: SharedService) {
  }

  ngOnInit() {
    this.shared.getNavbarToggler().subscribe(el => {
      this.navToggler = el;
    });
  }

  onMouseClick(event: MouseEvent) {
    if (this.navToggler && !this.navToggler.nativeElement.classList.contains('collapsed')) {
      this.shared.setPendingToggle(true);
    }

  }
}
