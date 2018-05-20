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
                              (navigate)="href = $event"
        ></budgetkey-search-bar>
      </div>
      <pre>{{searchTerm}}</pre>
      <a [href]="href">{{href}}</a>
      <div>
        זאת הדגמה פשוטה של
        <span [bkTooltip]="'הודעה שמסבירה מהו הדבר עליו עומדים'">
          טולטיפ
        </span>
        פשוט של מפתח התקציב.
      </div>
      <div>
        יש כאן עוד טקסט סתם כי בא לי.
      </div>
      <div>
        יש כאן עוד 
        <span [bkTooltip]="longTooltipContent">
        טקסט
        </span>
        סתם כי בא לי.
      </div>
      <div>
        יש כאן עוד טקסט סתם כי בא לי.
      </div>
    </budgetkey-container>
  `
})
export class AppComponent {
  public greeting = 'זוהי אפליקציה לדוגמה של ' + (process.env.BUDGETKEY_THEME == 'OpenProcurement' ? 'רכש פתוח' : 'מפתח התקציב');

  private longTooltipContent=`
  ״המפה החברתית״ הינו מיזם חדשני
   ליצירת בסיס נתונים ראשון מסוגו, המאפשר לציבור הרחב לקבל תמונה רחבה ומקיפה
   על הארגונים והעמותות הפועלים בישראל ועל מידת המעורבות והתמיכה הממשלתית בפעילותם
  <br/>
  ״המפה החברתית״ הינו מיזם חדשני
   ליצירת בסיס נתונים ראשון מסוגו, המאפשר לציבור הרחב לקבל תמונה רחבה ומקיפה
   על הארגונים והעמותות הפועלים בישראל ועל מידת המעורבות והתמיכה הממשלתית בפעילותם
  `;

  public types: SearchBarType[] = [
    {
      name: 'רכבות',
      id: 'trains',
      amount: null,
    },
    {
      name: 'מכוניות',
      id: 'cars',
      amount: 10,
    },
    {
      name: 'סוסים',
      id: 'horses',
      amount: 0,
      main: true
    },
    {
      name: 'אוטובוסים',
      id: 'buses',
      amount: 1000,
    },
    {
      name: 'נמלים',
      id: 'ports',
      defaultTerm: 'נמל אשדוד',
      amount: 1000000,
    },
    {
      name: 'מטוסים',
      id: 'plains',
      placeholder: 'איזה מטוס שבא לכם',
      amount: 100000,
    },
  ];
  private searchTerm = 'mosheee';
  private href = '#';
  private isSearching = false;

  typeSelected(tab: any) {
    tab.amount += 1;
    this.isSearching = true;
    window.setTimeout(() => {this.isSearching = false;}, 5000);
  }
}
