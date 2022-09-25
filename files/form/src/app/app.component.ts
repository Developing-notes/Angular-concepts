
import { Component } from '@angular/core';
import { User } from './User';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  user = new User("", 0);

  submitForm(){
    console.log(this.user.name + " is " + this.user.age +
     " years old" );
  }
}