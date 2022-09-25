import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html'

})

export class StudentComponent implements OnInit {
  //@Input() myinputMsg: string | undefined;
  @Output() myOutput: EventEmitter<string> = new EventEmitter();
  outputMessage: string = "I am child component."
  constructor() { }
  ngOnInit() {
    this.sendValues()
  }

  sendValues() {
    this.myOutput.emit(this.outputMessage);
    console.log("this.outputMessage: ", this.outputMessage);
  }

}
