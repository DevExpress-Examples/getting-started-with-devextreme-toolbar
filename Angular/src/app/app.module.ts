import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
 
import {
    DxToolbarModule, DxTextBoxModule
} from 'devextreme-angular';
 
@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        DxToolbarModule,
        DxTextBoxModule
    ],
    providers: [ ],
    bootstrap: [AppComponent]
})
export class AppModule { }