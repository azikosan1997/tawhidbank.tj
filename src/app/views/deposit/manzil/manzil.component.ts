import { Component } from '@angular/core';

@Component({
  selector: 'app-manzil',
  templateUrl: './manzil.component.html',
  styleUrls: ['./manzil.component.scss']
})
export class ManzilComponent {
  appId: number = 2;
  prodId: number = 8;

  banner = [
    {
      title: 'depositManzilTextOne',
      subtitle: 'depositManzilTextTwo',
      image: './assets/images/pages/deposit%20info/banner-manzil.png',
      buttonText: 'depositManzilTextThree',
      link: '/personal/deposit/manzil#deposit-form'
    }
  ]
  conditionData = [
    {
      image: './assets/images/pages/deposit%20info/d4.png',
      title: 'depositManzilTextFour',
      subtitle: 'depositManzilTextFive'
    },
    {
      image: './assets/images/pages/deposit%20info/d2.png',
      title: 'depositManzilTextSix',
      subtitle: 'depositManzilTextSeven'
    },
    {
      image: './assets/images/pages/deposit%20info/d3.png',
      title: 'depositManzilTextEight',
      subtitle: 'depositManzilTextNine'
    },
  ]
  productName: string = 'depositManzilTextTen';
  tariffTitle: string = 'depositManzilTextEleven'
  tariffs = [
    {
      name: 'depositManzilTextTwelve',
      value: 'depositManzilTextThirteen'
    },
    {
      name: 'depositManzilTextFourteen',
      value: 'depositManzilTextFifteen'
    },
    {
      name: 'depositManzilTextSixteen',
      value: 'depositManzilTextSeventeen'
    },
    {
      name: 'depositManzilTextEighteen',
      value: 'depositManzilTextNineteen'
    },
    {
      name: 'depositManzilTextTwenty',
      value: 'depositManzilTextTwentyOne'
    },
    {
      name: 'depositManzilTextTwentyTwo',
      value: 'depositManzilTextTwentyThree'
    },
    {
      name: 'depositManzilTextTwentyFour',
      value: 'depositManzilTextTwentyFive'
    },
    {
      name: 'depositManzilTextTwentySix',
      value: 'depositManzilTextTwentySeventeen'
    },
  ]
  documents: string[] = [
    'personalNationalCardTextNineteen',
    'personalNationalCardTextTwenty',
    'personalNationalCardTextTwentyOne',
  ]

  constructor() {
  }
}
