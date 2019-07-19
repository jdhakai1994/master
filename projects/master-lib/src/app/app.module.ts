import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MasterLibAppComponent } from './app.component';

@NgModule({
  declarations: [
    MasterLibAppComponent
  ],
  imports: [
    BrowserModule
  ],
  exports: [
    MasterLibAppComponent
  ],
  providers: [],
  bootstrap: [MasterLibAppComponent]
})
export class MasterLibAppModule { }
