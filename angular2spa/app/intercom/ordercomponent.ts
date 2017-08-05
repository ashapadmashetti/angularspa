import {Component, Input } from '@angular/core';

//OrderComponent
@Component({
    selector: 'order-processor',    
    template: `
    <h2 class='bg-primary' >Stock Information</h2>
    <h2 class="text-danger container">
        Buying {{quantity}} shares of {{stockSymbol}}
    </h2>
    <sms-text [stockSymbol]="stockSymbol"></sms-text>
  `   
})
export class OrderComponent {
    @Input() quantity: number;

    private _stockSymbol: string;

    @Input()
    set stockSymbol(value: string) {
        this._stockSymbol = value;
        if (this._stockSymbol != undefined) {
          console.log
          (`Sending a Buy order to NASDAQ: 
              ${this._stockSymbol} ${this.quantity}
          `);
       }
    }
    get stockSymbol(): string {
        return this._stockSymbol;
    }
}
