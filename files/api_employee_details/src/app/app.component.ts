import { Component, OnInit } from '@angular/core';
import { RestService } from './rest.service';
import { Users } from 'src/Users';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor(private servicework: RestService) {}

  
  users: Users[] = [];
 
  first = ['User Id', 'First Name', 'Last Name', 'Email', 'Mobile', 'Salary'];

  second = ['id', 'firstName', 'lastName', 'email', 'mobile', 'salary'];

  ngOnInit(): void {
    this.servicework.getUsers().subscribe((response) => {
      this.users = response; //httpresponse//
    });
  }
}
