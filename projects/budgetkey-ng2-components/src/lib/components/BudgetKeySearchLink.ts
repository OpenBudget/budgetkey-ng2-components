import {Component, Inject, Input, OnInit} from '@angular/core';
import {LINK_TEMPLATE, BudgetKeyLink} from './BudgetKeyLink';

@Component({
    selector: 'budgetkey-search-link',
    template: LINK_TEMPLATE
})
export class BudgetKeySearchLink extends BudgetKeyLink implements OnInit {
    @Input() term = '';
    @Input() doctype = 'all';
    @Input() blank = false;
    @Input() linkTitle: string;
    @Input() onClick: () => PromiseLike<any>;

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
