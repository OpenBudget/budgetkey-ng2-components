import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <budgetkey-container>
      <h1>{{ greeting }}</h1>
    </budgetkey-container>
  `
})
export class AppComponent {
  public greeting = 'זוהי אפליקציה לדוגמה של רכש פתוח';
}
