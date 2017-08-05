"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_dynamic_1 = require("@angular/platform-browser-dynamic");
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var ordercomponent_1 = require("./ordercomponent");
var smscomponent_1 = require("./smscomponent");
var timercomponent_1 = require("./timercomponent");
var StockComponent = (function () {
    function StockComponent() {
    }
    StockComponent.prototype.onInputEvent = function (_a) {
        var target = _a.target;
        this.stock = target.value;
    };
    return StockComponent;
}());
StockComponent = __decorate([
    core_1.Component({
        selector: "my-app",
        template: "\n    <h1 class='bg-info'> Stock Exchange </h1>\n    <input type=\"text\" placeholder=\"Enter stock(e.g: Verizon) \"\n    (change)=\"onInputEvent($event)\">\n    <br/>\n    <order-processor [stockSymbol]=\"stock\" quantity=\"100\">\n    </order-processor>\n    <timer-comp></timer-comp>\n        "
    })
], StockComponent);
var InterCompModule = (function () {
    function InterCompModule() {
    }
    return InterCompModule;
}());
InterCompModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule],
        declarations: [StockComponent, ordercomponent_1.OrderComponent, smscomponent_1.SMSComponent, timercomponent_1.TimerComponent],
        bootstrap: [StockComponent]
    })
], InterCompModule);
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(InterCompModule);
//# sourceMappingURL=inputbinding.js.map