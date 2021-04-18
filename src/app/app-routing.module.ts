import { NgModule } from '@angular/core';
import {  RouterModule, Routes } from '@angular/router';
import { ServicessService } from './servicess.service';

const routes: Routes = [
 
  {
    path: 'user',
   data:{preload:true}, loadChildren: () => import('./user/user.module').then(m => m.USERModule)
  },
  {
    path: 'AuthModule',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: 'AdminModule',data:{preload:true},
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {preloadingStrategy:ServicessService})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
