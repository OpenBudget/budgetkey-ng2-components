import {Component, Inject, Input, OnInit} from '@angular/core';
import {LINK_TEMPLATE, BudgetKeyLink} from './BudgetKeyLink';

@Component({
    selector: 'budgetkey-item-link',
    template: LINK_TEMPLATE
})
export class BudgetKeyItemLink extends BudgetKeyLink implements OnInit {
    @Input() docid = '';
    @Input() blank = false;
    @Input() linkTitle: string;
    @Input() onClick: () => PromiseLike<any>;

    constructor () {
        super();
    }

    ngOnInit () {
        this.onInit(this.blank, this.onClick);
        this.href = 'https://next.obudget.org/i/' +
            encodeURIComponent(this.docid);
    }

}
