import {Component, Inject, Input} from '@angular/core';
import {LINK_TEMPLATE, BudgetKeyLink} from './BudgetKeyLink';

@Component({
    selector: 'budgetkey-item-link',
    template: LINK_TEMPLATE
})
export class BudgetKeyItemLink extends BudgetKeyLink {
    @Input('docid') docid: string = '';
    @Input('blank') blank: boolean = false;
    @Input('linktitle') linkTitle: string;
    @Input('onClick') onClick: () => PromiseLike<any>;;

    constructor () {
        super();
    }

    ngOnInit () {
        this.onInit(this.blank, this.onClick);
        this.href = 'https://next.obudget.org/i/' + 
            encodeURIComponent(this.docid);
    }

}
