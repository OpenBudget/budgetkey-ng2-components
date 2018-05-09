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
    {
      provide: THEME_TOKEN, 
      useValue: {
        siteUrl: "https://next.obudget.org",
        siteLogo: "budgetkey.svg",
        searchPlaceholder: "חפשו הכל... סעיף תקציבי, ארגון, אדם או כל דבר אחר העולה על דעתכם..",
        searchBarConfig: [
          {
            name: 'הכל',
            placeholder: 'חפשו הכל... סעיף תקציבי, ארגון, אדם או כל דבר אחר העולה על דעתכם...',
            main: true,
            id: 'all',
            rid: []
          },
          {
            name: 'סעיף תקציבי',
            placeholder: 'חפשו שמות של סעיפים ותקנות תקציביות...',
            defaultTerm: 'משרד',
            id: 'budget',
            rid: ['budget']
          },
          {
            name: 'ארגון',
            placeholder: 'חפשו פרטים של חברות, עמותות וארגונים אחרים...',
            id: 'entities',
            rid: ['entities']
          },
          {
            name: 'העברה תקציבית',
            placeholder: 'חפשו פרטים על העברות תקציביות...',
            id: 'national-budget-changes',
            rid: ['nationalbudgetchanges']
          },
          {
            name: 'תמיכות',
            placeholder: 'חפשו פרטים על תמיכות תקציביות...',
            id: 'supports',
            rid: ['supports']
          },
          {
            name: 'רכש',
            placeholder: 'חפשו פרטים על מכרזים, פשטורים ממכרז והתקשרויות ממשלתיות...',
            id: 'tenders,contract-spending',
            rid: ['tenders', 'contractspending']
          }
        ]
      }
    }
  ],
  exports: [
    AppContainerComponent,
    BudgetKeyHeaderComponent,
    BudgetKeyFooterComponent,
    BudgetKeySearchBar,
  ]
})
export class BudgetKeyCommonModule { }
