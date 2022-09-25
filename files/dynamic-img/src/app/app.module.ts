import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { NguiInViewComponent } from './ngui-in-view/ngui-in-view.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  imports:      [
    FormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    
  
],
  declarations: [ 
    AppComponent, 
    NguiInViewComponent
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
