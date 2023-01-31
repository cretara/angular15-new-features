import {Directive, ElementRef, HostListener} from '@angular/core';

@Directive({
  selector: '[bold]',
  standalone: true
})
export class BoldDirective {

  constructor(private elementRef: ElementRef<HTMLElement>) {
  }

  @HostListener("mouseenter")
  public onMouseEnter() {
    this.elementRef.nativeElement.style.fontWeight = 'bold'
  }

  @HostListener("mouseleave")
  public onMouseLeave() {
    this.elementRef.nativeElement.style.fontWeight = 'normal'
  }


}
