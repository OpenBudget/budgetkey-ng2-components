import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AppContainerComponent,
         BudgetKeyFooterComponent,
         BudgetKeyHeaderComponent,
         BudgetKeySearchBar, 
         BudgetKeyTooltipDirective,
         BudgetKeySubscribeStar,
         BudgetKeySubscriptionManager,
         ModalComponent}  from './components';

import { THEME_TOKEN } from './constants';

import { AuthModule } from 'budgetkey-ng2-auth';
import { ListsService } from './services/lists.service';

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
    BudgetKeyTooltipDirective,
    BudgetKeySubscribeStar,
    BudgetKeySubscriptionManager,
    ModalComponent,
  ],
  providers: [
    ListsService,
    {
      provide: THEME_TOKEN, 
      useValue: {
        siteUrl: "https://next.obudget.org",
        siteLogo: "budgetkey.svg",
        searchPlaceholder: "חפשו הכל... סעיף תקציבי, ארגון, אדם או כל דבר אחר העולה על דעתכם..",
        searchBarConfig: [
          {
            id: 'all',
            name: 'הכל',
            types: ['all'],
            placeholder: 'חפשו הכל... סעיף תקציבי, ארגון, אדם או כל דבר אחר העולה על דעתכם...',
            main: true,
          },
          {
            id: 'budget',
            name: 'סעיפים תקציביים',
            types: ['budget'],
            placeholder: 'חפשו שמות של סעיפים ותקנות תקציביות...',
            defaultTerm: 'משרד'
          },
          {
            id: 'entities',
            name: 'ארגונים',
            types: ['entities'],
            placeholder: 'חפשו פרטים של חברות, עמותות וארגונים אחרים...',
            filterMenu: [
              {
                id: 'entity_kind',
                display: 'סוג הארגון',
                options: [
                  {
                    id: 'all',
                    display: 'כל סוגי הארגונים'
                  },
                  {
                    id: 'companies',
                    display: 'חברות',
                    filters: {
                      kind: 'company'
                    }
                  },
                  {
                    id: 'associations',
                    display: 'עמותות וחל״צ',
                    filters: {
                      kind: 'association'
                    }
                  },
                  {
                    id: 'municipalities',
                    display: 'רשויות מקומיות',
                    filters: {
                      kind: 'municipality'
                    }
                  },
                  {
                    id: 'other',
                    display: 'ארגונים אחרים',
                    filters: {
                      kind__not: ['company', 'association', 'municipality']
                    }
                  }
                ]
              },
              {
                "id": "public_funds",
                "display": "כספי מדינה",
                "options": [
                  {
                    "id": "all",
                    "display": "ללא הגבלה"
                  },
                  {
                    "id": "supported",
                    "display": "קיבלו תמיכה ממשלתית",
                    "filters": {
                      "received_amount_supports__gt": 0
                    }
                  },
                  {
                    "id": "contracted",
                    "display": "סיפקו שירותים לממשלה",
                    "filters": {
                      "received_amount_contracts__gt": 0
                    }
                  },
                  {
                    "id": "both",
                    "display": "גם וגם",
                    "filters": {
                      "received_amount_supports__gt": 0,
                      "received_amount_contracts__gt": 0
                    }
                  }
                ]
              }
            ]
          },
          {
            id: 'national-budget-changes',
            name: 'העברות תקציביות',
            types: ['national-budget-changes'],
            placeholder: 'חפשו פרטים על העברות תקציביות...',
          },
          {
            id: 'supports',
            name: 'תמיכות והעברות',
            types: ['supports'],
            placeholder: 'חפשו פרטים על תמיכות תקציביות...',
          },
          {
            id: 'procurement',
            name: 'מכרזים והתקשרויות',
            types: ['tenders', 'contract-spending'],
            placeholder: 'חפשו פרטים על מכרזים, פשטורים ממכרז והתקשרויות ממשלתיות...',
            filterMenu: [
              {
                id: 'tender_type',
                display: 'סוג התהליך',
                options: [
                  {
                    id: 'all',
                    display: 'הכל'
                  },
                  {
                    id: 'tenders',
                    display: 'מכרזים',
                    filters: {
                      _type: 'tenders',
                      tender_type: ['office', 'central']
                    }
                  },
                  {
                    id: 'exemptions',
                    display: 'בקשות פטור ממכרז',
                    filters: {
                      _type: 'tenders',
                      tender_type: ['exemptions']
                    }
                  },
                  {
                    id: 'contracts',
                    display: 'התקשרויות',
                    filters: {
                      _type: 'contract-spending',
                    }
                  },
                ]
              }
            ]
          }
        ],
        headerLinks: [
          {
            href: "/about/",
            title: 'מי אנחנו'
          },
          {
            href: "http://www.hasadna.org.il/%D7%9E%D7%A4%D7%AA%D7%97-%D7%94%D7%AA%D7%A7%D7%A6%D7%99%D7%91/",
            title: 'הסדנא'
          },
          {
            href: "https://www.jgive.com/new/he/ils/donation-targets/3268#donation-modal",
            title: 'תרמו לנו'
          },
        ],
        footerLinks: [
          {
            href: '/about',
            title: 'אודות'
          },
          {
            href: '/about#team',
            title: 'הצוות'
          },
          {
            href: 'https://github.com/OpenBudget/BudgetKey/blob/master/documentation/UsingTheAPI.md',
            title: 'API'
          },
          {
            href: 'https://old.obudget.org',
            title: 'האתר הישן'
          },
          {
            href: 'mailto:info@hasadna.org.il',
            title: 'צרו קשר'
          },
          {
            href: 'https://github.com/OpenBudget/BudgetKey/issues/new',
            title: 'דווחו על תקלה'
          },
          {
            href: '/about#privacy',
            title: 'מדיניות פרטיות'
          },
          {
            href: 'https://www.jgive.com/new/he/ils/donation-targets/3268#donation-modal',
            title: 'תרמו לנו'
          },
        ],
      }
    }
  ],
  exports: [
    AppContainerComponent,
    BudgetKeyHeaderComponent,
    BudgetKeyFooterComponent,
    BudgetKeySearchBar,
    BudgetKeyTooltipDirective,
    BudgetKeySubscribeStar,
    BudgetKeySubscriptionManager,
    ModalComponent,
  ]
})
export class BudgetKeyCommonModule { }
