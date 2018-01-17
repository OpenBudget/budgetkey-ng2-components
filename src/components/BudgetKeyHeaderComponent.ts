import {Component, Inject, Input} from '@angular/core';
import {THEME_TOKEN} from '../constants';

@Component({
    selector: 'budgetkey-header',
    template: `
          <header class="site-nav">
            <nav class="navbar navbar-default" role="navigation">
              <div class="container-fluid">
                <div class="navbar-header">
                  <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                    <span class="sr-only">Toggle navigation</span>
                  </button>
                  <a class="navbar-brand" href="/">{{theme.siteName}}</a>
                </div>

                <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                  <form *ngIf="showSearchBar" ngNoForm class="col-xs-7">
                    <input type="text" [placeholder]="theme.searchPlaceholder"
                      [(ngModel)]="searchTerm" [ngModelOptions]="{standalone: true}"> 
                    <button (click)="doSearch()"></button>
                  </form>
                  <ul class="nav navbar-nav navbar-left">
                    <!--<li class="social-button-container">-->
                      <!--<div class="fb-share-button" data-layout="button_count"></div>-->
        				  	<!--</li>-->
                    <!--<li class="social-button-container twitter">-->
          						<!--<a href="//twitter.com/share" class="twitter-share-button" data-count="none" data-hashtags="פותחים_תתקציב">Tweet</a>-->
          					<!--</li>-->
                    <!--<li><a href="#" id="subscribeWidget" role="button" class="btn btn-default"></a></li>-->
                    <li><h5><budgetkey-ng2-auth></budgetkey-ng2-auth></h5></li>
                  </ul>
                </div>
              </div>
            </nav>
          </header>
    `
})

export class BudgetKeyHeaderComponent {
    @Input() showSearchBar: boolean = false;

    constructor (@Inject(THEME_TOKEN) private theme: any) { }

    searchTerm_: string = '';

    doSearch() {
        let href = 'https://next.obudget.org/s/?q=' + encodeURIComponent(this.searchTerm_);
        window.open(href, '_self');
    }

    set searchTerm(v: string) {
        this.searchTerm_ = v;
        if (this.searchTerm_ && this.searchTerm_.length >= 3) {
            this.doSearch();
        }
    }

    get searchTerm() {
        return this.searchTerm_;
    }
}
