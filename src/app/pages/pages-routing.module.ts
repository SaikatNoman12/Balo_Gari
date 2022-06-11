import { PagesComponent } from './pages.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:"",
    component:PagesComponent,
    children:[
      {
        path:"",
        loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
      },
      {
        path:"compare",
        loadChildren: () => import('./compare/compare.module').then(m => m.CompareModule)
      },
      {
        path:"compare-details",
        loadChildren: () => import('./compare-details/compare-details.module').then(m => m.CompareDetailsModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
