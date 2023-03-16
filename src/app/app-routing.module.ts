import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {IntroducePagesComponent} from "./introduce/introduce-pages/introduce-pages.component";
import {NewsComponent} from "./introduce/news/news.component";
import {ListProdComponent} from "./introduce/list-prod/list-prod.component";
import {PopUpComponent} from "./introduce/pop-up/pop-up.component";

const routes: Routes = [
  {
    path: 'introduce',
    // canActivate: [LoadUserActionGuard],
    data: {breadcrumb: 'Intro'},
    component: IntroducePagesComponent
  },
  {
    path: 'news',
    // canActivate: [LoadUserActionGuard],
    data: {breadcrumb: 'News'},
    component: NewsComponent
  },
  {
    path: 'list-prod',
    // canActivate: [LoadUserActionGuard],
    data: {breadcrumb: 'List Products'},
    component: ListProdComponent
  },
  {
    path: 'pop-up',
    // canActivate: [LoadUserActionGuard],
    data: {breadcrumb: 'Popup'},
    component: PopUpComponent
  },


  {
    path: 'base',
    data: {breadcrumb: 'Base Component'},
    loadChildren: () => import('./base/base.module').then(m => m.BaseModule)
  },
  // product
  {
    path: 'product',
    data: {breadcrumb: 'Product Component'},
    loadChildren: () => import('./product/product.module').then(m => m.ProductModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
