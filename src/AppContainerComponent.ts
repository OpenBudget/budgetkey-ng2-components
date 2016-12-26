import {Component} from '@angular/core';

@Component({
    selector: 'budgetkey-container',
    styles: [`
       .app {
            direction: rtl;
       }
       .inner-app {
            width: 100%;
        }
    `],
    template: `
        <div class="app">
            <budgetkey-header></budgetkey-header>
            <div class="inner-app">
              <ng-content></ng-content>
            </div>        
        </div>
    `
})
export class AppContainerComponent {

    message = "Click Me ...";

    onClick() {
        this.message = "Hello World!";
        console.log(this.message);

    }

}
