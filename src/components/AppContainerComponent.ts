import {Component, ViewEncapsulation, Input} from '@angular/core';

@Component({
    selector: 'budgetkey-container',
    encapsulation: ViewEncapsulation.None,
    template: `
        <budgetkey-header *ngIf="showHeader" [showSearchBar]="showSearchBar"></budgetkey-header>
        <div class="app">
          <ng-content></ng-content>
        </div>
        <budgetkey-footer *ngIf="showFooter"></budgetkey-footer>
    `
})
export class AppContainerComponent {
    @Input() showHeader: boolean = true;
    @Input() showFooter: boolean = true;
    @Input() showSearchBar: boolean = false;
}
