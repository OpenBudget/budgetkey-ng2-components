import {Component} from '@angular/core';
import {ThemeService} from '../services/ThemeService';

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
    constructor (protected theme: ThemeService) { }
}
