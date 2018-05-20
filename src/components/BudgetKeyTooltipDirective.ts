import { Directive, Input, ElementRef, HostListener } from '@angular/core';

@Directive({
    selector: '[bkTooltip]'
})
export class BudgetKeyTooltipDirective {

    @Input('bkTooltip') content: string;

    private tooltipEl: any;

    constructor(el: ElementRef) {
        this.tooltipEl = el.nativeElement;
        el.nativeElement.classList.add('bk-tooltip-anchor');
        // this.tooltipEl = document.createElement('p');        
        // this.tooltipEl.className = 'bk-tooltip';
        // el.nativeElement.after(this.tooltipEl);
    }

    ngOnInit() {
        this.tooltipEl.innerHTML += `
            <span class='bk-tooltip'>` + this.content + `</span>
        `;
        // console.log('ngOnInit!', this.content, );
        // this.tooltipEl.innerHTML = this.content;
    }

    // @HostListener('mouseenter') onMouseEnter() {
    //     this.tooltipEl.classList.add('shown');
    //   }
      
    //   @HostListener('mouseleave') onMouseLeave() {
    //     this.tooltipEl.classList.remove('shown');
    //   }
}