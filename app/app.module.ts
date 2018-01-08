import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BudgetKeyCommonModule, THEME_TOKEN } from '../src';

import { AppComponent } from './app.component';

import {provideAuthService} from 'budgetkey-ng2-auth/lib/services'

declare const process: any;

declare const authServerUrl: any;

let providers: any[] = [
    provideAuthService(typeof(authServerUrl) === 'undefined' ? 'https://next.obudget.org' : authServerUrl)
];
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
