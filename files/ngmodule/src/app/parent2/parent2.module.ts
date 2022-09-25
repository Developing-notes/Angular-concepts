import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StartComponent } from './start/start.component';




@NgModule({
  declarations: [
    StartComponent
  ],
  exports:[StartComponent],

  imports: [
    CommonModule
  ]
})
export class Parent2Module { }
