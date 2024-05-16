import {Component} from '@angular/core';
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-mudaraba',
  templateUrl: './mudaraba.component.html',
  styleUrls: ['./mudaraba.component.scss']
})
export class MudarabaComponent {
  appId: number = 2;
  prodId: number = 7;

  constructor(private translate: TranslateService) {
  }

  translateText(key: string): string {
    return this.translate.instant(key);
  }

  banner = [
    {
      title: 'depositMudarabatextOne',
      subtitle: 'depositMudarabatextTwo',
      image: './assets/images/pages/deposit%20info/banner-mudaraba.png',
      buttonText: 'depositMudarabatextThree',
      link: '/personal/deposit/mudaraba#deposit-form'
    }
  ]
  conditionData = [
    {
      image: './assets/images/pages/deposit%20info/d1.png',
      title: 'depositMudarabatextFour',
      subtitle: 'depositMudarabatextFive'
    },
    {
      image: './assets/images/pages/deposit%20info/d2.png',
      title: 'depositMudarabatextSix',
      subtitle: 'depositMudarabatextSeven'
    },
    {
      image: './assets/images/pages/deposit%20info/d3.png',
      title: 'depositMudarabatextEight',
      subtitle: 'depositMudarabatextNine'
    },
  ]
  productName: string = 'depositMudarabatextTen';
  tariffTitle: string = 'depositMudarabatextEleven'
  tariffs = [
    {
      name: 'depositMudarabatextTwelve',
      value: 'depositMudarabatextThirteen'
    },
    {
      name: 'depositMudarabatextFourteen',
      value: 'depositMudarabatextFifteen'
    },
    {
      name: 'depositMudarabatextSixteen',
      value: 'depositMudarabatextSeventeen'
    },
    {
      name: 'depositMudarabatextEighteen',
      value: 'depositMudarabatextNineteen'
    },
    {
      name: 'depositMudarabatextTwenty',
      value: 'depositMudarabatextTwentyOne'
    },
    {
      name: 'depositMudarabatextTwentyTwo',
      value: 'depositMudarabatextTwentyThree'
    },
    {
      name: 'depositMudarabatextTwentyFour',
      value: 'depositMudarabatextTwentyFive'
    },
    {
      name: 'depositMudarabatextTwentySix',
      value: 'depositMudarabatextTwentySeventeen'
    },
  ]
  documents: string[] = [
    'personalNationalCardTextNineteen',
    'personalNationalCardTextTwenty',
    'personalNationalCardTextTwentyOne',
  ]
}
