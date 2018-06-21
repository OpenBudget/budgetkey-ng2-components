import {Component, Input, Output, EventEmitter, OnChanges} from '@angular/core';

// <!--svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
// version="1.1" width="20px" height="20px" viewBox="0 10 190 190"
// (click)='click($event)'>
// <path d="M108.032,28.131c-4.4-9-19.1-9-23.6,0l-20,40.6l-44.8,6.5c-5,0.7-9.1,4.2-10.6,8.9c-1.5,4.8-0.3,10,3.3,13.5l32.4,31.6    l-7.6,44.6c-0.8,4.9,1.2,9.9,5.2,12.8c2.3,1.7,5,2.5,7.7,2.5c2.1,0,4.2-0.6,6.1-1.6l40.1-21.2l40.1,20.9c1.9,1,4,1.1,6.1,1.1    c0.1,0,0.2,0,0.3,0c7.3,0,13.1-5.5,13.1-12.8c0-1.7-0.3-2.9-0.9-4.4l-7.2-42.1l32.4-31.6c3.6-3.5,4.9-8.7,3.3-13.5    c-1.6-4.8-5.7-8.2-10.6-8.9l-44.8-6.5L108.032,28.131z" 
//       [attr.stroke]="stroke" 
//       [attr.fill]="fill" 
//       [attr.opacity]="opacity"
//       stroke-width="18px"/>
// </svg-->

@Component({
    selector: 'budgetkey-sub-star',
    template: `
    <img *ngIf='enabled && active' src='/assets/img/star-active.svg'
         (click)='click($event)'
    />
    <img *ngIf='!active || !enabled' src='/assets/img/star-inactive.svg'
         [style.opacity]="opacity"
         (click)='click($event)'
    />
    `
})
export class BudgetKeySubscribeStar implements OnChanges {
    @Input() enabled: boolean = true;
    @Input() active: boolean = true;
    @Output() clicked = new EventEmitter<any>();

    // private stroke = '';
    // private fill = '';
    private opacity = 1;

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
