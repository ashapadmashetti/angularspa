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
var product_service_1 = require("./product.service");
//dependency Injection (DI)
var ProductComponent = (function () {
    function ProductComponent(ps) {
        console.log("Service is injected");
        this.product = ps.getProduct();
    }
    return ProductComponent;
}());
ProductComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        providers: [product_service_1.ProductService],
        templateUrl: './app/DI/product.component.html',
        styles: ["\n    .one {background-color:orange}\n    .tab {padding:10px; margin:15px;cursor:pointer}\n    .panel {background-color:lightgreen}   \n  "]
    }),
    __metadata("design:paramtypes", [product_service_1.ProductService])
], ProductComponent);
var ProductModule = (function () {
    function ProductModule() {
    }
    return ProductModule;
}());
ProductModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule, forms_1.FormsModule],
        declarations: [ProductComponent],
        bootstrap: [ProductComponent]
    })
], ProductModule);
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(ProductModule);
//# sourceMappingURL=product.component.js.map