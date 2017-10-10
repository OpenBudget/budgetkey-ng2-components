import {Component, ViewEncapsulation, Input, OnInit} from '@angular/core';

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
export class AppContainerComponent implements OnInit {
    @Input() showHeader: boolean = true;
    @Input() showFooter: boolean = true;
    @Input() siteName: string = 'מפתח התקציב';
    @Input() theme: string = '';

    ngOnInit() {
        if (this.theme == 'OpenProcurement') {
            this.siteName = 'רכש פתוח';
        }
    }
}
