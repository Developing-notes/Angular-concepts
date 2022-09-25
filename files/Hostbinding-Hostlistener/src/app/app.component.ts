import { Component, Input, HostListener, HostBinding } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Hostbinding-Hostlistener';
  @Input() name: any;
  @HostBinding('style.color') color = 'red';

  change() {
    this.color = 'green';
  }
}
