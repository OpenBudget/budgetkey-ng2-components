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
                  <ul class="auth-ul col-xs-3">
                    <li><h5><budgetkey-ng2-auth></budgetkey-ng2-auth></h5></li>
                  </ul>
                </div>
              </div>
            </nav>
          </header>
    `,
    styles: [`

    ::ng-deep .search-box {
      margin: 5px !important;
    }
    
    a.navbar-brand {
        width: 80px;
        padding: 0px;
        margin-right: 2%;
    }
    div.search-div{
      margin-right: 5%; 
      margin-top: 2px; 
      padding: 0px;
    }
    ul.auth-ul{
        list-style-type: none;
        width: 5%;
        float: left;
        padding: 0px;
    }
    
    @media only screen and (min-width: 992px){ 
        div.search-div{
          width: 65%; 
          margin-right: 10%;
        }
        ul.auth-ul{
            margin-left: 1%;
        }
    }    
    
    @media only screen and (min-width: 768px) and (max-width: 992px) { 
        div.search-div{
          width: 65%; 
          margin-right: 8%;
        }
        ul.auth-ul{
            margin-left: 3%;
        }
    }    
        
    @media only screen and (min-width: 600px) and (max-width: 768px){ 
        div.search-div{
          width: 65%; 
        }
        ul.auth-ul{
            margin-left: 3%;
        }
    }
    
    @media only screen and (max-width: 600px) { 
        div.search-div{
          width: 60%; 
        }
        ul.auth-ul{
            margin-left: 5%;
        }
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
