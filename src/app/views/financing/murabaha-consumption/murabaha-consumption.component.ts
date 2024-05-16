import { Component } from '@angular/core';
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-murabaha-consumption',
  templateUrl: './murabaha-consumption.component.html',
  styleUrls: ['./murabaha-consumption.component.scss']
})
export class MurabahaConsumptionComponent {

  constructor(private translate: TranslateService){
  }

  translateText(key: string): string {
    return this.translate.instant(key);
  }


  banner = [
    {
      title: 'murabahaConsumprionTextOne',
      subtitle: 'murabahaConsumprionTextTwo',
      image: './assets/images/pages/financing%20info/banner.png',
      buttonText: 'murabahaConsumprionTextThree',
      link: '/personal/financing/murabaha-consumption#app-financing-form',
    }
  ]
  conditionData = [
    {
      image: './assets/images/pages/financing%20info/ft2.png',
      title: 'murabahaConsumprionTextFour',
      subtitle: 'murabahaConsumprionTextFive'
    },
    {
      image: './assets/images/pages/deposit%20info/d2.png',
      title: 'murabahaConsumprionTextSix',
      subtitle: 'murabahaConsumprionTextSeven'
    },
    {
      image: './assets/images/pages/deposit%20info/d3.png',
      title: 'murabahaConsumprionTextEight',
      subtitle: 'murabahaConsumprionTextNine'
    },
  ]
  tariffTitle: string = 'murabahaConsumprionTextTen'
  tariffs = [
    {
      name: 'murabahaConsumprionTextEleven',
      value: 'murabahaConsumprionTextTwelve'
    },
    {
      name: 'murabahaConsumprionTextThirteen',
      value: 'murabahaConsumprionTextFourteen'
    },
    {
      name: 'murabahaConsumprionTextFifteen',
      value: 'murabahaConsumprionTextThirtySix'
    },
    {
      name: 'murabahaConsumprionTextSixteen',
      value: 'murabahaConsumprionTextSeventeen'
    },
    {
      name: 'murabahaConsumprionTextEighteen',
      value: 'murabahaConsumprionTextNineteen'
    },
    {
      name: 'murabahaConsumprionTextTwenty',
      value: 'murabahaConsumprionTextTwentyOne'
    },
    {
      name: 'murabahaConsumprionTextTwentyTwo',
      value: 'murabahaConsumprionTextTwentyThree'
    },
    {
      name: 'murabahaConsumprionTextTwentyFour',
      value: 'murabahaConsumprionTextTwentyFive'
    },
  ]
  documents: string[] = [
    'murabahaConsumprionTextTwentySix',
    'murabahaConsumprionTextTwentySeven',
    'murabahaConsumprionTextTwentyEight',
  ]
  limits: string[] = [
    'murabahaConsumprionTextTwentyNine',
    'murabahaConsumprionTextThirty',
    'murabahaConsumprionTextThirtyOne',
    'murabahaConsumprionTextThirtyTwo',
    'murabahaConsumprionTextThirtyThree'
  ]

  loanTitle: string = 'murabahaConsumprionTextThirtyFour';
  docPeriod: string = 'murabahaConsumprionTextThirtyFive';
  tjsRate: number = 24;
  usdRate: number = 7.4;


}
