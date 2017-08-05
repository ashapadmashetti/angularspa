import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { NgModule, Component }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';

import {Product} from './product'
import {ProductService} from "./product.service";
//dependency Injection (DI)
@Component({
  selector: 'my-app',
  providers:[ProductService],
  templateUrl:'./app/DI/product.component.html',
  styles:[`
    .one {background-color:orange}
    .tab {padding:10px; margin:15px;cursor:pointer}
    .panel {background-color:lightgreen}   
  `]  
})
class ProductComponent {
  product: Product;

  constructor( ps: ProductService) {
   console.log("Service is injected")
    this.product = ps.getProduct();
  }
}
@NgModule({
    imports:      [ BrowserModule,FormsModule],
    declarations: [ ProductComponent],
    bootstrap:    [ ProductComponent ]

})
class ProductModule { }
platformBrowserDynamic().bootstrapModule(ProductModule);
