import {Component, Inject, Input} from '@angular/core';
import {THEME_TOKEN} from '../constants';

@Component({
    selector: 'budgetkey-header',
    template: `
          <header class="site-nav">
            <nav class="navbar navbar-default" role="navigation">
              <div>
                <div>
                  <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                    <span class="sr-only">Toggle navigation</span>
                  </button>
                  <a class="navbar-brand"
                     [style.background-image]="'url(assets/img/' + theme.siteLogo + ')'"
                     [href]="theme.siteUrl"></a>
                </div>

                <div class="navbar" id="bs-example-navbar-collapse-1">
                  <div *ngIf="showSearchBar" class="search-div col-xs-7">
                    <budgetkey-search-bar (navigate)="doSearch($event)"></budgetkey-search-bar>
                  </div>
                  <div class="auth-widget col-xs-3">
                    <budgetkey-ng2-auth></budgetkey-ng2-auth>
                  </div>
                </div>
              </div>
            </nav>
          </header>
    `,
    styles: [`

    ::ng-deep .search-box {
      margin: 5px !important;
    }
    `]
})

export class BudgetKeyHeaderComponent {
    @Input() showSearchBar: boolean = false;

    constructor (@Inject(THEME_TOKEN) private theme: any) { }

    doSearch(href: string) {
        window.open(href, '_self');
    }
}
