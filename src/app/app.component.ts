import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  clicked = false;
  toggled = false;
  title = 'starting-strength';

  onMouseClick(event: MouseEvent) {
    this.clicked = !this.clicked;
    console.log(this.clicked);
  }

  updateToggleStatus(event: any) {
    console.log(event);
  }
}
