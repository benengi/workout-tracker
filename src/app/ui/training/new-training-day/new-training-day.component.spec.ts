import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewTrainingDayComponent } from './new-training-day.component';

describe('NewTrainingDayComponent', () => {
  let component: NewTrainingDayComponent;
  let fixture: ComponentFixture<NewTrainingDayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewTrainingDayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewTrainingDayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
