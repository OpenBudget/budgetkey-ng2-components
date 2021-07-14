import {Component,
    Inject,
    Input,
    Output,
    EventEmitter,
    OnChanges,
    AfterViewInit,
    ViewChild,
    ElementRef,
    OnInit,
    HostListener} from '@angular/core';
import {THEME_TOKEN, LANG_TOKEN} from '../constants';

export class FilterOption {
    id: string;
    display: string;
    filters?: any;
}

export class FilterMenu {
    id: string;
    display: string;
    options: FilterOption[];
    selected?: FilterOption = null;
}

export interface SearchBarType {
    id: string;
    name: string;
    types: string[];
    amount: number;
    main?: boolean;
    placeholder?: string;
    defaultTerm?: string;
    filters?: any;
    filterMenu?: FilterMenu[];
    ordering?: any;
}


@Component({
    selector: 'budgetkey-search-bar',
    template: `
<div class="search-box input-group input-group-lg">
    <div #btnSearchMenu class="input-group-addon outer-right-side roundCorners-border-right-side"
         (click)="dropdownOpen = !dropdownOpen">
         <div class="inner-right-side roundCorners-border-right-side"
         [ngClass]="{'has-text-all-tab': isSearchBarHasText && selectedSearchType.main,
                     'has-text-not-all-tab': isSearchBarHasText && !selectedSearchType.main,
                     'inner-without-text-with-focus': !isSearchBarHasText && isSearchBarHasFocus,
                     'inner-without-text-without-focus': !isSearchBarHasText && !isSearchBarHasFocus}">
            <div class="right-side-symbols">
                <img [src]="glassIcon()"
                    *ngIf="!isSearching"
                    class="search-icon search-icon-margin"/>
                <i *ngIf="isSearching" class="fa fa-circle-o-notch fa-spin search-icon-margin"></i>
                <span *ngIf="isSearchBarHasText || !selectedSearchType.main"
                    class="type-text-in-search-bar-right">
                    {{selectedSearchType.name}}
                    <span *ngIf="isNumeric(selectedSearchType.amount)">
                        ({{selectedSearchType.amount.toLocaleString()}})
                    </span>
                </span>
                <span id="drop-down-caret" class="drop-down-caret">
                    <i [ngClass]="{'down-arrow-red':  !isSearchBarHasText || selectedSearchType.main,
                                    'down-arrow-white': isSearchBarHasText && !selectedSearchType.main}"> </i>
                </span>
            </div>

            <div class="dropdown-content"
                [ngClass]="{show: dropdownOpen}">
                <a *ngFor="let tab of searchTypes" href="#"
                (click)="dropdownOpen = false; switchTab($event, tab);">
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
          [placeholder]="forcedPlaceholder || selectedSearchType.placeholder || theme.searchPlaceholder"
          [autofocus]='!disableAutofocus'
          (keyup)="doSearch(searchBox.value)"
          (keyup.backspace)="doSearch(searchBox.value)"
          (keyup.enter)="doNavigate(searchBox.value)"
          [value]="searchTerm"
          (focus)="isSearchBarHasFocus = true"
          (focusout)="isSearchBarHasFocus = false"
    />

    <div class='subscribe-button' *ngIf='showSubscribe'>
        <budgetkey-subscription-manager [externalUrl]='externalUrl'
                                        [externalTitle]='externalTitle'
                                        [externalProperties]='externalProperties'
                                        [docType]='selectedSearchType'
                                        [term]="searchTerm"
                                        [newWindow]="newWindow"
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
  cursor: pointer;
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
export class BudgetKeySearchBar implements OnChanges, AfterViewInit, OnInit {

    @Input() searchTypes: SearchBarType[];
    @Input() selectedSearchType: SearchBarType;
    @Input() searchTerm: string;
    @Input() isSearching: boolean;
    @Input() disableAutofocus: boolean;
    @Input() allowSubscribe = false;
    @Input() newWindow = false;

    @Input() externalTitle: string;
    @Input() externalUrlParams: string;
    @Input() externalProperties: any;

    @Output() selected = new EventEmitter<any>();
    @Output() search = new EventEmitter<string>();
    @Output() navigate = new EventEmitter<string>();

    @ViewChild('searchBox') searchBox: ElementRef;
    @ViewChild('btnSearchMenu') btnSearchMenu: ElementRef;

    public isSearchBarHasFocus = false;
    public isSearchBarHasText = false;
    public dropdownOpen = false;
    public showSubscribe = false;
    public externalUrl: string;
    public forcedPlaceholder: string = null;

    constructor (@Inject(THEME_TOKEN) public theme: any,
                 @Inject(LANG_TOKEN) public lang: any) {
    }

    public static buildExternalUrl(searchTerm, searchType, extraUrlParams, theme, lang) {
        let urlParams =
            'q=' + encodeURIComponent(searchTerm) +
            '&dd=' + searchType.id;
        if (extraUrlParams) {
            urlParams += '&' + extraUrlParams;
        }
        const params = new URLSearchParams(urlParams);
        if (theme) {
            params.set('theme', theme.themeId || 'budgetkey');
        }
        if (lang) {
            params.set('lang', lang);
        }
        urlParams = params.toString();
        return 'https://next.obudget.org/s/?' + urlParams;
    }


    @HostListener('document:click', ['$event'])
    onClickOutOfDropdown(event: any) {
        const isClickedOnDropdown = this.btnSearchMenu.nativeElement.contains(event.target);

        if (this.dropdownOpen && !isClickedOnDropdown) {
            this.dropdownOpen = false;
        }
    }

    public isNumeric(n: number) {
        return n !== null && n >= 0;
    }

    private calcExternalUrl() {
        this.externalUrl = BudgetKeySearchBar.buildExternalUrl(
            this.searchTerm,
            this.selectedSearchType,
            this.externalUrlParams,
            this.theme,
            this.lang
        );
    }

    ngOnInit() {
        this.searchTypes = this.searchTypes || this.theme.searchBarConfig;
        this.searchTerm = this.searchTerm || '';
        this.selectedSearchType = this.selectedSearchType || this.searchTypes[0];
        this.isSearchBarHasText = this.searchTerm !== '';
        this.showSubscribe = !this.theme.disableAuth && this.allowSubscribe;
        this.calcExternalUrl();
    }

    ngAfterViewInit() {
        if (this.searchBox.nativeElement.offsetWidth < 500) {
            setTimeout(() => {
                this.forcedPlaceholder = 'בואו נחפש';
            });
        }
    }

    ngOnChanges() {
        if (this.selectedSearchType) {
            this.calcExternalUrl();
        }
    }

    doSearch(term: string) {
        this.isSearchBarHasText = term !== '';

        this.searchTerm = term;
        this.calcExternalUrl();

        this.search.emit(term);
    }

    openCloseSearchTypeDropDown() {
        this.dropdownOpen = !this.dropdownOpen;
    }

    switchTab($event: any, selectedSearchType: any) {
        $event.stopPropagation();
        $event.preventDefault();

        this.selectedSearchType = selectedSearchType;
        this.calcExternalUrl();

        this.selected.emit(selectedSearchType);
    }

    doNavigate(term: string) {
        this.searchTerm = term;
        this.calcExternalUrl();

        this.navigate.emit(this.externalUrl);
    }

    glassIcon() {
        return (!this.selectedSearchType.main && this.isSearchBarHasText)
                    ? 'assets/img/search-glass-white.svg' :
                      'assets/img/search-glass-red.svg';
    }
}
