import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BudgetKeyCommonModule, THEME_TOKEN } from '../src';

import { AppComponent } from './app.component';

@NgModule({
  imports: [
    BrowserModule,
    BudgetKeyCommonModule
  ],
  providers: [
    {provide: THEME_TOKEN, useValue: 'Value replaced!'}
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
