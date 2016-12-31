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
var AppContainerComponent = (function () {
    function AppContainerComponent() {
    }
    return AppContainerComponent;
}());
AppContainerComponent = __decorate([
    core_1.Component({
        selector: 'budgetkey-container',
        encapsulation: core_1.ViewEncapsulation.None,
        styleUrls: [
            'assets/styles/bootstrap.min.css',
            'assets/styles/bootstrap-rtl.min.css',
            'assets/fonts/alefhebrew.css',
            'assets/fonts/glyphicons.css'
        ],
        styles: ["   \n       .app {\n            direction: rtl;\n            font-family: \"Alef Hebrew\", \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n            margin: 0 0 " + (constants_1.Layout.footerHeight + 'px') + "\n       }\n       \n       .inner-app {\n            width: 100%;\n        }\n    "],
        template: "\n        <div class=\"app\">\n            <budgetkey-header></budgetkey-header>\n            <div class=\"inner-app\">\n              <ng-content></ng-content>\n            </div>        \n            <budgetkey-footer></budgetkey-footer>\n        </div>\n    "
    }),
    __metadata("design:paramtypes", [])
], AppContainerComponent);
exports.AppContainerComponent = AppContainerComponent;
//# sourceMappingURL=AppContainerComponent.js.map