import {Directive, ElementRef, HostListener, Renderer2} from '@angular/core';

@Directive({
  selector: '[appHideOnSmallScreen]'
})
export class HideOnSmallScreenDirective {

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    this.hideWidgetOnSmallScreens();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.hideWidgetOnSmallScreens();
  }

  private hideWidgetOnSmallScreens() {
    const screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

    if (screenWidth <= 600) {
      this.renderer.setStyle(this.el.nativeElement, 'display', 'none');
    } else {
      this.renderer.setStyle(this.el.nativeElement, 'display', 'block');
    }
  }

}
