import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';

import { BudgetKeyCommonModule } from '../src/BudgetKeyCommonModule';

@NgModule({
  imports:      [
    BrowserModule,
    BudgetKeyCommonModule
  ],
  declarations: [
    AppComponent,
  ],
  providers: [
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
