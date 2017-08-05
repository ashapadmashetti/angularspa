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
var SMSComponent = (function () {
    function SMSComponent() {
    }
    Object.defineProperty(SMSComponent.prototype, "stockSymbol", {
        get: function () {
            return this._stockSymbol;
        },
        set: function (value) {
            this._stockSymbol = value;
        },
        enumerable: true,
        configurable: true
    });
    return SMSComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", String),
    __metadata("design:paramtypes", [String])
], SMSComponent.prototype, "stockSymbol", null);
SMSComponent = __decorate([
    core_1.Component({
        selector: 'sms-text',
        template: "\n\t<h3 class='bg-success'>\t\t\n\t  Stock Information from child SMS component</h3>\n\t<h2 class=\"text-success container\">\n\t\tSent SMS about {{stockSymbol}} \n\t</h2>\n\t"
    })
], SMSComponent);
exports.SMSComponent = SMSComponent;
//# sourceMappingURL=smscomponent.js.map