import {Component, ElementRef, OnInit, Renderer2} from '@angular/core';
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'bank-website';

  constructor(private translateService: TranslateService,
              private elementRef: ElementRef,
              private renderer: Renderer2) {
    this.translateService.setDefaultLang('tj');
    this.translateService.use(sessionStorage.getItem('lang') || 'tj');
  }

  ngOnInit() {
    const touch = new Touch({
      identifier: Date.now(),
      target: this.elementRef.nativeElement,
      clientX: 100,
      clientY: 100,
      radiusX: 2.5,
      radiusY: 2.5,
      rotationAngle: 10,
      force: 0.5
    });

    const event = new TouchEvent('touchstart', {
      bubbles: true,
      cancelable: true,
      touches: [touch]
    });

    this.elementRef.nativeElement.addEventListener('touchstart', () => {
      console.log('Touch tap event triggered.');
    });

    this.elementRef.nativeElement.dispatchEvent(event);
  }
}
