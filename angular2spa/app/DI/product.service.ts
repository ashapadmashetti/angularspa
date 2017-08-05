import {Injectable} from  '@angular/core'

import{Product} from './product'

@Injectable()
export class ProductService{
    getProduct():Product{
        return new Product(1,"Iphone 7",249.99,"The latest Iphone , 7-inch screen");
    }


}