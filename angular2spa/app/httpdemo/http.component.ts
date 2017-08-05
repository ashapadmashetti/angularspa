
import { platformBrowserDynamic } 
   from '@angular/platform-browser-dynamic';
import { NgModule, Component }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormControl,  ReactiveFormsModule} from '@angular/forms';

import {HttpModule, Http} from '@angular/http';

//RXJS
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import './rxjs-operators';

@Component({
    selector: "my-app",
    template: `
    <div class="container">
      <h2>Live Weather Forecast by Murthy</h2>
      
      City:<input type="text" placeholder="Enter city" 
            [formControl]="searchInput">

      <h3>{{temperature}}</h3>
     <h2 class="text-success">{{description}}</h2>
     </div>
    `
})
export class WeatherComponent {

    private baseWeatherURL: string=
     'http://api.openweathermap.org/data/2.5/weather?q=';

    private urlSuffix: string = 
       "&units=imperial&appid=ccfd06e8729e5b70e39b4073e30d77f7";

    searchInput: FormControl = new FormControl();
    temperature: string;
    description:string='';

    constructor(private http:Http){ 
    //Observable form       
        this.searchInput.valueChanges
            .debounceTime(200)
            .switchMap((city:string) => this.getWeather(city))
            .subscribe(
                res => {                    
                        this.description=
                        `Status: ${res.weather[0].description}`
                        this.temperature =
                         `
                        Current temperature is  ${res.main.temp}F, ` +
                       `humidity: ${res.main.humidity}%`;                    
                },
                  err => 
                  console.log(
                  `
                    Can't get weather. Error code: %s, URL: %s
                  `, err.message, err.url),
                  
                () => console.log(`made request to openweather map`)
            );
    }

   ngOnInit(){
        this.searchInput.setValue("Chennai"); 
        // by default get weather 
    }

    //Ajax call here (write this code in service)
    getWeather(city: string): Observable<any> {
   return this.http.get(this.baseWeatherURL + city + this.urlSuffix)
        .map(data => {
            console.log(data);
            return data.json()});
    }
}
@NgModule({
    imports:      [ BrowserModule,  ReactiveFormsModule,HttpModule],
    declarations: [ WeatherComponent],
    bootstrap:    [ WeatherComponent ]
})
class AppModule { }
platformBrowserDynamic().bootstrapModule(AppModule);

