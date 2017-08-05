"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
//Component Directive
var NestedComponent = (function () {
    function NestedComponent() {
        this.flag = false;
    }
    return NestedComponent;
}());
NestedComponent = __decorate([
    core_1.Component({
        selector: 'latest-news',
        template: "\n    <h3 class='well'>Template Binding (Nested Component)</h3>\n    <br/>\n    <button (click)=\"flag = !flag\" class='btn btn-primary'>\n       Latest Angular news\n    </button>\n\n    <h2>    \n      <span *ngIf=\"flag\">\n          <div style='background-color:orange'>\n          Angular 4.0 is out now!</div>\n      </span>\n    </h2>   \n  "
    })
], NestedComponent);
exports.NestedComponent = NestedComponent;
//# sourceMappingURL=nested.component.js.map