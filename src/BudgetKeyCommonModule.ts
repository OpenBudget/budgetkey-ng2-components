import {NgModule} from "@angular/core";

import {AppContainerComponent} from "./AppContainerComponent";
import {BudgetKeyHeaderComponent} from "./BudgetKeyHeaderComponent";
import {BudgetKeyFooterComponent} from "./BudgetKeyFooterComponent";

/**
 * Created by adam on 27/12/2016.
 */
@NgModule({
  declarations: [
    AppContainerComponent,
    BudgetKeyHeaderComponent,
    BudgetKeyFooterComponent,
  ],
  exports: [
    AppContainerComponent,
    BudgetKeyHeaderComponent,
    BudgetKeyFooterComponent,
  ]
})
export class BudgetKeyCommonModule { }
