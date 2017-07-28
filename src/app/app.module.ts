import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Level0Component } from './components/level-0/level-0.component';
import { Level1Component } from './components/level-1/level-1.component';
import { Level2Component } from './components/level-2/level-2.component';

@NgModule({
  declarations: [
    AppComponent,
    Level0Component,
    Level1Component,
    Level2Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
