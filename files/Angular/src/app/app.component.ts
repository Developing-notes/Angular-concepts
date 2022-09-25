import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'angular';
  data = false;
  toggle() {
    this.data = !this.data;
  }
//anotherconcept//
content:boolean= false
value:string='aravind'

showdata(){
  this.content=!this.content
}


click(user){
  console.log(user)
}

}
