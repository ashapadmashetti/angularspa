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
var core_1 = require("@angular/core");
//OrderComponent
var OrderComponent = (function () {
    function OrderComponent() {
    }
    Object.defineProperty(OrderComponent.prototype, "stockSymbol", {
        get: function () {
            return this._stockSymbol;
        },
        set: function (value) {
            this._stockSymbol = value;
            if (this._stockSymbol != undefined) {
                console.log("Sending a Buy order to NASDAQ: \n              " + this._stockSymbol + " " + this.quantity + "\n          ");
            }
        },
        enumerable: true,
        configurable: true
    });
    return OrderComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], OrderComponent.prototype, "quantity", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String),
    __metadata("design:paramtypes", [String])
], OrderComponent.prototype, "stockSymbol", null);
OrderComponent = __decorate([
    core_1.Component({
        selector: 'order-processor',
        template: "\n    <h2 class='bg-primary' >Stock Information</h2>\n    <h2 class=\"text-danger container\">\n        Buying {{quantity}} shares of {{stockSymbol}}\n    </h2>\n    <sms-text [stockSymbol]=\"stockSymbol\"></sms-text>\n  "
    })
], OrderComponent);
exports.OrderComponent = OrderComponent;
//# sourceMappingURL=ordercomponent.js.map