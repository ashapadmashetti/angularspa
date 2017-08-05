import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import{NgModule, Component} from '@angular/core';
import{BrowserModule} from '@angular/platform-browser';

import { OrderComponent } from './ordercomponent';
import{SMSComponent} from './smscomponent';
import{TimerComponent} from './timercomponent';


@Component({
    selector:"my-app",
    template:`
    <h1 class='bg-info'> Stock Exchange </h1>
    <input type="text" placeholder="Enter stock(e.g: Verizon) "
    (change)="onInputEvent($event)">
    <br/>
    <order-processor [stockSymbol]="stock" quantity="100">
    </order-processor>
    <timer-comp></timer-comp>
        `
})

class StockComponent{
    stock:string;
    onInputEvent({target}:any):void{
        this.stock=target.value;
        
    }
}


@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ StockComponent, OrderComponent,SMSComponent ,TimerComponent],
  bootstrap:    [ StockComponent ]
  
})

class InterCompModule{
   
}
 platformBrowserDynamic().bootstrapModule(InterCompModule)

