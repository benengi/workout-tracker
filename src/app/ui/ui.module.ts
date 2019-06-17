import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';

import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NavAnonymousComponent } from './navbar/nav-anonymous/nav-anonymous.component';
import { NavKnownComponent } from './navbar/nav-known/nav-known.component';

@NgModule({
  declarations: [LoginComponent, NavbarComponent, HomeComponent, NavAnonymousComponent, NavKnownComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [NavbarComponent]
})
export class UiModule { }
