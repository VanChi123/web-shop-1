import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BaseHomeComponent} from "./base-home.component";
import {TableBootstrapComponent} from "./table/table-bootstrap/table-bootstrap.component";

const routes: Routes = [
  {
    path: '',
    // canActivate: [LoadUserActionGuard],
    // data: {breadcrumb: 'News'},
    component: BaseHomeComponent,
    children: [
      {path: '', redirectTo: 'base', pathMatch: 'full'},
      {path: 'table', component: TableBootstrapComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BaseRoutingModule { }
