import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';

// Bootstrap
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [LoginComponent, NavbarComponent],
  imports: [
    CommonModule,
    NgbModule
  ],
  exports: [NavbarComponent]
})
export class UiModule { }
