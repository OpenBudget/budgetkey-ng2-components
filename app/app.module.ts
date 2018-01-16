import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BudgetKeyCommonModule, THEME_TOKEN } from '../src';

import { AppComponent } from './app.component';

declare const process: any;

declare const authServerUrl: any;

let providers: any[] = [];
if (process.env.BUDGETKEY_THEME == 'OpenProcurement') {
  providers.push({
      provide: THEME_TOKEN,
      useValue: {
          siteName: "רכש פתוח"
      }
  });
}

@NgModule({
  imports: [
    BrowserModule,
    BudgetKeyCommonModule
  ],
  providers: providers,
  declarations: [
    AppComponent
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {
}
