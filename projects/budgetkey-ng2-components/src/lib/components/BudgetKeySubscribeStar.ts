import {Component, Input, Output, EventEmitter, OnChanges, OnInit} from '@angular/core';


@Component({
    selector: 'budgetkey-sub-star',
    template: `
    <ng-container *ngIf='enabled && active'>
        <img src='assets/img/star-active.svg'
            (click)='click($event)'
        />
    </ng-container>
    <ng-container *ngIf='!active || !enabled'>
        <span [class.faded]='!enabled'
              (click)='click($event)'
        >הרשמו לעדכונים</span>
        <img src='assets/img/star-inactive.svg'
            [class.faded]='!enabled'
            (click)='click($event)'
        />
    </ng-container>
    `,
    styles: [
    `:host {
        display: flex;
        flex-flow: row;
        align-items: center;
    }
    span {
        color: #FF5A5F;
        margin-left: 10px;
    }
    span.faded, img.faded {
        opacity: 0.7;
    }
    :host:hover span, :host:hover img {
        opacity: 1;
        cursor: pointer;
    }
    `
    ]
})
export class BudgetKeySubscribeStar implements OnInit {
    @Input() enabled = true;
    @Input() active = true;
    @Output() clicked = new EventEmitter<any>();

    constructor () {}

    ngOnInit() {
    }

    click(e: any) {
        this.clicked.next(e);
    }
}
