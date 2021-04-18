import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { SineInComponent } from './sine-in/sine-in.component';


@NgModule({
  declarations: [SineInComponent],
  imports: [
    CommonModule,
    AuthRoutingModule
  ]
})
export class AuthModule { 
  constructor() {
    console.log('1 AuthModule loaded.');
  }
}

