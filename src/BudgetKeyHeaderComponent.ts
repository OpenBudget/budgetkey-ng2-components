import {Component} from '@angular/core';

@Component({
    selector: 'budgetkey-header',
    styles: [`
       h1 {
            color: blue;
        }
    `],
    template: `
        <h1>{{ title }}</h1>
    `
})

export class BudgetKeyHeaderComponent {

    title = "מפתח התקציב";

}
