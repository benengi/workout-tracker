import { Directive, HostListener, ElementRef, Renderer } from '@angular/core';
import { SharedService } from 'src/app/core/shared/shared.service';

@Directive({
  selector: '[appTrackToggle]'
})
export class TrackToggleDirective {

  constructor(private el: ElementRef, private shared: SharedService) {}

  @HostListener('click') onMouseEnter() {
    this.shared.setNavbarToggler(this.el);
  }

}
