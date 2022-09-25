import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appShow]',
})
export class ShowDirective {
  reder = false;
  @Input() set  showcontent (value) {
    if (value && !this.reder) {
      this.b.createEmbeddedView(this.a);
      this.reder=true
    } else if (!value && this.reder) {
      this.b.clear();
      this.reder=false
    }
  }

  constructor(public a: TemplateRef<any>, public b: ViewContainerRef) {}
}
