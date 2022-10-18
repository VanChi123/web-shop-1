import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IntroducePagesComponent } from './introduce/introduce-pages/introduce-pages.component';
import {BrowserAnimationsModule, NoopAnimationsModule} from "@angular/platform-browser/animations";
import { NewsComponent } from './introduce/news/news.component';
import {ShareModule} from "./share/share.module";
import {FormsModule} from "@angular/forms";
import { ListProdComponent } from './introduce/list-prod/list-prod.component';

@NgModule({
  declarations: [
    AppComponent,
    IntroducePagesComponent,
    NewsComponent,
    ListProdComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,

        NoopAnimationsModule,
        BrowserAnimationsModule,

        FormsModule,
        ShareModule,
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
