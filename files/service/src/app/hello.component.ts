import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';
@Component({
  selector: 'app-hello',
  template: `
    <p>
      {{data.count}}
    </p>
    <button (click)="increase()">increase</button>
    <button (click)="decrease()">decrease</button>

  `,
  styles: [
  ]

})
export class HelloComponent  {

  constructor(public data:DataService) { }
  increase(){
    this.data.count++
  }
  decrease(){
    this.data.count--
  }

}
