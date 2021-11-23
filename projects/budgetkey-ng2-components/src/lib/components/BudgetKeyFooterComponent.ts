import {Component, Inject, Input, OnInit} from '@angular/core';
import {THEME_TOKEN} from '../constants';
// const Smooch: any = require('smooch');
declare const Smooch: any;

@Component({
    selector: 'budgetkey-footer',
    template: `
        <footer class="footer">
            <div class='top-line'>
                <div class="link" *ngFor="let link of theme.footerLinks">
                    <a [href]="link.href" [innerHtml]="link.title"></a>
                </div>
                <div class="hasadna" *ngIf='!theme.hideFooterHasadnaLogo'>
                    <img class='hasadna-logo' src='assets/img/hasadna-logo.svg' alt='hasadna logo'>
                    <a class='hasadna-link' href="{{hasadnaUrl}}">הסדנא לידע ציבורי</a>
                </div>
            </div>
            <div class="bottom-line">
                <p>
                    <a href="https://github.com/OpenBudget/BudgetKey">קוד האתר</a>
                    <span>זמין תחת רשיון MIT.</span>
                </p>
                <p>
                    <img src='assets/img/cc-by-sa.svg' alt='cc-by-sa logo'>
                    <span>על רוב תוכן האתר חל רישיון</span>
                    <a href="https://creativecommons.org/licenses/by-sa/4.0/">CC BY-SA 4.0 של Creative Commons</a>
                    <span>, אלא אם כן
                    <a [href]='about("licenses")'>צויין אחרת</a>
                    .</span>
                </p>
                <p>
                    <span *ngIf='theme.footerText' [innerHtml]='theme.footerText'></span>
                    <span *ngIf='!theme.footerText'>
                        {{theme.siteName}} הוא פרויקט של
                        <a href="https://www.hasadna.org.il">הסדנא לידע ציבורי</a>
                        בהובלת <a href='https://whiletrue.industries'>אדם קריב</a>
                        <a [href]='about("supporters")'>ובתמיכה ושיתוף עם מגוון גופים וקרנות</a>.
                    </span>
                </p>
            </div>
        </footer>
    `
})
export class BudgetKeyFooterComponent implements OnInit {
    public hasadnaUrl = 'http://www.hasadna.org.il/';

    @Input() helpWidget = true;

    constructor (@Inject(THEME_TOKEN) public theme: any) { }

    about(hash: string) {
        let ret = '/about';
        if (this.theme.themeId) {
            ret += '?theme=' + this.theme.themeId;
        }
        if (hash) {
            ret += '#' + hash;
        }
        return ret;
    }

    ngOnInit() {
        // if (Smooch && this.helpWidget) {
        //     Smooch.init({
        //         appId: '579deb5e8975e33e008f7067',
        //         displayStyle: 'button',
        //         customText: {
        //           headerText: '?אפשר לעזור',
        //           inputPlaceholder: 'כתבו לנו הודעה...',
        //           sendButtonText: 'לשלוח',
        //           introductionText: 'אתם מוזמנים לשאול אותנו הכל ומישהו' +
        //             ' מצוות המתנדבים שלנו ישתדל לענות כמה שיותר מהר. ' +
        //             'מכיוון שאנו לא תמיד זמינים, אתם מוזמנים להשאיר לנו ' +
        //             'גם כתובת מייל בכדי שנוכל לחזור אליכם כשנראה את ההודעה.',
        //         },
        //     }).then(() => {
        //         console.log('Smooch init');
        //     });
        // }
    }
}
