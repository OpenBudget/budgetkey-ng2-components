import {NgModule} from "@angular/core";

import {AppContainerComponent} from "./AppContainerComponent";
import {BudgetKeyHeaderComponent} from "./BudgetKeyHeaderComponent";

/**
 * Created by adam on 27/12/2016.
 */
@NgModule({
  declarations: [
    AppContainerComponent,
    BudgetKeyHeaderComponent,
  ],
  exports: [
    AppContainerComponent,
    BudgetKeyHeaderComponent,
  ]
})
export class BudgetKeyCommonModule { }
