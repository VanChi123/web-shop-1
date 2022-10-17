import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {IntroducePagesComponent} from "./introduce/introduce-pages/introduce-pages.component";
import {NewsComponent} from "./introduce/news/news.component";

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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
