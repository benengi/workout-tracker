import { Component, OnInit, Input, ViewChild, Output, EventEmitter, ElementRef, AfterViewInit, Renderer2 } from '@angular/core';
import { AuthService } from 'src/app/core/auth/auth.service';
import { SharedService } from 'src/app/core/shared/shared.service';

@Component({
  selector: 'app-nav-known',
  templateUrl: './nav-known.component.html',
  styleUrls: ['./nav-known.component.scss']
})
export class NavKnownComponent implements OnInit, AfterViewInit {

  @ViewChild('toggler' , {read: false, static: false}) toggler: ElementRef;

  private navLinks = [
    { path: '', text: 'Dashboard'},
    { path: 'training', text: 'Training' },
    { path: 'stats', text: 'Stats' },
    { path: 'programs', text: 'Programs' },
    { path: 'calendar', text: 'Calendar' },
    { path: 'about', text: 'About' }
  ];

  @Input() user: User;
  constructor(
    private auth: AuthService,
    private shared: SharedService,
    private renderer: Renderer2) { }

  ngOnInit() {
    this.shared.getPendingToggle().subscribe(isPendingToggle => {
      if (isPendingToggle) {
        this.toggler.nativeElement.click();
        this.shared.setPendingToggle(false);
      }
    });
  }

  ngAfterViewInit(): void {
    if (this.toggler) {
      this.shared.setNavbarToggler(this.toggler);
    }
  }

  onMouseClick(event: MouseEvent) {
    if (this.toggler && !this.toggler.nativeElement.classList.contains('collapsed')) {
      this.shared.setPendingToggle(true);
    }
  }

}
