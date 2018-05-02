import { Component } from '@angular/core';
import { SearchBarType } from '../src/components';
declare const process: any;

@Component({
  selector: 'my-app',
  template: `
    <budgetkey-container [showSearchBar]="true">
      <h1>{{ greeting }}</h1>

      <div style="background-color:#888; padding:30px;">
        <budgetkey-search-bar [searchTypes]="types" 
                              [searchTerm]="searchTerm"
                              [isSearching]="isSearching"
                              (search)="searchTerm = $event" 
                              (selected)="typeSelected($event)"
        ></budgetkey-search-bar>
      </div>
      <pre>{{searchTerm}}</pre>
    </budgetkey-container>
  `
})
export class AppComponent {
  public greeting = 'זוהי אפליקציה לדוגמה של ' + (process.env.BUDGETKEY_THEME == 'OpenProcurement' ? 'רכש פתוח' : 'מפתח התקציב');

  public types: SearchBarType[] = [
    {
      name: 'רכבות',
      amount: null,
    },
    {
      name: 'מכוניות',
      amount: 10,
    },
    {
      name: 'סוסים',
      amount: 0,
      main: true
    },
    {
      name: 'אוטובוסים',
      amount: 1000,
    },
    {
      name: 'נמלים',
      amount: 1000000,
    },
    {
      name: 'מטוסים',
      amount: 100000,
    },
  ];
  private searchTerm = 'mosheee';
  private isSearching = false;

  typeSelected(tab: any) {
    tab.amount += 1;
    this.isSearching = true;
    window.setTimeout(() => {this.isSearching = false;}, 5000);
  }
}
