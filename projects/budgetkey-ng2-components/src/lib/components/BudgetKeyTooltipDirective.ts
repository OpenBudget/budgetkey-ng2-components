import { Directive, Input, ElementRef, HostListener, OnInit } from '@angular/core';

@Directive({
    selector: '[bkTooltip]'
})
export class BudgetKeyTooltipDirective implements OnInit {

    @Input('bkTooltip') content: string;

    private tooltipEl: any;

    constructor(el: ElementRef) {
        this.tooltipEl = el.nativeElement;
        el.nativeElement.classList.add('bk-tooltip-anchor');
    }

    ngOnInit() {
        this.tooltipEl.innerHTML += `<span class='bk-tooltip'>` + this.content + `</span>`;
    }
}
