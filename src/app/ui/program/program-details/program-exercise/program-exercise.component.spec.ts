import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgramExerciseComponent } from './program-exercise.component';

describe('ProgramExerciseComponent', () => {
  let component: ProgramExerciseComponent;
  let fixture: ComponentFixture<ProgramExerciseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProgramExerciseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgramExerciseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
