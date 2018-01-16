import { Component } from '@angular/core';
declare const process: any;

@Component({
  selector: 'my-app',
  template: `
    <budgetkey-container [showSearchBar]="true">
      <h1>{{ greeting }}</h1>
    </budgetkey-container>
  `
})
export class AppComponent {
  public greeting = 'זוהי אפליקציה לדוגמה של ' + (process.env.BUDGETKEY_THEME == 'OpenProcurement' ? 'רכש פתוח' : 'מפתח התקציב');
}
