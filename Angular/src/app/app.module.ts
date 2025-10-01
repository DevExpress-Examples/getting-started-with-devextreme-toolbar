import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DxToolbarModule } from 'devextreme-angular/ui/toolbar';
import { DxButtonModule } from 'devextreme-angular/ui/button';
import { DxTextBoxModule } from 'devextreme-angular/ui/text-box';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DxToolbarModule,
    DxButtonModule,
    DxTextBoxModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
