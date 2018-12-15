import {Component, Inject, Input} from '@angular/core';
import {THEME_TOKEN} from '../constants';
const Smooch: any = require('smooch');

@Component({
    selector: 'budgetkey-footer',
    template: `
        <footer class="footer">
            <div class='top-line'>
                <div class="link" *ngFor="let link of theme.footerLinks">
                    <a [href]="link.href" [innerHtml]="link.title"></a>
                </div>
                <div class="hasadna">
                    <img class='hasadna-logo' src='assets/img/hasadna-logo.svg'>
                    <a class='hasadna-link' href="{{hasadnaUrl}}">הסדנא לידע ציבורי</a>
                </div>
            </div>
            <div class="bottom-line">
                <p>
                    <a href="https://github.com/OpenBudget/BudgetKey">קוד האתר</a>
                    <span>זמין תחת רשיון MIT.</span>
                </p>
                <p>
                    <img src='assets/img/cc-by-sa.svg'>
                    <span>על רוב תוכן האתר חל רישיון</span>
                    <a href="https://creativecommons.org/licenses/by-sa/4.0/">CC BY-SA 4.0 של Creative Commons</a>
                    <span>, אלא אם כן 
                    <a [href]='about("licenses")'>צויין אחרת</a>
                    .</span>
                </p>
                <p>
                    <span>
                        <span>{{theme.siteName}} כמו כלל פרויקטי</span>
                        <a href="https://hasadna.org.il">הסדנא לידע ציבורי</a>
                        <span>מפותח ע״י מתנדבים</span>
                        <a [href]='about("supporters")'>ונתמך ע״י מגוון גופים וקרנות</a><span>.</span>
                    </span>
                </p>
            </div>
        </footer>
    `
})
export class BudgetKeyFooterComponent {
    public hasadnaUrl = 'http://www.hasadna.org.il/';

    @Input() helpWidget: boolean = true;

    constructor (@Inject(THEME_TOKEN) private theme: any) { }

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
        if (this.helpWidget) {
            Smooch.init({
                appId: '579deb5e8975e33e008f7067',
                displayStyle: "button",
                customText: {
                  headerText: '?אפשר לעזור',
                  inputPlaceholder: 'כתבו לנו הודעה...',
                  sendButtonText: 'לשלוח',
                  introductionText: 'אתם מוזמנים לשאול אותנו הכל ומישהו' +
                    ' מצוות המתנדבים שלנו ישתדל לענות כמה שיותר מהר. ' +
                    'מכיוון שאנו לא תמיד זמינים, אתם מוזמנים להשאיר לנו ' +
                    'גם כתובת מייל בכדי שנוכל לחזור אליכם כשנראה את ההודעה.',
                },
            }).then(() => {
                console.log('Smooch init');              
            });    
        }
    }
}
