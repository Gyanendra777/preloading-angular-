import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SinComponent } from './sin/sin.component';

const routes: Routes = [
  {path:'',component:SinComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
