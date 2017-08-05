import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import{NgModule, Component} from '@angular/core'
import{BrowserModule} from '@angular/platform-browser'

import{FormsModule} from '@angular/forms'
import{NestedComponent} from './nested.component'

@Component({
    selector:'my-app',
    templateUrl:'./app/binding/binding.component.html'
})

class BindingComponent
{
    public Items:any=[
        {name:"Kendo UI"},
        {name:"Ext JS"},
        {name:"Angular JS"},
        {name:"Ember JS"},        
    ];
    public clickedItem:any={name:""};

    onItemClicked(Item:any){
        this.clickedItem=Item;
    }
}
@NgModule({
  imports:      [ BrowserModule,FormsModule ],
  declarations: [ BindingComponent,NestedComponent ],
  bootstrap:    [BindingComponent]
  
})

class BindingModule{}
platformBrowserDynamic().bootstrapModule(BindingModule);

