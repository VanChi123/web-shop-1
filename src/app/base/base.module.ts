import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BaseRoutingModule } from './base-routing.module';
import {BaseHomeComponent} from "./base-home.component";
import * as fromComponents from './index';

@NgModule({
  declarations: [
    BaseHomeComponent,
    ...fromComponents.components,
  ],
  imports: [
    CommonModule,
    BaseRoutingModule
  ]
})
export class BaseModule { }
