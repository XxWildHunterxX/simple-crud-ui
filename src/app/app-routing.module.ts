import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'admin',
    loadChildren: () => import('./adminlayout/adminlayout.module').then(mod => mod.AdminlayoutModule),
    canActivate: [],
  },
  {
    path: '**',
    loadChildren: () => import('./adminlayout/adminlayout.module').then(mod => mod.AdminlayoutModule),
    canActivate: [],
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
