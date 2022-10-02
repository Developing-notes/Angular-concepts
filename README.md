# Angular-concepts
1.interval Subscription using unsubscribe methods


import {
  Component,
  OnInit,
} from '@angular/core';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-hello',
  template: `<h1>{{ content }}</h1> `,
  styleUrls: ['./hello.component.css'],
})
export class HelloComponent implements OnInit {
  mySubscription: Subscription
  content: any
  ngOnInit() {
    console.log('this is oninit');
    this.text()
    this.mySubscription = interval(5000).subscribe((x => {
      console.log("x: ", x);
      this.stop();
    })
    )
  }

  text() {
    this.content = "hello"
  }
  stop() {
    //doing stuff with unsubscribe at end to only run once
    this.mySubscription.unsubscribe();
    this.content = "helloworld"
  }

}
