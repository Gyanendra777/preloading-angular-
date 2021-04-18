import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SineInComponent } from './sine-in/sine-in.component';

const routes: Routes = [
  {path:'',component:SineInComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
