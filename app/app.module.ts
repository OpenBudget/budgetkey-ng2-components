import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BudgetKeyCommonModule } from '../src';

import { AppComponent } from './app.component';

@NgModule({
  imports: [
    BrowserModule,
    BudgetKeyCommonModule
  ],
  declarations: [
    AppComponent
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {
}
