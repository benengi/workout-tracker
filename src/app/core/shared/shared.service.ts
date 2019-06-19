import { Injectable, ElementRef } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class SharedService {

  private navbarTogglerEl$: Subject<ElementRef>;

  // if this is true, perform a toggle action and immediately make it false;
  private pendingToggle: Subject<boolean>;

  constructor() {
    this.navbarTogglerEl$ = new Subject<ElementRef>();
    this.pendingToggle = new Subject<boolean>();
    this.pendingToggle.next(false);
  }

  getNavbarToggler(): Subject<ElementRef> {
    return this.navbarTogglerEl$;
  }

  setNavbarToggler(el: ElementRef) {
    this.navbarTogglerEl$.next(el);
  }

  getPendingToggle(): Subject<boolean> {
    return this.pendingToggle;
  }

  setPendingToggle(pendingToggle: boolean) {
    this.pendingToggle.next(pendingToggle);
  }

}
