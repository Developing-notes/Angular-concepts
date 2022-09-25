import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule} from "@angular/forms";
import {ModelModule} from "../model/model.module";
import { CounterDirective } from "./counter.directive";
import {StoreComponent} from "./store.component";
import { CartSummaryComponent } from "./cartSummary.component";
import { CartDetailComponent } from "./cartDetail.component"; 
import { CheckoutComponent } from "./checkout.component";
import { RouterModule } from "@angular/router";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
@NgModule({
    imports: [
        ModelModule, BrowserModule, FormsModule,RouterModule,NgbModule
    ],
    declarations: [StoreComponent, CounterDirective, CartSummaryComponent,CartDetailComponent,CheckoutComponent],
    exports: [StoreComponent]
})
export class StoreModule {}
