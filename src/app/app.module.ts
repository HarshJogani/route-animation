import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LeftPageComponent } from './left-page/left-page.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { RightPageComponent } from './right-page/right-page.component';

@NgModule({
  declarations: [
    AppComponent,
    LeftPageComponent,
    AboutPageComponent,
    RightPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
