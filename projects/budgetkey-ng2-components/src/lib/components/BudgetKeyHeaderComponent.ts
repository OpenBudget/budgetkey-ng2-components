import {Component, Inject, Input} from '@angular/core';
import {THEME_TOKEN, LANG_TOKEN} from '../constants';

@Component({
    selector: 'budgetkey-header',
    template: `
          <header>
            <div class="logo">
              <a [href]="theme.siteUrl"  aria-label='homepage' [style.background-image]='"url(assets/img/" + theme.siteLogo + ")"'>
              </a>
            </div>
            <div *ngIf="showSearchBar" class="search-div">
              <budgetkey-search-bar (navigate)="doSearch($event)" [disableAutofocus]='true' [allowSubscribe]="true"></budgetkey-search-bar>
            </div>
            <div class="menu-links">
              <ng-container *ngFor="let link of theme.headerLinks">
                <a [href]="link.href" [innerHtml]='link.title' target='_blank'></a>
              </ng-container>
              <ng-container *ngIf='showLanguages'>
                <a (click)='switchLang("en")'>En</a>
                <a (click)='switchLang("ar")'>عر</a>
                <a (click)='switchLang("he")'>עב</a>
              </ng-container>
            </div>
            <div *ngIf="showSearchBar" class="collapsed-search" (click)='doSearch()'>
              <img class="search-icon" src="assets/img/search-glass-white.svg">
            </div>
            <div class="collapsed-menu" [ngClass]="{'with-search': showSearchBar}">
              <i class="glyphicon glyphicon-menu-hamburger"></i>
              <div class='menu'>
                <ng-container *ngFor="let link of theme.headerLinks">
                  <span class='menu-line' (click)="doNavigate(link.href)" [innerHtml]='link.title'></span>
                </ng-container>
              </div>
            </div>
            <div class="auth-widget">
              <budgetkey-ng2-auth [theme]='theme' *ngIf='showAuth'></budgetkey-ng2-auth>
            </div>
          </header>
    `,
    styles: []
})

export class BudgetKeyHeaderComponent {
    @Input() showSearchBar = false;
    @Input() showLanguages = false;
    public showAuth = false;

    constructor (@Inject(THEME_TOKEN) public theme: any,
                 @Inject(LANG_TOKEN) public lang: any) {
      this.showAuth = !theme.disableAuth;
    }

    doSearch(href?: string) {
      const themeId = this.theme.themeId || 'budgetkey';
      const _href = href || `//next.obudget.org/s/?theme=${themeId}&lang=${this.lang}`;
      window.open(_href, '_self');
    }

    switchLang(lang) {
      const param = 'lang=' + lang;
      let search = window.location.search;
      search = search.replace(RegExp('lang=[a-z]{2}'), param);
      if (search.indexOf(param) < 0) {
        if (search[0] === '?') {
          search += '&' + param;
        } else {
          search = '?' + param;
        }
      }
      window.location.search = search;
    }

    doNavigate(href: string) {
        window.open(href, '_blank');
    }
}
