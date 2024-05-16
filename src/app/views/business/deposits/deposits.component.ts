import { Component } from '@angular/core';
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-deposits',
  templateUrl: './deposits.component.html',
  styleUrls: ['./deposits.component.scss']
})
export class DepositsComponent {
  tabsArray: string[] = ['businessDepositPageTextNineteen', 'businessDepositPageTextTwenty'];
  activatedTab: number = 0;
  requestType: string = 'Ограниченная мудараба';
  appId: number = 2;
  productId: number = 10;

  constructor(private translate: TranslateService) {
  }

  translateText(key: string): string {
    return this.translate.instant(key);
  }

  setTab(index: number) {
    this.activatedTab = index;
  }

  banner = [
    {
      title: 'businessDepositPageTextOne',
      subtitle: 'businessDepositPageTextTwo',
      image: './assets/images/pages/investments/banner.png',
      buttonText: 'businessDepositPageTextFour',
      link: 'business/deposits#request',
      class: 'card'
    }
  ]

  conditionData = [
    {
      image: './assets/images/pages/investments/r1.png',
      title: 'businessDepositPageTextFive',
      subtitle: 'businessDepositPageTextSix'
    },
    {
      image: './assets/images/pages/investments/r2.png',
      title: 'businessDepositPageTextSeven',
      subtitle: 'businessDepositPageTextEight'
    },
    {
      image: './assets/images/pages/investments/r3.png',
      title: 'businessDepositPageTextNine',
      subtitle: 'businessDepositPageTextTen'
    },
  ]
}
