import {Component, Inject, Input, Output, EventEmitter, OnChanges} from '@angular/core';
import {THEME_TOKEN} from '../constants';

export type SearchBarType = {
        id: string,
        name: string, 
        types: string[],
        amount: number,
        main?: boolean,
        placeholder?: string,
        defaultTerm?: string,
        filters?: any
};


@Component({
    selector: 'budgetkey-search-bar',
    template: `
<div class="search-box input-group input-group-lg">
    <div class="input-group-addon outer-right-side roundCorners-border-right-side" 
         (click)="dropdownOpen = !dropdownOpen">  
         <div class="inner-right-side roundCorners-border-right-side"
         [ngClass]="{'has-text-all-tab': isSearchBarHasText && selectedTab.main, 
                     'has-text-not-all-tab': isSearchBarHasText && !selectedTab.main,     
                     'inner-without-text-with-focus': !isSearchBarHasText && isSearchBarHasFocus,
                     'inner-without-text-without-focus': !isSearchBarHasText && !isSearchBarHasFocus}">
            <div class="right-side-symbols">
                <img [src]="(!selectedTab.main && isSearchBarHasText) ? 'assets/img/search-glass-white.svg' : 'assets/img/search-glass-red.svg'" 
                    *ngIf="!isSearching" 
                    class="search-icon search-icon-margin"/>  
                <i *ngIf="isSearching" class="fa fa-circle-o-notch fa-spin search-icon-margin"></i>
                <span *ngIf="isSearchBarHasText || !selectedTab.main" 
                    class="type-text-in-search-bar-right">
                    {{selectedTab.name}}
                    <span *ngIf="isNumeric(selectedTab.amount)">
                        ({{selectedTab.amount.toLocaleString()}})
                    </span>
                </span>
                <span id="drop-down-caret" class="drop-down-caret">  
                    <i [ngClass]="{'down-arrow-red':  !isSearchBarHasText || selectedTab.main,
                                    'down-arrow-white': isSearchBarHasText && !selectedTab.main}"> </i>
                </span> 
            </div>

            <div class="dropdown-content"
                [ngClass]="{show: dropdownOpen}">
                <a *ngFor="let tab of tabs; let i = index" href="#" 
                (click)="dropdownOpen = false; switchTab($event, tab, i);">
                {{tab.name}}
                    <span *ngIf="isNumeric(tab.amount)">
                        ({{ tab.amount.toLocaleString() }})
                    </span>
                </a> 
            </div>
        </div>
    </div>
    
    <input #searchBox 
          class="form-control roundCorners-border-left-side left-side-search"
          type="text"
          [placeholder]="selectedTab.placeholder || theme.searchPlaceholder"
          autofocus
          (keyup)="search(searchBox.value)"
          (keyup.backspace)="search(searchBox.value)"
          (keyup.enter)="navigate(searchBox.value)"
          [value]="searchTerm"
          (focus)="isSearchBarHasFocus = true"
          (focusout)="isSearchBarHasFocus = false"
    />

    <div class='subscribe-button' *ngIf='allowSubscribe'>
        <budgetkey-subscription-manager [externalUrl]='externalUrl' 
                                        [externalTitle]='externalTitle'
                                        [externalProperties]='externalProperties'
        ></budgetkey-subscription-manager>
    </div>

</div>
`,
styles: [`
.search-box {
    margin: 20px;
    position: relative;
}

.search-loader {
  width: 18px;
  height: 18px;
}

.search-icon {
  cursor: pointer;
}

a.activeclass {
    color: #FF5A5F !important;
}

.down-arrow-red {
  border: solid #FF5A5F;
  border-width: 0 2px 2px 0;
  display: inline-block;
  padding: 3px;
  transform: rotate(45deg);
  -webkit-transform: rotate(45deg);
  margin-bottom: 2px;
}

.down-arrow-white {
  border: solid #f1f1f1;
  border-width: 0 2px 2px 0;
  display: inline-block;
  padding: 3px;
  transform: rotate(45deg);
  -webkit-transform: rotate(45deg); 
  margin-bottom: 3px;
}

.down-arrow-black {
  border: solid #000000;
  border-width: 0 3px 3px 0;
  display: inline-block;
  padding: 3px;
  transform: rotate(45deg);
  -webkit-transform: rotate(45deg); 
}

.type-text-in-search-bar-right{
    text-align: right;
    font-family: "Abraham TRIAL";
    font-size: 14px;
    line-height: 19px;
    width: 77px;
    height: 36px;
    margin-right: 6px;
    margin-left: 6px;
}

.search-icon-margin{
    margin-right: 5px;
    margin-left: 2px;
}

.drop-down-caret{
  margin-right: 6px; 
  margin-left: 11px;
}

.outer-right-side{
    background-color: #ffffff;
    height: 44px;
    padding: 4px 4px;
    box-shadow: 0 2px 5px 0 rgba(0,0,0,0.05);
}

.red-opaque-background{
    background-color: rgba(100, 35, 37, 0.1);
}

.without-text-right-search-bar-side{
    background-color: white;
    color: #FF5A5F;
}

.inner-right-side{
    background-color: rgba(100, 35, 37, 0.1);
    height: 100%;
    padding: 5px 5px;
}

.inner-without-text-with-focus{
    background-color: #FFEEEF;
    color: #FF5A5F;
}

.inner-without-text-without-focus{
    background-color: white;
    color: #FF5A5F;
}

.middle{
    vertical-align: middle;
}

.right-border-none{
    border-right: none;
}

/* dropdown styles */
.dropbtn {
    background-color: #4CAF50;
    color: white;
    padding: 16px;
    font-size: 16px;
    border: none;
    cursor: pointer;
}

.dropbtn:hover, .dropbtn:focus {
    background-color: #3e8e41;
}

.dropdown {
    position: relative;
    display: inline-block;
}

.dropdown-content {
    z-index: 100;
    margin-top:13px;
    display: none;
    position: absolute;
    background-color: #f9f9f9;
    min-width: 160px;
    overflow: auto;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
}

.search-icon{
    width: 17px;
}

.dropdown-content a {
    color: black;
    padding: 12px 16px;
    text-decoration: none;
    display: block;
}

.dropdown-content a:hover {background-color: #f1f1f1}

.show {display:block;}

/*  search bar styles  */

.empty-text-empty-focus{
    color: #FF5A5F;
}

.empty-text-has-focus{
    color: #FF5A5F;
}

.has-text-all-tab{
    color:#FF5A5F;
    background-color: #FFEEEF;
}

.has-text-not-all-tab{
    color: #f1f1f1;
    background-color: #FF5A5F;
}

.left-side-search{
    height: 44px !important;
    background-color: #ffffff;
    border: none !important;

    color: #7D7D7D !important;	
    font-family: "Abraham TRIAL" !important;	
    font-size: 16px !important;	
    line-height: 25px !important;	
    text-align: right !important;
}

.right-side-search{
    height: 44px !important;
    background-color: #ffffff;
}

.roundCorners-border-right-side{
    /* border: 0px solid #F2F2F2; */
    border-top-right-radius: 25px !important;
    border-bottom-right-radius: 25px !important;
}

.roundCorners-border-left-side{
    border-top-left-radius: 25px !important;
    border-bottom-left-radius: 25px !important;
    box-shadow: none !important;
}

.outer-right-side{
    border: none;
    background-color: #ffffff;
    height: 44px;
    padding: 4px 4px;
}

.searchbox{
    border-radius: 25px; 
    box-shadow: 0 2px 5px 0 rgba(0,0,0,0.05);
}

input::placeholder {
    color: #B9BCC3;	
    font-family: "Abraham TRIAL";	
    font-size: 16px;	
    line-height: 25px;	
    text-align: right;
}

input:focus::placeholder {
    color: #B9BCC3;	
    font-family: "Abraham TRIAL";	
    font-size: 16px;	
    line-height: 25px;	
    text-align: right;
    opacity: 0.25;
}

input {
    height: 25px;	
    width: 51px;	
}

.right-side-symbols i {
    vertical-align: middle;
}

.subscribe-button {
    position: absolute;
    z-index: 3;
    left: 11px;
    top: 11px;
}
`]
})
export class BudgetKeySearchBar implements OnChanges {

    @Input('searchTypes') tabs: SearchBarType[];
    @Input('selectedSearchType') selectedTab: SearchBarType;
    @Input('searchTerm') searchTerm: string;
    @Input('isSearching') isSearching: boolean;
    @Input('instantSearch') instant: boolean;
    @Input('allowSubscribe') allowSubscribe: boolean = false;
    
    @Input('externalTitle') externalTitle: string;
    @Input('externalUrlParams') externalUrlParams: string;
    @Input('externalProperties') externalProperties: any;

    @Output('selected') onSelect = new EventEmitter<any>();
    @Output('search') onSearch = new EventEmitter<string>();
    @Output('navigate') onNavigate = new EventEmitter<string>();
    
    private isSearchBarHasFocus = false;
    private isSearchBarHasText = false;
    private dropdownOpen = false;
    private externalUrl: string;
    
    constructor (@Inject(THEME_TOKEN) private theme: any) { }

    private isNumeric(n: number) {
        return n !== null && n >= 0;
    }

    private calcExternalUrl() {
        let url = 
            'https://next.obudget.org/s/?q=' +
            encodeURIComponent(this.searchTerm) + 
            '&dd=' + this.selectedTab.id;
        if (this.externalUrlParams) {
            url += '&' + this.externalUrlParams;
        }
        if (this.theme.themeId) {
            url += '&theme=' + this.theme.themeId;
        }
        this.externalUrl = url;
    }

    ngOnInit() {
        this.tabs = this.tabs || this.theme.searchBarConfig;
        this.searchTerm = this.searchTerm || '';
        this.selectedTab = this.selectedTab || this.tabs[0];
        this.isSearchBarHasText = this.searchTerm !== '';
        this.instant = this.instant === true;
        this.calcExternalUrl();
    }

    ngOnChanges() {
        if (this.selectedTab) {
            this.calcExternalUrl();
        }
    }

    search(term: string) {
        this.isSearchBarHasText = term !== '';
        
        this.searchTerm = term;
        this.calcExternalUrl();

        this.onSearch.emit(term);
    }

    openCloseSearchTypeDropDown() {
        this.dropdownOpen = !this.dropdownOpen
    }
 
    switchTab($event: any, selectedTab: any) {
        $event.stopPropagation();
        $event.preventDefault();

        this.selectedTab = selectedTab;
        this.calcExternalUrl();

        this.onSelect.emit(selectedTab);
    }

    navigate(term: string) {
        this.searchTerm = term;
        this.calcExternalUrl();

        this.onNavigate.emit(this.externalUrl);
    }
}
