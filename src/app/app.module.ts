import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IntroducePagesComponent } from './introduce/introduce-pages/introduce-pages.component';
import {BrowserAnimationsModule, NoopAnimationsModule} from "@angular/platform-browser/animations";
import { NewsComponent } from './introduce/news/news.component';
import {ShareModule} from "./share/share.module";

@NgModule({
  declarations: [
    AppComponent,
    IntroducePagesComponent,
    NewsComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,

        NoopAnimationsModule,
        BrowserAnimationsModule,
        ShareModule,
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
