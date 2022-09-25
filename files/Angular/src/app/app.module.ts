import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello/hello.component';
import { LifecycleComponent } from './lifecycle/lifecycle.component';
import { ChildlifecycleComponent } from './childlifecycle/childlifecycle.component';
import { OnewaybindingComponent } from './onewaybinding/onewaybinding.component';
import { TwowaybindingComponent } from './twowaybinding/twowaybinding.component';
@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    LifecycleComponent,
    ChildlifecycleComponent,
    OnewaybindingComponent,
    TwowaybindingComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
