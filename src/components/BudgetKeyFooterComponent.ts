import {Component, Inject} from '@angular/core';
import {THEME_TOKEN} from '../constants';
const Smooch: any = require('smooch');

@Component({
    selector: 'budgetkey-footer',
    template: `
        <footer class="footer">
            <div class="links">
                <div class="link" *ngFor="let link of theme.footerLinks">
                    <a i18n="@@footerlinks" [href]="link.href" [innerHtml]="link.title"></a>
                </div>
            </div>
            <div class="hasadna"
                 [style.background-image]="'url(assets/img/hasadna-logo.svg)'">
                <div>
                    פרויקט מבית<br/>
                    <a href="{{hasadnaUrl}}">הסדנא לידע ציבורי</a>
                </div>
            </div>
            <div class="license">
                <div>
                    <img src="assets/img/cc-by-sa.svg">
                    <span>
                        על תוכן זה חל רישיון CC BY-SA 4.0 של Creative Commons |
                        هذا المنتج منشور تحت ترخيص مفتوح CC-BY-SA 4.0 التابع ل Creative Commons
                    </span>
                </div>
            </div>
            <div class="supporters" *ngIf="theme.supporters">
                <div class="supporter">
                    <span i18n="@@supportertext" class="supporterText">
                        אנו מכירים תודה לעשרות המתנדבים<br/>
                        אשר תרמו ממרצם וזמנם לפיתוח האתר.<br/><br/>                    
                        ובנוסף לתמיכתם האדיבה של &larr;
                    </span>
                </div>
                <div class="supporter" *ngFor="let sid of theme.supporters">
                    <span class="supporterText" *ngIf="theme.supporterInfos[sid].text" 
                          [innerHtml]="theme.supporterInfos[sid].text"></span>
                    <a class="supporterLogo" 
                          [title]="theme.supporterInfos[sid].name"
                          [style.background-image]="'url(assets/img/' + theme.supporterInfos[sid].logo + ')'"
                          [href]="theme.supporterInfos[sid].url"
                    ></a>
                </div>
            </div>   
            <div class="eu-disclaimer" *ngIf="theme.euDisclaimer">
                <span i18n="@@disclaimer">
                    This website was created and maintained with the financial support of the European Union. Its contents are the sole responsibility of the Public Knowledge Workshop and do not necessarily reflect the views of the European Union.
                </span>
            </div>
        </footer>
    `
})

export class BudgetKeyFooterComponent {
    public hasadnaUrl = 'http://www.hasadna.org.il/';
    constructor (@Inject(THEME_TOKEN) private theme: any) { }
}
