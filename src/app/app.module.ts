import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { getAuthServiceConfigProvider } from 'budgetkey-ng2-auth';

import { BudgetKeyCommonModule } from 'budgetkey-ng2-components';

import { AppComponent } from './app.component';

const providers: any[] = [getAuthServiceConfigProvider('https://next.obudget.org')];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BudgetKeyCommonModule
  ],
  providers: providers,
  bootstrap: [AppComponent]
})
export class AppModule { }
