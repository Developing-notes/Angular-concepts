import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'ngif-for-switch';
  data = null;
  display:boolean= false;
  changevalue() {
    this.display = !this.display;
  }
  datas1 = [
    { name: 'aravind', age: 22, work: 'devolper', gender: 'm' },
    { name: 'divya', age: 22, work: 'phpdevolper', gender: 'f' },
    { name: 'raj', age: 22, work: 'nodejsdevolper', gender: 'm' },
    { name: 'vicky', age: 22, work: 'nodejsdevolper' },
  ];
  datas2 = [
    { name: 'gopi', age: 22, work: 'devolper', gender: 'm' },
    { name: 'divya', age: 22, work: 'phpdevolper', gender: 'f' },
    { name: 'raj', age: 22, work: 'nodejsdevolper', gender: 'm' },
    { name: 'vicky', age: 22, work: 'nodejsdevolper' },
  ];
  constructor() {
    this.data = this.datas1;
  }
  onclick() {
    this.data =
      this.data[0].name == this.datas1[0].name ? this.datas2 : this.datas1;
  }
  getname(index, data) {
    return data.name;
  }

 
}
