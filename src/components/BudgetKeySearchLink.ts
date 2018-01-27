import {Component, Inject, Input} from '@angular/core';
import {LINK_TEMPLATE, BudgetKeyLink} from './BudgetKeyLink';

@Component({
    selector: 'budgetkey-search-link',
    template: LINK_TEMPLATE
})
export class BudgetKeySearchLink extends BudgetKeyLink {
    @Input('term') term: string = '';
    @Input('doctype') doctype: string = 'all';
    @Input('blank') blank: boolean = false;
    @Input('linktitle') linkTitle: string;
    @Input('onClick') onClick: () => PromiseLike<any>;;

    constructor () {
        super();
    }

    ngOnInit () {
        this.onInit(this.blank, this.onClick);
        this.href = 'https://next.obudget.org/s?q=' + 
            encodeURIComponent(this.term) + 
            '&dd=' +
            encodeURIComponent(this.doctype);
    }

}
