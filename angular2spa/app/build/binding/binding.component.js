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
var forms_1 = require("@angular/forms");
var nested_component_1 = require("./nested.component");
var BindingComponent = (function () {
    function BindingComponent() {
        this.Items = [
            { name: "Kendo UI" },
            { name: "Ext JS" },
            { name: "Angular JS" },
            { name: "Ember JS" },
        ];
        this.clickedItem = { name: "" };
    }
    BindingComponent.prototype.onItemClicked = function (Item) {
        this.clickedItem = Item;
    };
    return BindingComponent;
}());
BindingComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        templateUrl: './app/binding/binding.component.html'
    })
], BindingComponent);
var BindingModule = (function () {
    function BindingModule() {
    }
    return BindingModule;
}());
BindingModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule, forms_1.FormsModule],
        declarations: [BindingComponent, nested_component_1.NestedComponent],
        bootstrap: [BindingComponent]
    })
], BindingModule);
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(BindingModule);
//# sourceMappingURL=binding.component.js.map