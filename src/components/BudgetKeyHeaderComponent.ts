import {Component, Inject, Input} from '@angular/core';
import {THEME_TOKEN} from '../constants';

@Component({
    selector: 'budgetkey-header',
    template: `
          <header>
            <div class="logo">
              <a [href]="theme.siteUrl">
                <img [src]="'assets/img/' + theme.siteLogo"/>
              </a>
            </div>
            <div *ngIf="showSearchBar" class="search-div">
              <budgetkey-search-bar (navigate)="doSearch($event)"></budgetkey-search-bar>
            </div>
            <div class="menu-links">
              <ng-container *ngFor="let link of theme.headerLinks">
                <a [href]="link.href" [innerHtml]='link.title'></a>
              </ng-container>
            </div>
            <div class="collapsed-menu">
              <i class="glyphicon glyphicon-menu-hamburger"></i>
              <div class='menu'>
                <ng-container *ngFor="let link of theme.headerLinks">
                  <span class='menu-line' (click)="navigate(link.href)" [innerHtml]='link.title'></span>
                </ng-container>
              </div>
            </div>
            <div class="auth-widget">
              <budgetkey-ng2-auth [theme]='theme'></budgetkey-ng2-auth>
            </div>
          </header>
    `,
    styles: []
})

export class BudgetKeyHeaderComponent {
    @Input() showSearchBar: boolean = false;

    constructor (@Inject(THEME_TOKEN) private theme: any) { }

    doSearch(href: string) {
        window.open(href, '_self');
    }

    navigate(href: string) {
        window.open(href, '_blank');
    }
}
