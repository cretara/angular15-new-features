import {
  Directive,
  ElementRef,
  EventEmitter,
  HostListener,
  Output,
} from "@angular/core";

@Directive({
  selector: "[appBold]",
  standalone: true,
})
export class BoldDirective {
  @Output() hover = new EventEmitter();

  constructor(private elementRef: ElementRef<HTMLElement>) {}

  @HostListener("mouseenter")
  public onMouseEnter() {
    this.elementRef.nativeElement.style.fontWeight = "bold";
    this.hover.emit();
  }

  @HostListener("mouseleave")
  public onMouseLeave() {
    this.elementRef.nativeElement.style.fontWeight = "normal";
  }
}
