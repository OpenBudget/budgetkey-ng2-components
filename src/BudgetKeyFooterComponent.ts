import {Component} from '@angular/core';

import { Layout } from './constants';

@Component({
    selector: 'budgetkey-footer',
    styles: [`
        footer {
            padding-top: 5px;
            height: ${Layout.footerHeight}px;
            width: 100%;
            overflow:hidden;
            background-color: #ffffff;
            
            border-top: 1px solid #e5e5e5;
            -webkit-box-shadow: inset 0 13px 15px -15px rgba(0, 0, 0, .74);
            -moz-box-shadow: inset 0 13px 15px -15px rgba(0, 0, 0, .74);
            box-shadow: inset 0 13px 15px -15px rgba(0, 0, 0, .74);
        }

        .inner-footer {
            background: url(assets/img/hasadna.png) no-repeat left top / 70px;
            padding-left: 80px;
            margin-left: 10px;
            position: absolute;
            left: 0px;
            text-align: left;
            height: ${Layout.footerHeight}px;
        }
        
        .inner-text {
            margin-top: 16px;
        }
    `],
    template: `
        <footer class="footer">
            <div class="inner-footer">
                <div class="inner-text">
                    <div>מפתח התקציב</div>
                    <div>מבית <a href="{{hasadna_url}}">הסדנא לידע ציבורי</a></div>                
                </div>
            </div>   
        </footer>
    `
})

export class BudgetKeyFooterComponent {

    title = "מפתח התקציב, מבית";

}
