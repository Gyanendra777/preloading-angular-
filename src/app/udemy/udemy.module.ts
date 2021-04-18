import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UdemyRoutingModule } from './udemy-routing.module';
import { UderComponent } from './uder/uder.component';


@NgModule({
  declarations: [UderComponent],
  imports: [
    CommonModule,
    UdemyRoutingModule
  ]
})
export class UdemyModule {
  constructor(){
    console.log('4.1 udemyModule loaded.');
  }
 }
