import { Component } from '@angular/core';
import { SearchBarType } from 'budgetkey-ng2-components';
import { AuthService } from 'budgetkey-ng2-auth';
import { ListsService, ListContents } from 'budgetkey-ng2-components';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  public greeting = 'זוהי אפליקציה לדוגמה של מפתח התקציב';

  public longTooltipContent = `
  ״המפה החברתית״ הינו מיזם חדשני
   ליצירת בסיס נתונים ראשון מסוגו, המאפשר לציבור הרחב לקבל תמונה רחבה ומקיפה
   על הארגונים והעמותות הפועלים בישראל ועל מידת המעורבות והתמיכה הממשלתית בפעילותם
  <br/>
  ״המפה החברתית״ הינו מיזם חדשני
   ליצירת בסיס נתונים ראשון מסוגו, המאפשר לציבור הרחב לקבל תמונה רחבה ומקיפה
   על הארגונים והעמותות הפועלים בישראל ועל מידת המעורבות והתמיכה הממשלתית בפעילותם
  `;

  public modal = false;

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
  public searchTerm = 'mosheee';
  public href = '#';
  public isSearching = false;
  public profile: any = {};
  public items: any = [];
  public starEnabled = false;
  public starActive = false;

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
          });
    auth.getUser()
        .subscribe((user) => {
          console.log('USER', user);
          if (user !== null && user.profile) {
            this.profile = user.profile;
          } else {
            this.profile = {};
            this.items = [];
          }
        });
  }

  typeSelected(tab: any) {
    tab.amount += 1;
    this.isSearching = true;
    window.setTimeout(() => { this.isSearching = false; }, 5000);
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
