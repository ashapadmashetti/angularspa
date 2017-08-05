import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { NgModule, Component,Input,OnInit,OnChanges }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';

//parent component
@Component({
    selector:'my-app',
    template:`<h1 class="container">Google Search: 
        <input type="text" [(ngModel)]="search">
    </h1>
    <child [search]="search"></child>
    `
})


//parent component
class CompLifeCycleComponent{
    search :string='Computers';
}

//child component 
@Component({
    selector:'child',
    template:`<h1 class="text-danger container">Search Text : </h1>
    <div class='well'>
    <h3 class='text-primary'>{{search}}</h3>
    </div>
    `
})

class ChildComponent implements OnInit,OnChanges{
    @Input() search :string;
    constructor(){
        console.log(`constructor: ${this.search}`);

    }
    ngOnInit(){
        console.log(`ngOnInit: ${this.search}`);
    }
    ngOnChanges(){
         console.log(`ngOnChanges: ${this.search}`);
    }

}


@NgModule({
    imports:      [ BrowserModule,FormsModule],
    declarations: [ CompLifeCycleComponent,ChildComponent],
    bootstrap:    [ CompLifeCycleComponent ]

})
class AppModule { }
platformBrowserDynamic().bootstrapModule(AppModule);
