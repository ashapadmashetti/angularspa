"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var ChildComponent = (function () {
    function ChildComponent() {
        this.showText = false;
        this.visibilitySource = '';
    }
    ChildComponent.prototype.toggleVisibility = function (source) {
        this.showText = !this.showText;
        this.visibilitySource = source;
        console.log(source);
    };
    return ChildComponent;
}());
ChildComponent = __decorate([
    core_1.Component({
        selector: 'child-component',
        template: "\n    <div>\n        <h2>Child Component</h2>\n        <div class=\"text\">\n            <span [hidden]=\"!showText\">\n            I am visible now! Thanks to {{visibilitySource}}</span>\n        </div>\n        <div>\n            <button (click)=\"toggleVisibility('Child Component')\">Show/Hide Text</button>\n        </div>\n    </div>\n    ",
        styles: ['.text { margin-bottom: 10px; color:red}']
    })
], ChildComponent);
exports.ChildComponent = ChildComponent;
//# sourceMappingURL=child.component.js.map