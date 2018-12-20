import { Component, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';


@Component({
    selector: 'modal',
    encapsulation: ViewEncapsulation.None,
    template: `
      <div class="bkmodal-bg">
        <div class="bkmodal-dialog">                
          <div class="bkmodal-content">
              <button type="button" class="close" (click)="_close()">&times;</button>
              <div class="bkmodal-header" *ngIf='title'>
                <h4 class="modal-title">{{title}}</h4>
              </div>
              <div class="bkmodal-body">
                <ng-content></ng-content>
              </div>
            </div>
        </div>
      </div>
`, 
    styles: [`
    .bkmodal-bg {
      position: fixed;
      z-index: 10000;
      top: 0;
      right: 0;
      height: 100%;
      width: 100%;
      background-color: rgba(0,0,0,0.75);
      display: flex;
      flex-flow: row;
      align-items: center;
      justify-content: center;
    }

    .bkmodal-dialog {

      width: 60%;
      max-width: 600px;
      background: white;
      border: none;
      box-shadow: 0 2px 10px 0 rgba(0,0,0,0.5);
      border-radius: 10px;
    
    }
     
    .bkmodal-content {
        position: relative;    
        padding: 100px;
    }

    .close {
      position: absolute;
      top: 15px;
      right: 25px;
      font-size: 44px;
      font-weight: 100;
    }
    
    .bkmodal-header {
      color: #2389FF;	
      font-family: "Miriam Libre";
      font-size: 22px;
      font-weight: bold;
      margin-bottom: 30px;
    }
      
    .bkmodal-body {
      color: #000000;	
      font-family: "Abraham TRIAL";	
      font-size: 16px;
      line-height: 21px;
      font-weight: 300;
    }
    `
  ]
})
export class ModalComponent {
  @Input() title: string;
  @Output('close') close = new EventEmitter();

  constructor() {
  }

  _close() {
    this.close.emit(null);
  }

}
