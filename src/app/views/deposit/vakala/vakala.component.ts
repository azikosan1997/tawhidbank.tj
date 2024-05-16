import { Component } from '@angular/core';

@Component({
  selector: 'app-vakala',
  templateUrl: './vakala.component.html',
  styleUrls: ['./vakala.component.scss']
})
export class VakalaComponent {
  appId: number = 2;
  prodId: number = 9;

  banner = [
    {
      title: 'depositVakalaTextOne',
      subtitle: 'depositVakalaTextTwo',
      image: './assets/images/pages/deposit%20info/deposit-vakala.png',
      buttonText: 'depositVakalaTextThree',
      link: '/personal/deposit/vakala#deposit-form',
    }
  ]
  conditionData = [
    {
      image: './assets/images/pages/deposit%20info/d4.png',
      title: 'depositVakalaTextFour',
      subtitle: 'depositVakalaTextFive'
    },
    {
      image: './assets/images/pages/deposit%20info/d2.png',
      title: 'depositVakalaTextSix',
      subtitle: 'depositVakalaTextSeven'
    },
    {
      image: './assets/images/pages/deposit%20info/d3.png',
      title: 'depositVakalaTextEight',
      subtitle: 'depositVakalaTextNine'
    },
  ]
  productName: string = 'depositVakalaTextTen';
  tariffTitle: string = 'depositVakalaTextEleven'
  tariffs = [
    {
      name: 'depositVakalaTextTwelve',
      value: 'depositVakalaTextThirteen'
    },
    {
      name: 'depositManzilTextFourteen',
      value: 'depositVakalaTextFourteen'
    },
    {
      name: 'depositVakalaTextSixteen',
      value: 'depositVakalaTextSeventeen'
    },
    {
      name: 'depositVakalaTextEighteen',
      value: 'depositVakalaTextNineteen'
    },
    {
      name: 'depositVakalaTextTwenty',
      value: 'depositVakalaTextTwentyOne'
    },
    {
      name: 'depositVakalaTextTwentyTwo',
      value: 'depositVakalaTextTwentyThree'
    },
    {
      name: 'depositVakalaTextTwentyFour',
      value: 'depositVakalaTextTwentyThree'
    },
    {
      name: 'depositVakalaTextTwentySix',
      value: 'depositVakalaTextTwentySeventeen'
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
