import {Component, Inject} from '@angular/core';
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
                  <ul class="nav navbar-nav">
                    <!--<li><a id="spending-link" href="">התקשרויות חדשות</a></li>-->
                    <!--<li><a href="http://blog.obudget.org">הבלוג שלנו</a></li>-->
                    <!--<li><a href="/email/">דו״ח העברות תקציביות</a></li>-->
                    <!--<li><a href="http://spendex.obudget.org/">דו״ח איכות נתוני התקשרויות</a></li>-->
                    <!--<li><a href="#tour" id="intro-link">הדרכה</a></li>-->
                    <!--<li><a href="#glossaryModal" data-toggle="modal" >מונחון התקציב</a></li>-->
                    <!--<li><a href="http://www.hasadna.org.il/%D7%94%D7%AA%D7%A0%D7%93%D7%91%D7%95%D7%AA/" target="_blank">הצטרפו אלינו</a></li>-->
                  </ul>
                  <ul class="nav navbar-nav navbar-left">
                    <!--<li class="social-button-container">-->
                      <!--<div class="fb-share-button" data-layout="button_count"></div>-->
        				  	<!--</li>-->
                    <!--<li class="social-button-container twitter">-->
          						<!--<a href="//twitter.com/share" class="twitter-share-button" data-count="none" data-hashtags="פותחים_תתקציב">Tweet</a>-->
          					<!--</li>-->
                    <!--<li><a href="#" id="subscribeWidget" role="button" class="btn btn-default"></a></li>-->
                  </ul>
                </div>
              </div>
            </nav>
          </header>
    `
})

export class BudgetKeyHeaderComponent {
    constructor (@Inject(THEME_TOKEN) private theme: any) { }
}
