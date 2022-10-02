import {
  Component,
  OnInit,
} from '@angular/core';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-hello',
  template: `<h1>{{ content1 }}
    <br>{{content2}}</h1>
   <!-- <button (click)="stopTimer()">stopTimer</button> -->
  `,
  styleUrls: ['./hello.component.css'],
})
export class HelloComponent implements OnInit {
  mySubscription: Subscription
  content1: string;
  content2: any
  ngOnInit() {
    console.log('this is oninit');
    this.setInterval()    
  }

  setInterval(){
    this.text()
    this.mySubscription = interval(5000).subscribe((x => {
      console.log("x: ", x);
      this.clearInterval();
    })
    )
  }

  clearInterval() {
    //doing stuff with unsubscribe at end to only run once
    this.mySubscription.unsubscribe();
    this.changeText()
  }
  
  text() {
    this.content1 = "hello"
    this.content2 = "welcome"
  }

  changeText() {
    this.content1 = "hello world"
    this.content2 = "welcome world"
  }


}
