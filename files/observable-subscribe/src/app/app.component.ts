import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Angular Observable using RxJs - Getting Started';
 
  obs = new Observable((observer) => {
    console.log("Observable starts")
      observer.next("1")
      observer.next("2")
      observer.next("3")
      observer.next("4")
      observer.next("5")
  })
 
  data=[];
   
  ngOnInit() {
 
    this.obs.subscribe(
      val=> { console.log(val) },
      error => { console.log("error")},
      () => {console.log("Completed")}
    )
  }
}
 