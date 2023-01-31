import {Directive, ElementRef, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[underline]',
  standalone: true
})
export class UnderlineDirective {

  @Input("color") color:string = "";

  constructor(private elementRef: ElementRef<HTMLElement>) {
  }

  @HostListener("mouseenter")
  public onMouseEnter() {
    this.elementRef.nativeElement.style.textDecoration = 'underline'
    this.elementRef.nativeElement.style.textDecorationColor = this.color
  }

  @HostListener("mouseleave")
  public onMouseLeave() {
    this.elementRef.nativeElement.style.textDecoration = 'none'
    this.elementRef.nativeElement.style.textDecorationColor = 'none'
  }

}
