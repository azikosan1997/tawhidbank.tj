import { Component } from '@angular/core';

@Component({
  selector: 'app-murabaha-business',
  templateUrl: './murabaha-business.component.html',
  styleUrls: ['./murabaha-business.component.scss']
})
export class MurabahaBusinessComponent {
  tjsRate: number = 23;
  usdRate: number = 13
  banner = [
    {
      title: 'murabahaBusinessTextOne',
      subtitle: 'murabahaBusinessTextTwo',
      image: './assets/images/pages/financing%20info/banner-business.png',
      buttonText: 'murabahaBusinessTextThree',
      link: '/personal/financing/murabaha-business#app-financing-form',
    }
  ]
  conditionData = [
    {
      image: './assets/images/pages/financing%20info/ft2.png',
      title: 'murabahaBusinessTextFour',
      subtitle: 'murabahaBusinessTextFive'
    },
    {
      image: './assets/images/pages/deposit%20info/d2.png',
      title: 'murabahaBusinessTextSix',
      subtitle: 'murabahaBusinessTextSeven'
    },
    {
      image: './assets/images/pages/deposit%20info/d3.png',
      title: 'murabahaBusinessTextEight',
      subtitle: 'murabahaBusinessTextNine'
    },
  ]
  tariffTitle: string = 'Мурабаха Business'
  tariffs = [
    {
      name: 'murabahaBusinessTextTen',
      value: 'murabahaBusinessTextTwelve'
    },
    {
      name: 'murabahaBusinessTextThirteen',
      value: 'murabahaBusinessTextFourteen'
    },
    {
      name: 'murabahaBusinessTextSeventeen',
      value: 'murabahaBusinessTextEighteen'
    },
    {
      name: 'murabahaBusinessTextNineteen',
      value: 'murabahaBusinessTextTwenty'
    },
    {
      name: 'murabahaBusinessTextTwentyOne',
      value: 'murabahaBusinessTextTwentyTwo'
    },
    {
      name: 'murabahaBusinessTextTwentyThree',
      value: 'murabahaBusinessTextTwentyFour'
    },
    {
      name: 'murabahaBusinessTextTwentyFive',
      value: 'murabahaBusinessTextTwentySix'
    },
    {
      name: 'murabahaBusinessTextTwentySeven',
      value: 'murabahaBusinessTextTwentyEight'
    },
  ]
  documents: string[] = [
    'murabahaBusinessTextTwentyNine',
    'murabahaBusinessTextThirty',
    'murabahaBusinessTextThirtyOne',
  ]

  limits: string[] = [
    'murabahaBusinessTextThirtyTwo',
    'murabahaBusinessTextThirtyThree',
  ]

  loanTitle: string = 'murabahaBusinessTextThirtyFour';
  docPeriod: string = 'murabahaBusinessTextThirtyFive';

}
