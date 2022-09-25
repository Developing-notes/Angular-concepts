import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Location} from '@angular/common';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
    constructor(private location: Location) { location.go('/foo');
    }

goBack() {
  this.location.back();
}

goForward() {
  this.location.forward();
}

getPath() {
  console.log(this.location.path());
}

}
