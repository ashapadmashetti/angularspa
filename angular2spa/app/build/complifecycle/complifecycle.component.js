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
var forms_1 = require("@angular/forms");
//parent component
var CompLifeCycleComponent = (function () {
    function CompLifeCycleComponent() {
        this.search = 'Computers';
    }
    return CompLifeCycleComponent;
}());
CompLifeCycleComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        template: "<h1 class=\"container\">Google Search: \n        <input type=\"text\" [(ngModel)]=\"search\">\n    </h1>\n    <child [search]=\"search\"></child>\n    "
    })
    //parent component
], CompLifeCycleComponent);
//child component 
var ChildComponent = (function () {
    function ChildComponent() {
        console.log("constructor: " + this.search);
    }
    ChildComponent.prototype.ngOnInit = function () {
        console.log("ngOnInit: " + this.search);
    };
    ChildComponent.prototype.ngOnChanges = function () {
        console.log("ngOnChanges: " + this.search);
    };
    return ChildComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], ChildComponent.prototype, "search", void 0);
ChildComponent = __decorate([
    core_1.Component({
        selector: 'child',
        template: "<h1 class=\"text-danger container\">Search Text : </h1>\n    <div class='well'>\n    <h3 class='text-primary'>{{search}}</h3>\n    </div>\n    "
    }),
    __metadata("design:paramtypes", [])
], ChildComponent);
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule, forms_1.FormsModule],
        declarations: [CompLifeCycleComponent, ChildComponent],
        bootstrap: [CompLifeCycleComponent]
    })
], AppModule);
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(AppModule);
//# sourceMappingURL=complifecycle.component.js.map