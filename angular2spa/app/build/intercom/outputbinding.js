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
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_dynamic_1 = require("@angular/platform-browser-dynamic");
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
// child component
var PriceQuoterComponent = (function () {
    function PriceQuoterComponent() {
    }
    return PriceQuoterComponent;
}());
PriceQuoterComponent = __decorate([
    core_1.Component({
        selector: 'price-quoter',
        template: "<h1 class=\"well text-danger\">\n                Child PriceQuoterComponent:\n               {{stockSymbol}} \n                      {{price | currency:'USD':'1.2'}}\n               </h1>\n               "
    })
], PriceQuoterComponent);
// parent component
var OutputComponent = (function () {
    function OutputComponent() {
    }
    OutputComponent.prototype.priceQuoteHandler = function (event) {
        this.stockSymbol = event.stockSymbol;
        this.price = event.lastPrice;
    };
    return OutputComponent;
}());
OutputComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        template: "\n    <div class='container'>\n        <h1 class='text-success'>\n        Parent Component received: \n        {{stockSymbol}} {{price | currency:'USD':true:'1.2'}}\n        </h1>\n\n       <price-quoter (lastPriceEvent)=\"priceQuoteHandler($event)\">\n       </price-quoter> \n        <msg-text [stockSymbol]=\"stockSymbol\" [price]=\"price\"></msg-text>   \n    </div>\n    "
    })
], OutputComponent);
var MSGComponent = (function () {
    function MSGComponent() {
    }
    return MSGComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], MSGComponent.prototype, "stockSymbol", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], MSGComponent.prototype, "price", void 0);
MSGComponent = __decorate([
    core_1.Component({
        selector: 'msg-text',
        template: "\n\t<h3 class='bg-success'>\t\t\n\t  Stock Information from parent for MSG component</h3>\n\t<h2 class=\"text-success container\">\n\t\tSent SMS about {{stockSymbol}}  {{price | currency:'USD':'1.2'}}\n\t</h2>\n\t"
    })
], MSGComponent);
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule],
        declarations: [OutputComponent, PriceQuoterComponent, MSGComponent],
        bootstrap: [OutputComponent]
    })
], AppModule);
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(AppModule);
//# sourceMappingURL=outputbinding.js.map