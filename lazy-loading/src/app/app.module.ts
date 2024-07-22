import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WithoutLazyModule } from './without-lazy/without-lazy.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    WithoutLazyModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
