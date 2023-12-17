import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DataStuffComponent } from './data-stuff/data-stuff.component';

@NgModule({
  declarations: [
    AppComponent,
    DataStuffComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
