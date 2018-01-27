import { Component } from '@angular/core';
declare const process: any;

@Component({
  selector: 'my-app',
  template: `
    <budgetkey-container [showSearchBar]="true">
      <h1>{{ greeting }}</h1>
      <budgetkey-search-link 
        [linktitle]="'קישור לחיפוש ביצים'"
        [blank]="false"
        [term]="'ביצים'"
        [doctype]="'entities'"
        [onClick]="sleeper"
      ></budgetkey-search-link>
    </budgetkey-container>
  `
})
export class AppComponent {
  public greeting = 'זוהי אפליקציה לדוגמה של ' + (process.env.BUDGETKEY_THEME == 'OpenProcurement' ? 'רכש פתוח' : 'מפתח התקציב');


  sleeper() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve();
      }, 3000);
    })

  }
}
