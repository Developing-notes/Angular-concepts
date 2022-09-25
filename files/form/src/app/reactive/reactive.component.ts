import { Component } from '@angular/core';
import { User } from '../User';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css'],
})
export class ReactiveComponent {
  user = new User('', 0);
  myForm = new FormGroup({
    name: new FormControl('', Validators.required),
    age: new FormControl(''),
  });
  submitForm() {
    console.log(
      this.myForm.controls.name.value +
        ' is ' +
        this.myForm.controls.age.value +
        ' years old'
    );
  }
}
