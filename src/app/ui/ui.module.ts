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
import { TrainingComponent } from './training/training.component';
import { TrainingDayCardComponent } from './training/training-day-card/training-day-card.component';
import { NewTrainingDayComponent } from './training/new-training-day/new-training-day.component';

import { TrackToggleDirective } from './navbar/track-toggler.directive';

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
    NewTrainingDayComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule
  ],
  exports: [NavbarComponent, TrackToggleDirective]
})
export class UiModule { }
