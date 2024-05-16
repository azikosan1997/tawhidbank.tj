import { Component } from '@angular/core';

@Component({
  selector: 'app-murabaha-house',
  templateUrl: './murabaha-house.component.html',
  styleUrls: ['./murabaha-house.component.scss']
})
export class MurabahaHouseComponent {
  tjsRate: number = 23;
  usdRate: number = 12;
  banner = [
    {
      title: 'murabahaHousingTextOne',
      subtitle: 'murabahaHousingTextTwo',
      image: './assets/images/pages/financing%20info/banner-house.png',
      buttonText: 'murabahaHousingTextThree',
      link: '/personal/financing/murabaha-house#app-financing-form',
    }
  ]
  conditionData = [
    {
      image: './assets/images/pages/financing%20info/ft2.png',
      title: 'murabahaHousingTextFour',
      subtitle: 'murabahaHousingTextFive'
    },
    {
      image: './assets/images/pages/deposit%20info/d2.png',
      title: 'murabahaHousingTextSix',
      subtitle: 'murabahaHousingTextSeven'
    },
    {
      image: './assets/images/pages/deposit%20info/d3.png',
      title: 'murabahaHousingTextEight',
      subtitle: 'murabahaHousingTextNine'
    },
  ]
  tariffTitle: string = 'murabahaHousingTextThirtyFour'
  tariffs = [
    {
      name: 'murabahaHousingTextTen',
      value: 'murabahaHousingTextTwelve'
    },
    {
      name: 'murabahaHousingTextThirteen',
      value: 'murabahaHousingTextFourteen'
    },
    {
      name: 'murabahaHousingTextFifteen',
      value: 'murabahaHousingTextSixteen'
    },
    {
      name: 'murabahaHousingTextSeventeen',
      value: 'murabahaHousingTextEighteen'
    },
    {
      name: 'murabahaHousingTextNineteen',
      value: 'murabahaHousingTextTwenty'
    },
    {
      name: 'murabahaHousingTextTwentyOne',
      value: 'murabahaHousingTextTwentyTwo'
    },
    {
      name: 'murabahaHousingTextTwentyThree',
      value: 'murabahaHousingTextTwentyFour'
    },
    {
      name: 'murabahaHousingTextTwentyFive',
      value: 'murabahaHousingTextTwentySix'
    },
    {
      name: 'murabahaHousingTextTwentySeven',
      value: 'murabahaHousingTextTwentyEight'
    },
  ]
  documents: string[] = [
    'murabahaHousingTextTwentyNine',
    'murabahaHousingTextThirty',
  ]
  limits: string[] = [
    'murabahaHousingTextThirtyOne',
    'murabahaHousingTextThirtyTwo',
    'murabahaHousingTextThirtyThree'
  ]

  loanTitle: string = 'murabahaHousingTextThirtyFour';
  bid: string = '23%';
  docPeriod: string = 'murabahaHousingTextThirtyFive';

}
