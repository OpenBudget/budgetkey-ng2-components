import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppContainerComponent } from './components/AppContainerComponent';
import { BudgetKeyHeaderComponent } from './components/BudgetKeyHeaderComponent';
import { BudgetKeyFooterComponent } from './components/BudgetKeyFooterComponent';

import { THEME_TOKEN } from './constants';

import { AuthModule } from 'budgetkey-ng2-auth';

/**
 * Created by adam on 27/12/2016.
 */
@NgModule({
  imports: [
    CommonModule,
    AuthModule
  ],
  declarations: [
    AppContainerComponent,
    BudgetKeyHeaderComponent,
    BudgetKeyFooterComponent,
  ],
  providers: [
    {provide: THEME_TOKEN, useValue: {
      siteName: "מפתח התקציב"
    }}
  ],
  exports: [
    AppContainerComponent,
    BudgetKeyHeaderComponent,
    BudgetKeyFooterComponent,
  ]
})
export class BudgetKeyCommonModule { }
