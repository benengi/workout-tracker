import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavKnownComponent } from './nav-known.component';

describe('NavKnownComponent', () => {
  let component: NavKnownComponent;
  let fixture: ComponentFixture<NavKnownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavKnownComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavKnownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
