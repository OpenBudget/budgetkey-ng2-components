import {Component, Input, Output, EventEmitter, OnChanges, OnInit} from '@angular/core';


@Component({
    selector: 'budgetkey-sub-star',
    template: `
    <img *ngIf='enabled && active' src='assets/img/star-active.svg'
         (click)='click($event)'
    />
    <img *ngIf='!active || !enabled' src='assets/img/star-inactive.svg'
         [style.opacity]="opacity"
         (click)='click($event)'
    />
    `
})
export class BudgetKeySubscribeStar implements OnChanges, OnInit {
    @Input() enabled = true;
    @Input() active = true;
    @Output() clicked = new EventEmitter<any>();

    // private stroke = '';
    // private fill = '';
    public opacity = 1;

    // private COLOR = '#FF5A5F';

    constructor () {}

    ngOnInit() {
        this.ngOnChanges();
    }

    ngOnChanges() {
        // this.stroke = this.COLOR;
        this.opacity = 0.5;
        // this.fill = 'none';
        if (this.enabled) {
            this.opacity = 1;
            // if (this.active) {
            //     this.fill = this.COLOR;
            // }
        }
    }

    click(e: any) {
        this.clicked.next(e);
    }
}
