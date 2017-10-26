import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BudgetKeyCommonModule, THEME_TOKEN } from '../src';

import { AppComponent } from './app.component';

declare const process: any;

@NgModule({
  imports: [
    BrowserModule,
    BudgetKeyCommonModule
  ],
  providers: (process.env.BUDGETKEY_THEME == 'OpenProcurement') ? [
      {provide: THEME_TOKEN, useValue: {
        siteName: "רכש פתוח"
      }}
  ] : [],
  declarations: [
    AppComponent
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {
}
