import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-childlifecycle',
  templateUrl: './childlifecycle.component.html',
  styleUrls: ['./childlifecycle.component.css']
})
export class ChildlifecycleComponent implements OnInit {
  child='aravind'
  @Input() value: string;
  constructor() {
    console.log('childconstructor');
  }

  ngOnChanges(): void {
    console.log('childonchange');
  }

  ngOnInit(): void {
    console.log('childoninit');
  }

  ngOnDestroy(): void {
    console.log('childondestroy');
  }

  ngAfterContentChecked(): void {
    console.log('childafterContentChecked');
  }

  ngDoCheck(): void {
    console.log('childngdocheck');
  }
  ngAfterViewChecked(): void {
    console.log('childafterviewchecked');
  }
  ngAfterContentInit(): void {
    console.log('childngcontentinit');
  }
  ngAfterViewInit(): void {
    console.log('childafterviewinit');
  }
}
