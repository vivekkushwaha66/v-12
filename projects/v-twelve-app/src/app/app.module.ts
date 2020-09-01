import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VButtonModule } from 'v-twelve';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    VButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
