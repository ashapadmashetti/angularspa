import { platformBrowserDynamic } from '@angular/platform-browser-dynamic'
import {NgModule,Component, EventEmitter,Output,Input} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'

export interface IPriceQuote{
    stockSymbol:string;
    lastPrice:number;
}

// child component
@Component({
    selector: 'price-quoter',
    template: `<h1 class="well text-danger">
                Child PriceQuoterComponent:
               {{stockSymbol}} 
                      {{price | currency:'USD':'1.2'}}
               </h1>
               `
})
class PriceQuoterComponent {
    // @Output() 
    // lastPriceEvent: EventEmitter <IPriceQuote> =new EventEmitter();

    // stockSymbol: string = "Verizon";
    // price:number;

    // constructor() {
    //     setInterval(() => {
    //         let priceQuote: IPriceQuote = {
    //             stockSymbol: this.stockSymbol,
    //             lastPrice: 100*Math.random()
    //         };
    //         this.price = priceQuote.lastPrice;
    //         this.lastPriceEvent.emit(priceQuote);//Raise Event
    //     }, 1000);
    // }
}


// parent component
@Component({
    selector: 'my-app',
    template: `
    <div class='container'>
        <h1 class='text-success'>
        Parent Component received: 
        {{stockSymbol}} {{price | currency:'USD':true:'1.2'}}
        </h1>

       <price-quoter (lastPriceEvent)="priceQuoteHandler($event)">
       </price-quoter> 
        <msg-text [stockSymbol]="stockSymbol" [price]="price"></msg-text>   
    </div>
    `
   })
class OutputComponent {
    
    stockSymbol: string;
    price:number;
  
    priceQuoteHandler(event:IPriceQuote) {
        this.stockSymbol = event.stockSymbol;
        this.price = event.lastPrice;
    }
}

@Component({
	selector:'msg-text',
	template:`
	<h3 class='bg-success'>		
	  Stock Information from parent for MSG component</h3>
	<h2 class="text-success container">
		Sent SMS about {{stockSymbol}}  {{price | currency:'USD':'1.2'}}
	</h2>
	`
})
class MSGComponent{

   //  private _price:number;
	// private _stockSymbol:string;
     @Input() stockSymbol:string;
     @Input() price:number;

/*	@Input()
		set stockSymbol(value:string){
		this._stockSymbol=value;
	}
		get stockSymbol():string{
			return this._stockSymbol;
		}
    @Input()
		set price(value:number){
		this._price=value;
	}
		get price():number{
			return this._price;
		}*/
	}

    
   


@NgModule({
    imports:      [ BrowserModule],
    declarations: [ OutputComponent,PriceQuoterComponent,MSGComponent],
    bootstrap:    [ OutputComponent ]
})

class AppModule { }
platformBrowserDynamic().bootstrapModule(AppModule);