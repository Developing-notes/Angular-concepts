import {
  Component,
  Input,
  OnInit,
  OnDestroy,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { Router } from '@angular/router';
import { interval } from 'rxjs';

@Component({
  selector: 'app-hello',
  template: `<h1>hello{{ name }}</h1> <button (click)="stopTimer()">stopTimer</button>`,
  styleUrls: ['./hello.component.css'],
})
export class HelloComponent implements OnInit, OnDestroy, OnChanges {
  @Input() name: string;
  public intervallTimer = interval(500);
  time = null;
  subscription: any;
  constructor(private router:Router) { console.log(this.name) }

  ngOnChanges(changes) {
    console.log('this is onchange', changes);
  }
  ngOnInit() {
    console.log('this is oninit');
    // this.time = setInterval(() => {
    //   console.log(new Date());
    // }, 1000);
    this.subscription = this.intervallTimer.subscribe(() => {
     console.log('hello')
    })
  }
  ngOnDestroy() {
    console.log('this is ondestroy');
    // if (this.time) {
    //   clearInterval(this.time);
    // }
  this.subscription.unsubscribe()
  
  }
  stopTimer() {
    this.ngOnDestroy()
  }





}
