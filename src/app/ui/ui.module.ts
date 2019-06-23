import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { NavAnonymousComponent } from './navbar/nav-anonymous/nav-anonymous.component';
import { NavKnownComponent } from './navbar/nav-known/nav-known.component';
import { CardComponent } from './shared/card/card.component';

import { TrainingDayComponent } from './program/program-details/training-day/training-day.component';
import { TrainingComponent } from './program/program-details/training/training.component';
import { TrainingDayCardComponent } from './program/program-details/training-day/training-day-card/training-day-card.component';
import { NewTrainingDayComponent } from './program/program-details/training/new-training-day/new-training-day.component';

import { TrackToggleDirective } from './navbar/track-toggler.directive';
import { ProgramComponent } from './program/program.component';
import { ProgramCardComponent } from './program/program-card/program-card.component';
import { NewProgramComponent } from './program/new-program/new-program.component';
import { ProgramDetailsComponent } from './program/program-details/program-details.component';
import { ProgramNameComponent } from './program/program-details/program-name/program-name.component';
import { ProgramDescriptionComponent } from './program/program-details/program-description/program-description.component';
import { ProgramExerciseComponent } from './program/program-details/program-exercise/program-exercise.component';
import { ProgramDayComponent } from './program/program-details/program-day/program-day.component';
import { ExerciseComponent } from './program/program-details/training-day/exercise/exercise.component';


@NgModule({
  declarations: [
    LoginComponent,
    NavbarComponent,
    HomeComponent,
    NavAnonymousComponent,
    NavKnownComponent,
    TrackToggleDirective,
    CardComponent,
    TrainingComponent,
    TrainingDayCardComponent,
    NewTrainingDayComponent,
    ProgramComponent,
    ProgramCardComponent,
    NewProgramComponent,
    ProgramDetailsComponent,
    ProgramNameComponent,
    ProgramDescriptionComponent,
    ProgramExerciseComponent,
    ProgramDayComponent,
    TrainingDayComponent,
    ExerciseComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule
  ],
  exports: [NavbarComponent, TrackToggleDirective]
})
export class UiModule { }
