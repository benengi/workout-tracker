import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './ui/login/login.component';
import { HomeComponent } from './ui/home/home.component';
import { TrainingComponent } from './ui/program/program-details/training/training.component';
import { ProgramComponent } from './ui/program/program.component';
import { ProgramDetailsComponent } from './ui/program/program-details/program-details.component';
import { TrainingDayComponent } from './ui/program/program-details/training-day/training-day.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'training', component: TrainingComponent },
  { path: 'training/:id', component: TrainingDayComponent },
  { path: 'programs', component: ProgramComponent },
  { path: 'programs/:id', component: ProgramDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
