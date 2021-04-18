import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { USERRoutingModule } from './user-routing.module';
import { DestComponent } from './dest/dest.component';


@NgModule({
  declarations: [DestComponent],
  imports: [
    CommonModule,
    USERRoutingModule,
    
  ]
})
export class USERModule {
  constructor() {
    console.log('4 UserModule loaded.');
 }
 }
