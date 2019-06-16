import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';

// Bootstrap
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    NgbModule
  ],
  exports: []
})
export class UiModule { }
