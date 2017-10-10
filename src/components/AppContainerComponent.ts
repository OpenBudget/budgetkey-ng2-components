import {Component, ViewEncapsulation, Input} from '@angular/core';

@Component({
    selector: 'budgetkey-container',
    encapsulation: ViewEncapsulation.None,
    template: `
        <budgetkey-header [siteName]="siteName" *ngIf="showHeader"></budgetkey-header>
        <div class="app">
          <ng-content></ng-content>
        </div>
        <budgetkey-footer [siteName]="siteName" *ngIf="showFooter"></budgetkey-footer>
    `
})
export class AppContainerComponent {
    @Input() showHeader: boolean = true;
    @Input() showFooter: boolean = true;
    @Input() siteName: string = 'מפתח התקציב';
}
