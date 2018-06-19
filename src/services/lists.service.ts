/**
 * Created by adam on 18/12/2016.
 */
import { Injectable, Inject } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { AuthService } from 'budgetkey-ng2-auth';
import { BehaviorSubject } from 'rxjs';

export class ListItem {
  id?: number;
  list_id?: number;
  url: string;
  title: string;
}

export class ListContents {
  id: number;
  items: Array<ListItem>;
}


@Injectable()
export class ListsService {

  private token = new BehaviorSubject<any>(null);

  constructor(private http: Http, private auth: AuthService) {
    this.auth.permission('list-manager')
        .map((permission) => permission.token)
        .subscribe((token) => {
          this.token.next(token);
        });
  }

  public get(list: string): Observable<ListContents> {
    return this.token
               .filter((token) => token !== null)
               .switchMap((token) => {
                 return this.http.get('https://next.obudget.org/list?list=' + encodeURIComponent(list) + '&jwt=' +token);
               })
               .map((response) => response.json())
               .first();
  }

  public put(list: string, item: ListItem): Observable<ListContents> {
    return this.token
               .filter((token) => token !== null)
               .switchMap((token) => {
                 return this.http.put('https://next.obudget.org/list?list=' + encodeURIComponent(list) + '&jwt=' +token, item);
               })
               .map((response) => response.json())
               .first();
  }

  public delete(list: string, item_id: number): Observable<ListContents> {
    return this.token
               .filter((token) => token !== null)
               .switchMap((token) => {
                 return this.http.delete('https://next.obudget.org/list?list=' + encodeURIComponent(list) +
                                         '&item_id=' + item_id +
                                         '&jwt=' + token);
               })
               .map((response) => response.json())
               .first();
  }
}
