import {Component, ViewEncapsulation} from '@angular/core';

import { Layout } from './constants';

@Component({
    selector: 'budgetkey-container',
    encapsulation: ViewEncapsulation.None,
    styleUrls: [
        'assets/styles/bootstrap.min.css',
        'assets/styles/bootstrap-rtl.min.css',
        'assets/fonts/alefhebrew.css',
        'assets/fonts/glyphicons.css'
    ],
    styles: [`   
       .app {
            direction: rtl;
            font-family: "Alef Hebrew", "Helvetica Neue", Helvetica, Arial, sans-serif;
            margin: 0 0 ${Layout.footerHeight + 'px'}
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
            <budgetkey-footer></budgetkey-footer>
        </div>
    `
})
export class AppContainerComponent {
}
