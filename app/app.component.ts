import { Component } from '@angular/core';
import { SearchBarType } from '../src/components';
import { AuthService } from 'budgetkey-ng2-auth';
import { ListsService, ListContents } from '../src/services/lists.service';
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
                              [allowSubscribe]='true'
                              [externalUrlParams]='"a=b"'
                              [externalTitle]='"מחפשים את " + searchTerm'
                              (search)="searchTermChanged($event)" 
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
        <budgetkey-sub-star [active]="starActive" [enabled]="starEnabled" (clicked)="starClicked()"></budgetkey-sub-star>
      </div>
      <div>
        יש כאן עוד 
        <span [bkTooltip]="longTooltipContent">
        טקסט
        </span>
        סתם כי בא לי.
        {{ searchTerm }}
      </div>
      <div>
        יש כאן עוד טקסט סתם כי בא לי. {{profile['name']}}
      </div>
      <div>
        <ng-container *ngIf='items'>
          <div *ngFor='let item of items'>
            {{item.title}} || {{item.url}}
          </div>
        </ng-container>
      </div>
    </budgetkey-container>
  `
})
export class AppComponent {
  public greeting = 'זוהי אפליקציה לדוגמה של מפתח התקציב';

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
      types: ['trains'],
      amount: null,
    },
    {
      name: 'מכוניות',
      id: 'cars',
      types: ['cars'],
      amount: 10,
    },
    {
      name: 'סוסים',
      id: 'horses',
      amount: 0,
      types: ['horses'],
      main: true
    },
    {
      name: 'אוטובוסים',
      id: 'buses',
      types: ['buses'],
      amount: 1000,
    },
    {
      name: 'נמלים',
      id: 'ports',
      types: ['ports'],
      defaultTerm: 'נמל אשדוד',
      amount: 1000000,
    },
    {
      name: 'מטוסים',
      id: 'plains',
      types: ['plains'],
      placeholder: 'איזה מטוס שבא לכם',
      amount: 100000,
    },
  ];
  private searchTerm = 'mosheee';
  private href = '#';
  private isSearching = false;
  private profile: any = {};
  private items: any = [];
  private starEnabled = false;
  private starActive= false;

  constructor(private auth: AuthService, private lists: ListsService) {
    lists.put('searches', {'title': 'CNN', 'url': 'https://cnn.com', 
                           'properties': {
                             'term': 'intel',
                             'period': 'alltime',
                             'sbt': {'id': 'entities', 'name': 'עמותות'}
                           }
                          })
         .subscribe((result) => {
           console.log('PUT result:', result);
           lists.get('searches')
                .subscribe((lc: ListContents) => {
                  this.items = lc.items;
                });
          })
    auth.getUser()
        .subscribe((user) => {
          console.log('USER', user);
          if (user !== null && user.profile) {
            this.profile = user.profile;
          } else {
            this.profile = {};
          }
        });
  }

  typeSelected(tab: any) {
    tab.amount += 1;
    this.isSearching = true;
    window.setTimeout(() => {this.isSearching = false;}, 5000);
  }

  searchTermChanged(term: string) {
    console.log('STC', term);
    this.searchTerm = term;
    this.href = term;
  }

  starClicked() {
    if (!this.starEnabled) {
      this.starEnabled = true;
    } else if (!this.starActive) {
      this.starActive = true;
    } else {
      this.starEnabled = false;
      this.starActive = false;
    }
  }
}
