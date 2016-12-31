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
        html, body {
            height: 100%;
            display: block;
            margin: 0;
            font-family: "Alef Hebrew", "Helvetica Neue", Helvetica, Arial, sans-serif !important;
        }
       .app {
            direction: rtl;
            min-height: 100%;
            margin-top: ${-Layout.headerHeight}px;
            margin-bottom: ${-Layout.footerHeight-6}px;
            padding-top: ${Layout.headerHeight}px;
            padding-bottom: ${Layout.footerHeight}px;
            width: 100%;
        }
        
        .app:after {
            content: "";
            display: block;
            height: ${Layout.footerHeight + 'px'};
        }
        
    `],
    template: `
        <budgetkey-header></budgetkey-header>
        <div class="app">
          <ng-content></ng-content>
        </div>
        <budgetkey-footer></budgetkey-footer>
    `
})
export class AppContainerComponent {
}
