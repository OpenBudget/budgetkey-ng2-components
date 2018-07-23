import {Component, Inject, Input, Output, EventEmitter, OnChanges} from '@angular/core';
import { AuthService } from 'budgetkey-ng2-auth';
import { ListsService, ListItem, ListContents } from '../services';
import { SEARCHES_LIST } from '../constants';

@Component({
    selector: 'budgetkey-subscription-manager',
    template: `
    <budgetkey-sub-star [enabled]='isLoggedIn' 
                        [active]='isSubscribed()'
                        (clicked)='starClicked()'
    ></budgetkey-sub-star>
`
})
export class BudgetKeySubscriptionManager {
    @Input('externalUrl') externalUrl: string;
    @Input('externalTitle') externalTitle: string;
    @Input('externalProperties') externalProperties: any;

    private isLoggedIn: boolean;
    private subscribedUrls = {};

    constructor (private auth: AuthService,
                 private lists: ListsService) {}

    private isSubscribed() {
        return this.subscribedUrls.hasOwnProperty(this.externalUrl);
    }

    private starClicked() {
        if (this.isSubscribed()) {
            this.lists.delete(SEARCHES_LIST, this.subscribedUrls[this.externalUrl])
                        .subscribe((success) => {
                            delete this.subscribedUrls[this.externalUrl]; 
                        });
        } else {
            let item = new ListItem();
            item.url = this.externalUrl;
            item.title = this.externalTitle;
            item.properties = this.externalProperties;
            this.lists.put(SEARCHES_LIST, item)
                        .subscribe((added) => {
                        this.subscribedUrls[item.url] = item.id;
                        });
        }
    }

    ngOnInit() {
        this.auth.getUser()
            .subscribe((user) => {
                this.isLoggedIn = user && user.authenticated;
                this.lists.get(SEARCHES_LIST)
                    .subscribe((lc: ListContents) => {
                        for (let item of lc.items) {
                            this.subscribedUrls[item.url] = item.id;
                        }
                    });
            });
    }
}
