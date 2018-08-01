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
    <modal [title]='' 
           *ngIf='loginModal' 
           (close)='loginModal=false'
    >
        <div class='subscription-modal-contents'>
            <img src='assets/img/star-upside-down.svg'>
            <div class='question-mark'>?</div>
            <div class='title'>הלו… מי שם?</div>
            <p>
                סליחה, אבל בכדי להציג לך את החיפושים השמורים שלך
                נצטרך לדעת עם מי אנחנו מדברים בדיוק.
                אפשר להתחבר באותה פשטות בה נרשמים:    
            </p>
            <a [href]='loginUrl'><img src='assets/img/google_login.svg'>
            </a>
            <span class='connect'>התחברו עם גוגל</span>
        </div>
    </modal>
`,
    styles: [`
    .subscription-modal-contents {
        display: flex;
        flex-flow: column;
        align-items: center;
    }

    .question-mark {
        color: #FFFFFF;	
        font-family: "Miriam Libre";
        font-size: 42px;
        font-weight: bold;
        margin-top: -50px;
        margin-bottom: 50px;
    }

    .title {
        font-family: "Miriam Libre";
        font-size: 22px;
        font-weight: bold;
        color: #FF5A5F;
        margin-bottom: 18px;
    }
    p {
        text-align: center;
        margin-bottom: 30px;
    }
    .connect {
        display: block;
        pointer-events: none;
        color: #FFFFFF;	
        font-family: "Miriam Libre";
        font-size: 14px;
        font-weight: bold;
        letter-spacing: 0.4px;
        margin-top: -33px;
        margin-right: -33px;
        margin-bottom: 33px;
    }
`]
})
export class BudgetKeySubscriptionManager {
    @Input('externalUrl') externalUrl: string;
    @Input('externalTitle') externalTitle: string;
    @Input('externalProperties') externalProperties: any;

    private isLoggedIn: boolean;
    private loginUrl: string = null;
    private loginModal = false;
    private subscribedUrls = {};

    constructor (private auth: AuthService,
                 private lists: ListsService) {}

    private isSubscribed() {
        return this.subscribedUrls.hasOwnProperty(this.externalUrl);
    }

    private starClicked() {
        if (this.isLoggedIn) {
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
        } else {
            this.loginModal = true;
        }
    }

    ngOnInit() {
        this.auth.getUser()
            .subscribe((user) => {
                this.isLoggedIn = user && user.authenticated;
                if (this.isLoggedIn) {
                    this.lists.get(SEARCHES_LIST)
                    .subscribe((lc: ListContents) => {
                        for (let item of lc.items) {
                            this.subscribedUrls[item.url] = item.id;
                        }
                    });
                } else {
                    if (user && user.providers && user.providers.google) {
                        this.loginUrl = user.providers.google.url;
                    }
                    this.subscribedUrls = {};
                }
            });
    }
}
