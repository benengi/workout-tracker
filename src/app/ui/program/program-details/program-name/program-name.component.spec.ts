import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgramNameComponent } from './program-name.component';

describe('ProgramNameComponent', () => {
  let component: ProgramNameComponent;
  let fixture: ComponentFixture<ProgramNameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProgramNameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgramNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
