import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { SinComponent } from './sin/sin.component';


@NgModule({
  declarations: [SinComponent],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule {
  constructor() {
    console.log('2 AdminModule loaded.');
  }
 }
