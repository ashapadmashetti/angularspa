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
var http_1 = require("@angular/http");
require("rxjs/add/operator/switchMap");
require("rxjs/add/operator/map");
require("rxjs/add/operator/debounceTime");
require("./rxjs-operators");
var WeatherComponent = (function () {
    function WeatherComponent(http) {
        var _this = this;
        this.http = http;
        this.baseWeatherURL = 'http://api.openweathermap.org/data/2.5/weather?q=';
        this.urlSuffix = "&units=imperial&appid=ccfd06e8729e5b70e39b4073e30d77f7";
        this.searchInput = new forms_1.FormControl();
        this.description = '';
        //Observable form       
        this.searchInput.valueChanges
            .debounceTime(200)
            .switchMap(function (city) { return _this.getWeather(city); })
            .subscribe(function (res) {
            _this.description =
                "Status: " + res.weather[0].description;
            _this.temperature =
                "\n                        Current temperature is  " + res.main.temp + "F, " +
                    ("humidity: " + res.main.humidity + "%");
        }, function (err) {
            return console.log("\n                    Can't get weather. Error code: %s, URL: %s\n                  ", err.message, err.url);
        }, function () { return console.log("made request to openweather map"); });
    }
    WeatherComponent.prototype.ngOnInit = function () {
        this.searchInput.setValue("Chennai");
        // by default get weather 
    };
    //Ajax call here (write this code in service)
    WeatherComponent.prototype.getWeather = function (city) {
        return this.http.get(this.baseWeatherURL + city + this.urlSuffix)
            .map(function (data) {
            console.log(data);
            return data.json();
        });
    };
    return WeatherComponent;
}());
WeatherComponent = __decorate([
    core_1.Component({
        selector: "my-app",
        template: "\n    <div class=\"container\">\n      <h2>Live Weather Forecast by Murthy</h2>\n      \n      City:<input type=\"text\" placeholder=\"Enter city\" \n            [formControl]=\"searchInput\">\n\n      <h3>{{temperature}}</h3>\n     <h2 class=\"text-success\">{{description}}</h2>\n     </div>\n    "
    }),
    __metadata("design:paramtypes", [http_1.Http])
], WeatherComponent);
exports.WeatherComponent = WeatherComponent;
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule, forms_1.ReactiveFormsModule, http_1.HttpModule],
        declarations: [WeatherComponent],
        bootstrap: [WeatherComponent]
    })
], AppModule);
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(AppModule);
//# sourceMappingURL=http.component.js.map