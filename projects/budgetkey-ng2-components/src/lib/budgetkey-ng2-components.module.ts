import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AppContainerComponent } from './components/AppContainerComponent';
import { BudgetKeyFooterComponent } from './components/BudgetKeyFooterComponent';
import { BudgetKeyHeaderComponent } from './components/BudgetKeyHeaderComponent';
import { BudgetKeySearchBar } from './components/BudgetKeySearchBar';
import { BudgetKeyTooltipDirective } from './components/BudgetKeyTooltipDirective';
import { BudgetKeySubscribeStar } from './components/BudgetKeySubscribeStar';
import { BudgetKeySubscriptionManager } from './components/BudgetKeySubscriptionManager';
import { ModalComponent} from './components/ModalComponent';

import { THEME_TOKEN } from './constants';

import { BudgetkeyNg2AuthModule } from 'budgetkey-ng2-auth';
import { ListsService } from './services/lists.service';
import { HttpClientModule } from '@angular/common/http';

/**
 * Created by adam on 27/12/2016.
 */
@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    BudgetkeyNg2AuthModule,
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
    ModalComponent
  ],
  providers: [
    ListsService,
  ],
  exports: [
    AppContainerComponent,
    BudgetKeyHeaderComponent,
    BudgetKeyFooterComponent,
    BudgetKeySearchBar,
    BudgetKeyTooltipDirective,
    BudgetKeySubscribeStar,
    BudgetKeySubscriptionManager,
    ModalComponent
  ]
})
export class BudgetKeyCommonModule { }
