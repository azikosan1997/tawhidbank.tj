import { Component } from '@angular/core';

@Component({
  selector: 'app-agriculture',
  templateUrl: './agriculture.component.html',
  styleUrls: ['./agriculture.component.scss']
})
export class AgricultureComponent {
  tjsRate: number = 10;
  usdRate: number = 4;
  banner = [
    {
      title: 'murabahaAgricultureTextOne',
      subtitle: 'murabahaAgricultureTextTwo',
      image: './assets/images/pages/financing%20info/banner-agriculture.png',
      buttonText: 'murabahaAgricultureTextThree',
      link: '/personal/financing/murabaha-agriculture#app-financing-form',
    }
  ]
  conditionData = [
    {
      image: './assets/images/pages/financing%20info/ft4.png',
      title: 'murabahaAgricultureTextFour',
      subtitle: 'murabahaAgricultureTextFive'
    },
    {
      image: './assets/images/pages/deposit%20info/d3.png',
      title: 'murabahaAgricultureTextSix',
      subtitle: 'murabahaAgricultureTextSeven'
    },
    {
      image: './assets/images/pages/financing%20info/ft5.png',
      title: 'murabahaAgricultureTextEight',
      subtitle: 'murabahaAgricultureTextNine'
    },
  ]
  tariffTitle: string = 'Мурабаха для сельского хозяйства'
  tariffs = [
    {
      name: 'murabahaAgricultureTextTen',
      value: 'murabahaAgricultureTextTwelve'
    },
    {
      name: 'murabahaAgricultureTextThirteen',
      value: 'murabahaAgricultureTextFourteen'
    },
    {
      name: 'murabahaAgricultureTextSeventeen',
      value: 'murabahaAgricultureTextEighteen'
    },
    {
      name: 'murabahaAgricultureTextNineteen',
      value: 'murabahaAgricultureTextTwenty'
    },
    {
      name: 'murabahaAgricultureTextTwentyOne',
      value: 'murabahaAgricultureTextTwentyTwo'
    },
    {
      name: 'murabahaAgricultureTextTwentyThree',
      value: 'murabahaAgricultureTextTwentyFour'
    },
    {
      name: 'murabahaAgricultureTextTwentyFive',
      value: 'murabahaAgricultureTextTwentySix'
    },
    {
      name: 'murabahaAgricultureTextTwentySeven',
      value: 'murabahaAgricultureTextTwentyEight'
    },
  ]
  documents: string[] = [
    'murabahaAgricultureTextTwentyNine',
    'murabahaAgricultureTextThirty',
    'murabahaAgricultureTextThirtyOne',
  ]

  limits: string[] = [
    'murabahaAgricultureTextThirtyTwo',
    'murabahaAgricultureTextThirtyThree',
  ]

  loanTitle: string = 'murabahaAgricultureTextThirtyFour';
  docPeriod: string = 'murabahaAgricultureTextThirtyFive';

}
