import {
  Component,
  OnInit,
  OnChanges,
  OnDestroy,
  AfterViewInit,
  AfterViewChecked,
  DoCheck,
  AfterContentChecked,
  AfterContentInit,
  SimpleChanges,
  Input,
  ViewChild,
} from '@angular/core';
import { ChildlifecycleComponent } from '../childlifecycle/childlifecycle.component';

@Component({
  selector: 'app-lifecycle',
  templateUrl: './lifecycle.component.html',
  styleUrls: ['./lifecycle.component.css'],
})
export class LifecycleComponent
  implements
    OnInit,
    OnChanges,
    OnDestroy,
    AfterViewInit,
    AfterViewChecked,
    DoCheck,
    AfterContentChecked,
    AfterContentInit
{
  @Input() value: string;
 
  constructor() {
    console.log('constructor');
  }
@ViewChild(ChildlifecycleComponent,{static:false})viewchild:ChildlifecycleComponent

  ngOnChanges(changes: SimpleChanges): void {
    console.log('onchange');
  }

  ngOnInit(): void {
    console.log('oninit',
    this.viewchild)
  }

  ngOnDestroy(): void {
    console.log('ondestroy');
  }

  ngAfterContentChecked(): void {
    console.log('afterContentChecked');
  }

  ngDoCheck(): void {
    console.log('ngdocheck');
  }
  ngAfterViewChecked(): void {
    console.log('afterviewchecked');
  }
  ngAfterContentInit(): void {
    console.log('ngcontentinit');
  }
  ngAfterViewInit(): void {
    console.log('parent afterviewinit',
    this.viewchild)
    this.viewchild.child='david'
    
   
  }



}
