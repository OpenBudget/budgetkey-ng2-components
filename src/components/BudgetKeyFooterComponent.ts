import {Component} from '@angular/core';

@Component({
    selector: 'budgetkey-footer',
    template: `
        <footer class="footer">
            <div class="inner-footer">
                <div class="inner-text">
                    <div>רכש פתוח</div>
                    <div>מבית <a href="{{ hasadna_url }}">הסדנא לידע ציבורי</a></div>                
                </div>
            </div>   
        </footer>
    `
})

export class BudgetKeyFooterComponent {

    title = "רכש פתוח, מבית";

}
