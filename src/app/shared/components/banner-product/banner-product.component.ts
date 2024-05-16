import {Component, Input, OnInit} from '@angular/core';
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'banner-product',
  templateUrl: './banner-product.component.html',
  styleUrls: ['./banner-product.component.scss']
})
export class BannerProductComponent{
  @Input() bannerData!:any;
  protected readonly window = window;

  constructor(private translate: TranslateService){
  }

  translateText(key: string): string {
    return this.translate.instant(key);
  }

}
