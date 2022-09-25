import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
})
export class HighlightDirective {
  constructor(public a: ElementRef) {}
  
  @HostListener('mouseenter') mouseenter() {
    this.a.nativeElement.style.color = 'blue';
  }

  @HostListener('mouseleave') mouseleave() {
    this.a.nativeElement.style.color = 'yellow';
  }
}
