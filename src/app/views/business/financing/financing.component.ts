import { Component } from '@angular/core';

@Component({
  selector: 'app-financing',
  templateUrl: './financing.component.html',
  styleUrls: ['./financing.component.scss']
})
export class FinancingComponent {
  appId: number = 1;
  productId: number = 6;
  requestType: string = 'Корпоративная Мурабаха';

  conditionData = [
    {
      image: './assets/images/pages/business%20financing/r1.png',
      title: 'businessFinancingPageTextTwelve',
      subtitle: 'businessFinancingPageTextThirteen'
    },
    {
      image: './assets/images/pages/business%20financing/r2.png',
      title: 'businessFinancingPageTextFourteen',
      subtitle: 'businessFinancingPageTextFifteen'
    },
    {
      image: './assets/images/pages/business%20financing/r3.png',
      title: 'businessFinancingPageTextSixteen',
      subtitle: 'businessFinancingPageTextSeventeen'
    },
  ]

  banner = [
    {
      title: 'businessFinancingPageTextOne',
      subtitle: 'businessFinancingPageTextTwo',
      image: './assets/images/pages/business%20financing/banner.png',
      buttonText: 'businessFinancingPageTextThree',
      link: 'business/financing#request',
      class: 'card'
    }
  ]
}
