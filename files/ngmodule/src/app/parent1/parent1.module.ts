import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { Parent2Module } from '../parent2/parent2.module';



@NgModule({
  declarations: [  FirstComponent, SecondComponent ],
  exports:[FirstComponent,Parent2Module],
  imports: [
    CommonModule,Parent2Module
  ]
})
export class Parent1Module { }
