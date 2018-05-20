import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AppContainerComponent,
         BudgetKeyFooterComponent,
         BudgetKeyHeaderComponent,
         BudgetKeySearchBar, 
         BudgetKeyTooltipDirective}  from './components';

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
    BudgetKeyTooltipDirective,
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
        ],
        footerLinks: [
          {
            href: 'mailto:info@hasadna.org.il',
            title: 'צרו קשר'
          },
          {
            href: 'https://forum.hasadna.org.il/c/eknights/obudget',
            title: 'דווחו על תקלה'
          },
          {
            href: 'https://github.com/OpenBudget/BudgetKey',
            title: 'קוד האתר'
          },
          {
            href: 'https://forum.hasadna.org.il/c/eknights/obudget',
            title: 'קבוצת הדיון שלנו'
          },
          {
            href: 'https://github.com/OpenBudget/BudgetKey/blob/master/documentation/UsingTheAPI.md',
            title: 'API'
          },
        ],
        supporterInfos: {
            eu: {
              name: 'האיחוד האירופי',
              logo: 'eu.svg',
              url: 'https://europa.eu/european-union/index_en',
              text: `
This Project is funded by the European Union<br/>
פרויקט זה מתבצע במימון האיחוד האירופי<br/>
هذا المشروع ممول من قبل الاتحاد الأوروبي `,
            },
            midot: {
              name: 'מידות',
              logo: 'midot.svg',
              url: 'http://www.midot.org.il/',
            },
            migdal: {
              name: 'מגדל',
              logo: 'migdal.svg',
              url: 'https://www.migdal.co.il/He/MigdalTeam/social_involvment_migdal/Pages/social_inv.aspx',
            },

        },
        supporters: ['eu', 'midot', 'migdal'],
        euDisclaimer: true
      }
    }
  ],
  exports: [
    AppContainerComponent,
    BudgetKeyHeaderComponent,
    BudgetKeyFooterComponent,
    BudgetKeySearchBar,
    BudgetKeyTooltipDirective,
  ]
})
export class BudgetKeyCommonModule { }
