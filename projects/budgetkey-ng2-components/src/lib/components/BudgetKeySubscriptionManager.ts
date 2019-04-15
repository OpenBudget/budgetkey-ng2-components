import {Component, Inject, Input, Output, EventEmitter, OnChanges, OnInit} from '@angular/core';
import { AuthService } from 'budgetkey-ng2-auth';
import { ListsService, ListItem, ListContents } from '../services/lists.service';
import { SEARCHES_LIST } from '../constants';

@Component({
    selector: 'budgetkey-subscription-manager',
    template: `
    <budgetkey-sub-star *ngIf='term'
                        [enabled]='isLoggedIn'
                        [active]='isSubscribed()'
                        (clicked)='starClicked()'
    ></budgetkey-sub-star>
    <modal [title]=''
           *ngIf='loginModal'
           (close)='loginModal=false'
    >
        <div class='subscription-modal-contents'>
            <img src='assets/img/star-active.svg' height='90px'>
            <div class='title'>הרשמו לעדכונים</div>
            <a [href]='loginUrl'><img src='assets/img/google_login.svg'></a>
            <span class='connect'>התחברו עם גוגל</span>
            <p>
            פעם בשבוע נשלח לכם דואר אלקטרוני ובו עדכונים בכל הנוגע ל<strong>{{term}}</strong>
            תוכלו להוסיף ערכים נוספים למייל העדכונים השבועי בלחיצה על כפתור הכוכב
            </p>
        </div>
    </modal>
`,
    styles: [`
    .subscription-modal-contents {
        display: flex;
        flex-flow: column;
        align-items: center;
    }
    .title {
        font-family: "Miriam Libre";
        font-size: 22px;
        font-weight: bold;
        color: #FF5A5F;
        margin-bottom: 30px;
    }
    p {
        text-align: center;
        margin-top: 30px;
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
export class BudgetKeySubscriptionManager implements OnInit {
    @Input() externalUrl: string;
    @Input() externalTitle: string;
    @Input() externalProperties: any;
    @Input() term: string;
    @Input() docType: any;

    public isLoggedIn: boolean;
    public loginUrl: string = null;
    public loginModal = false;
    private subscribedUrls = {};

    constructor (private auth: AuthService,
                 private lists: ListsService) {}

    public isSubscribed() {
        return this.subscribedUrls.hasOwnProperty(this.urlKey(this.externalUrl));
    }

    public starClicked() {
        if (this.isLoggedIn) {
            if (this.isSubscribed()) {
                this.lists.delete(SEARCHES_LIST, this.subscribedUrls[this.externalUrl])
                            .subscribe((success) => {
                                delete this.subscribedUrls[this.urlKey(this.externalUrl)];
                            });
            } else {
                const item = new ListItem();
                item.url = this.externalUrl;
                item.title = this.externalTitle || this.term;
                item.properties = this.externalProperties || {
                    docType: this.docType,
                    period: {
                        value: 'all'
                    },
                    kind: 'search',
                    term: this.term
                };
                this.lists.put(SEARCHES_LIST, item)
                            .subscribe((added) => {
                                this.subscribedUrls[this.urlKey(item.url)] = item.id;
                            });
            }
        } else {
            this.loginModal = true;
            let search = document.location.search.trim();
            if (search.startsWith('?')) {
                search = search.substring(1);
            }
            const params = new URLSearchParams(search);
            params.set('subscribe', 'true');
            search = params.toString();
            const href = document.location.href.split('?')[0] + '?' + search;
            this.auth.check(href)
                .subscribe((user) => {
                    const login_href = user.providers && (user.providers.google || user.providers.github);
                    if (login_href) {
                        this.loginUrl = login_href.url;
                    }
                });
        }
    }

    ngOnInit() {
        this.auth.getUser()
            .subscribe((user) => {
                this.isLoggedIn = user && user.authenticated;
                if (this.isLoggedIn) {
                    this.lists.get(SEARCHES_LIST)
                    .subscribe((lc: ListContents) => {
                        for (const item of lc.items) {
                            this.subscribedUrls[this.urlKey(item.url)] = item.id;
                        }
                        this.checkIfSubscribeNeeded();
                    });
                } else {
                    if (user && user.providers && user.providers.google) {
                        this.loginUrl = user.providers.google.url;
                    }
                    this.subscribedUrls = {};
                }
            });
    }

    checkIfSubscribeNeeded() {
        let search = document.location.search.trim();
        if (search.startsWith('?')) {
          search = search.substring(1);
        }
        const params = new URLSearchParams(search);
        const subscribe = params.get('subscribe');
        if (subscribe === 'true') {
            // remove the jwt query param from the URL
            params.delete('subscribe');
            search = params.toString();
            history.replaceState(null,
                                 document.title,
                                 document.location.href.split('?')[0] + '?' + search);
            if (!this.isSubscribed()) {
                this.starClicked();
            }
        }
    }

    urlKey(url) {
        const search = url.split('?')[1];
        if (search) {
            const p = new URLSearchParams(search);
            return `${p.get('q')}/${p.get('dd')}`;
        }
    }
}
