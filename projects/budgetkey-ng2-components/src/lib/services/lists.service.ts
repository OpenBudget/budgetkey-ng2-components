/**
 * Created by adam on 18/12/2016.
 */
import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from 'budgetkey-ng2-auth';
import { BehaviorSubject } from 'rxjs';
import { map, filter, switchMap, first } from 'rxjs/operators';

export class ListItem {
  id?: number;
  list_id?: number;
  url: string;
  title: string;
  properties: any;
}

export class ListContents {
  id: number;
  items: Array<ListItem>;
}


@Injectable()
export class ListsService {

  private token = new BehaviorSubject<any>(null);

  constructor(private http: HttpClient, private auth: AuthService) {
    this.auth.permission('list-manager')
        .pipe(
          map((permission) => permission.token)
        )
        .subscribe((token) => {
          this.token.next(token);
        });
  }

  public get(list: string): Observable<ListContents> {
    return <Observable<ListContents>>(
      this.token
          .pipe(
            filter((token) => token !== null),
            switchMap((token) => {
              return this.http.get('https://next.obudget.org/list?list=' + encodeURIComponent(list) + '&jwt=' + token);
            }),
            first()
          )
    );
  }

  public put(list: string, item: ListItem): Observable<ListItem> {
    return this.token
      .pipe(
        filter((token) => token !== null),
        switchMap((token) => {
          console.log('PUTTING ITEM', item);
          return this.http.put('https://next.obudget.org/list?list=' + encodeURIComponent(list) + '&jwt=' + token, item);
        }),
        map((response) => {
          const added: any = response;
          item.id = added.item_id;
          item.list_id = added.list_id;
          return item;
        }),
        first()
      );
  }

  public delete(list: string, item_id: number): Observable<boolean> {
    const _item_id = item_id ? item_id : 'all';
    return <Observable<boolean>>(this.token
      .pipe(
        filter((token) => token !== null),
        switchMap((token) => {
          return this.http.delete('https://next.obudget.org/list?list=' + encodeURIComponent(list) +
                                  '&item_id=' + _item_id +
                                  '&jwt=' + token);
        }),
        first()
      ));
  }
}
