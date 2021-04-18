import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UderComponent } from './uder/uder.component';

const routes: Routes = [
  {
    path: '',
    component: UderComponent  
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UdemyRoutingModule { }
