import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AppContainerComponent,
         BudgetKeyFooterComponent,
         BudgetKeyHeaderComponent,
         BudgetKeySearchBar }  from './components';

import { THEME_TOKEN } from './constants';

import { AuthModule } from 'budgetkey-ng2-auth';

/**
 * Created by adam on 27/12/2016.
 */
@NgModule({
  imports: [
    CommonModule,
    AuthModule,
    FormsModule
  ],
  declarations: [
    AppContainerComponent,
    BudgetKeyHeaderComponent,
    BudgetKeyFooterComponent,
    BudgetKeySearchBar,
  ],
  providers: [
    {provide: THEME_TOKEN, useValue: {
      siteName: "",
      searchPlaceholder: "חפשו הכל... סעיף תקציבי, ארגון, אדם או כל דבר אחר העולה על דעתכם.."
    }}
  ],
  exports: [
    AppContainerComponent,
    BudgetKeyHeaderComponent,
    BudgetKeyFooterComponent,
    BudgetKeySearchBar,
  ]
})
export class BudgetKeyCommonModule { }
