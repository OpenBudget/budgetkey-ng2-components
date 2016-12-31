"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var constants_1 = require("./constants");
var BudgetKeyHeaderComponent = (function () {
    function BudgetKeyHeaderComponent() {
        this.title = "מפתח התקציב";
    }
    return BudgetKeyHeaderComponent;
}());
BudgetKeyHeaderComponent = __decorate([
    core_1.Component({
        selector: 'budgetkey-header',
        styles: [
            "       \n        .site-nav {\n          width: 100%;\n          right: 0;\n          top: 0;\n          z-index: 1000000;\n        }\n\n        .navbar {\n          margin-bottom: 0;\n        }\n      \n        .navbar-brand {\n          color: " + constants_1.Colors.text + ";\n          background: url(assets/img/obudget_key.png) no-repeat;\n          background-size: 23px 52px;\n          overflow: hidden;\n          height: 53px;\n          width: 141px;\n        }\n      \n        .navbar-nav > li > a {\n          color: #555;\n        }\n      \n        .navbar-left {\n          height: 54px;\n          overflow: hidden;\n          margin-left: -10px;\n        }\n      \n        a.btn {\n          margin: 8px 10px;\n          padding: 6px 10px;\n          //color: #fff;\n          border-radius: 20px;\n        }\n      \n        h3 {\n          margin-top: 0;\n          margin-bottom: 0;\n          line-height: 40px;\n          padding-bottom: 19px;\n        }\n    "
        ],
        template: "\n          <header class=\"site-nav\">\n            <nav class=\"navbar navbar-default\" role=\"navigation\">\n              <div class=\"container-fluid\">\n                <div class=\"navbar-header\">\n                  <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1\">\n                    <span class=\"sr-only\">Toggle navigation</span>\n                  </button>\n                  <a class=\"navbar-brand\" href=\"/\">\u05DE\u05E4\u05EA\u05D7 \u05D4\u05EA\u05E7\u05E6\u05D9\u05D1</a>\n                </div>\n\n                <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">\n                  <ul class=\"nav navbar-nav\">\n                    <!--<li><a id=\"spending-link\" href=\"\">\u05D4\u05EA\u05E7\u05E9\u05E8\u05D5\u05D9\u05D5\u05EA \u05D7\u05D3\u05E9\u05D5\u05EA</a></li>-->\n                    <!--<li><a href=\"http://blog.obudget.org\">\u05D4\u05D1\u05DC\u05D5\u05D2 \u05E9\u05DC\u05E0\u05D5</a></li>-->\n                    <!--<li><a href=\"/email/\">\u05D3\u05D5\u05F4\u05D7 \u05D4\u05E2\u05D1\u05E8\u05D5\u05EA \u05EA\u05E7\u05E6\u05D9\u05D1\u05D9\u05D5\u05EA</a></li>-->\n                    <!--<li><a href=\"http://spendex.obudget.org/\">\u05D3\u05D5\u05F4\u05D7 \u05D0\u05D9\u05DB\u05D5\u05EA \u05E0\u05EA\u05D5\u05E0\u05D9 \u05D4\u05EA\u05E7\u05E9\u05E8\u05D5\u05D9\u05D5\u05EA</a></li>-->\n                    <!--<li><a href=\"#tour\" id=\"intro-link\">\u05D4\u05D3\u05E8\u05DB\u05D4</a></li>-->\n                    <!--<li><a href=\"#glossaryModal\" data-toggle=\"modal\" >\u05DE\u05D5\u05E0\u05D7\u05D5\u05DF \u05D4\u05EA\u05E7\u05E6\u05D9\u05D1</a></li>-->\n                    <!--<li><a href=\"http://www.hasadna.org.il/%D7%94%D7%AA%D7%A0%D7%93%D7%91%D7%95%D7%AA/\" target=\"_blank\">\u05D4\u05E6\u05D8\u05E8\u05E4\u05D5 \u05D0\u05DC\u05D9\u05E0\u05D5</a></li>-->\n                  </ul>\n                  <ul class=\"nav navbar-nav navbar-left\">\n                    <!--<li class=\"social-button-container\">-->\n                      <!--<div class=\"fb-share-button\" data-layout=\"button_count\"></div>-->\n        \t\t\t\t  \t<!--</li>-->\n                    <!--<li class=\"social-button-container twitter\">-->\n          \t\t\t\t\t\t<!--<a href=\"//twitter.com/share\" class=\"twitter-share-button\" data-count=\"none\" data-hashtags=\"\u05E4\u05D5\u05EA\u05D7\u05D9\u05DD_\u05EA\u05EA\u05E7\u05E6\u05D9\u05D1\">Tweet</a>-->\n          \t\t\t\t\t<!--</li>-->\n                    <!--<li><a href=\"#\" id=\"subscribeWidget\" role=\"button\" class=\"btn btn-default\"></a></li>-->\n                  </ul>\n                </div>\n              </div>\n            </nav>\n          </header>\n    "
    }),
    __metadata("design:paramtypes", [])
], BudgetKeyHeaderComponent);
exports.BudgetKeyHeaderComponent = BudgetKeyHeaderComponent;
//# sourceMappingURL=BudgetKeyHeaderComponent.js.map