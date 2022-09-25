import { Component } from '@angular/core';
import { Product } from './productdata';
import { ProductService } from './product.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  b: Product[];
  y;
  constructor() {
    this.y = new ProductService();
  }
  getProducts() {
    this.b = this.y.getProducts();
  }

}
