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
var AppContainerComponent_1 = require("./AppContainerComponent");
var BudgetKeyHeaderComponent_1 = require("./BudgetKeyHeaderComponent");
var BudgetKeyFooterComponent_1 = require("./BudgetKeyFooterComponent");
/**
 * Created by adam on 27/12/2016.
 */
var BudgetKeyCommonModule = (function () {
    function BudgetKeyCommonModule() {
    }
    return BudgetKeyCommonModule;
}());
BudgetKeyCommonModule = __decorate([
    core_1.NgModule({
        declarations: [
            AppContainerComponent_1.AppContainerComponent,
            BudgetKeyHeaderComponent_1.BudgetKeyHeaderComponent,
            BudgetKeyFooterComponent_1.BudgetKeyFooterComponent,
        ],
        exports: [
            AppContainerComponent_1.AppContainerComponent,
            BudgetKeyHeaderComponent_1.BudgetKeyHeaderComponent,
            BudgetKeyFooterComponent_1.BudgetKeyFooterComponent,
        ]
    }),
    __metadata("design:paramtypes", [])
], BudgetKeyCommonModule);
exports.BudgetKeyCommonModule = BudgetKeyCommonModule;
//# sourceMappingURL=BudgetKeyCommonModule.js.map