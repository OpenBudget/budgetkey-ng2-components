import {Component, ViewEncapsulation, Input} from '@angular/core';

@Component({
    selector: 'budgetkey-container',
    encapsulation: ViewEncapsulation.None,
    template: `
        <budgetkey-header *ngIf="showHeader"
                          [showSearchBar]="showSearchBar"
        ></budgetkey-header>
        <div class="app">
          <ng-content></ng-content>
        </div>
        <budgetkey-footer *ngIf="showFooter" [helpWidget]='helpWidget'></budgetkey-footer>
    `
})
export class AppContainerComponent {
    @Input() showHeader = true;
    @Input() showFooter = true;
    @Input() showSearchBar = false;
    @Input() helpWidget = true;
}
