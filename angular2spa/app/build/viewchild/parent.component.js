"use strict";
/*

The scheme of interactions discussed above is based on the
Mediator Design Pattern.

ParentComponent is acting as a central authority
which is responsible for communication between childcomponents.

*/
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
var platform_browser_1 = require("@angular/platform-browser");
var core_1 = require("@angular/core");
var child_component_1 = require("./child.component");
var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent.prototype.showHideText = function () {
        this.childComponent.toggleVisibility('Parent Component');
    };
    return AppComponent;
}());
__decorate([
    core_1.ViewChild(child_component_1.ChildComponent),
    __metadata("design:type", child_component_1.ChildComponent)
], AppComponent.prototype, "childComponent", void 0);
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        template: "\n    <div>\n        <h1>Parent Component</h1>\n        <button (click)=\"showHideText()\">\n            Show/Hide Child Component Text</button>\n\n        <div class=\"container\" style=\"background-color:yellow\">    \n            <child-component></child-component>\n        </div>\n    </div>\n    "
    })
], AppComponent);
exports.AppComponent = AppComponent;
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule],
        declarations: [AppComponent, child_component_1.ChildComponent],
        bootstrap: [AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(AppModule);
//# sourceMappingURL=parent.component.js.map