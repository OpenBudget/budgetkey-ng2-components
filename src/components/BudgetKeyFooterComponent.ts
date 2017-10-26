import {Component, Inject} from '@angular/core';
import {THEME_TOKEN} from '../constants';

@Component({
    selector: 'budgetkey-footer',
    template: `
        <footer class="footer">
            <div class="inner-footer">
                <div class="inner-text">
                    <div>{{theme.siteName}}</div>
                    <div>מבית <a href="{{hasadnaUrl}}">הסדנא לידע ציבורי</a></div>                
                </div>
            </div>   
        </footer>
    `
})

export class BudgetKeyFooterComponent {
    public hasadnaUrl = 'http://www.hasadna.org.il/';
    constructor (@Inject(THEME_TOKEN) private theme: any) { }
}
