/*

The scheme of interactions discussed above is based on the 
Mediator Design Pattern. 

ParentComponent is acting as a central authority 
which is responsible for communication between childcomponents.

*/

import { platformBrowserDynamic } from 
       '@angular/platform-browser-dynamic'

import { BrowserModule } from '@angular/platform-browser'

import {NgModule,Component, ViewChild} from '@angular/core';

import {ChildComponent} from './child.component';

@Component({
    selector: 'my-app',
    template: `
    <div>
        <h1>Parent Component</h1>
        <button (click)="showHideText()">
            Show/Hide Child Component Text</button>

        <div class="container" style="background-color:yellow">    
            <child-component></child-component>
        </div>
    </div>
    `
})

export class AppComponent {
    @ViewChild(ChildComponent) private childComponent:ChildComponent;

    showHideText() {
        this.childComponent.toggleVisibility('Parent Component');
    }
}

@NgModule({
    imports:      [ BrowserModule],
    declarations: [ AppComponent,ChildComponent],
    bootstrap:    [ AppComponent ]
})

export class AppModule { }
platformBrowserDynamic().bootstrapModule(AppModule);







