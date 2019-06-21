import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainingDayCardComponent } from './training-day-card.component';

describe('TrainingDayCardComponent', () => {
  let component: TrainingDayCardComponent;
  let fixture: ComponentFixture<TrainingDayCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrainingDayCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainingDayCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
