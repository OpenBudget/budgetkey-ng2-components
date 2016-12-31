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
var BudgetKeyFooterComponent = (function () {
    function BudgetKeyFooterComponent() {
        this.title = "מפתח התקציב, מבית";
    }
    return BudgetKeyFooterComponent;
}());
BudgetKeyFooterComponent = __decorate([
    core_1.Component({
        selector: 'budgetkey-footer',
        styles: ["\n        footer {\n            padding-top: 5px;\n            height: " + constants_1.Layout.footerHeight + "px;\n            width: 100%;\n            overflow:hidden;\n            \n            border-top: 1px solid #e5e5e5;\n            -webkit-box-shadow: inset 0 13px 15px -15px rgba(0, 0, 0, .74);\n            -moz-box-shadow: inset 0 13px 15px -15px rgba(0, 0, 0, .74);\n            box-shadow: inset 0 13px 15px -15px rgba(0, 0, 0, .74);\n        }\n\n        .inner-footer {\n            background: url(assets/img/hasadna.png) no-repeat left top / 70px;\n            padding-left: 80px;\n            margin-left: 10px;\n            position: absolute;\n            left: 0px;\n            text-align: left;\n            height: " + constants_1.Layout.footerHeight + "px;\n        }\n        \n        .inner-text {\n            margin-top: 16px;\n        }\n    "],
        template: "\n        <footer class=\"footer\">\n            <div class=\"inner-footer\">\n                <div class=\"inner-text\">\n                    <div>\u05DE\u05E4\u05EA\u05D7 \u05D4\u05EA\u05E7\u05E6\u05D9\u05D1</div>\n                    <div>\u05DE\u05D1\u05D9\u05EA <a href=\"{{hasadna_url}}\">\u05D4\u05E1\u05D3\u05E0\u05D0 \u05DC\u05D9\u05D3\u05E2 \u05E6\u05D9\u05D1\u05D5\u05E8\u05D9</a></div>                \n                </div>\n            </div>   \n        </footer>\n    "
    }),
    __metadata("design:paramtypes", [])
], BudgetKeyFooterComponent);
exports.BudgetKeyFooterComponent = BudgetKeyFooterComponent;
//# sourceMappingURL=BudgetKeyFooterComponent.js.map