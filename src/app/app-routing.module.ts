import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './ui/login/login.component';
import { HomeComponent } from './ui/home/home.component';
import { TrainingComponent } from './ui/program/training/training.component';
import { ProgramComponent } from './ui/program/program.component';
import { ProgramDetailsComponent } from './ui/program/program-details/program-details.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'training', component: TrainingComponent },
  { path: 'programs', component: ProgramComponent },
  { path: 'programs/:id', component: ProgramDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
