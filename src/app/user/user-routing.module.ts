import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DestComponent } from './dest/dest.component';

const routes: Routes = [
  {
    path: '',
    component: DestComponent
  },
  {
    path: 'udemy',
    loadChildren: () => import('../udemy/udemy.module').then(m => m.UdemyModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class USERRoutingModule { }
