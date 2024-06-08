import {Component} from '@angular/core';
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-leasing',
  templateUrl: './leasing.component.html',
  styleUrls: ['./leasing.component.scss']
})
export class LeasingComponent {
  tjsRate: number = 16;
  usdRate: number = 10;
  loanTitle: string = 'leasingCalculatorComponentTextEleven';
  docPeriod: string = 'murabahaAgricultureTextThirtyFive';

  banner = [
    {
      title: 'leasingPageTextOne',
      subtitle: 'leasingPageTextTwo',
      image: './assets/images/pages/leasing/leasing-banner.png',
      buttonText: 'personalMainCalculateMortgageTextSeven',
      link: '/personal/leasing#form',
      class: 'card',
    }
  ]

  tariffs = [
    {
      name: 'leasingPageTextEight',
      value: 'leasingPageTextNine'
    },
    {
      name: 'leasingPageTextTen',
      value: 'leasingPageTextEleven'
    },
    {
      name: 'leasingPageTextTwelve',
      value: 'leasingPageTextThirteen'
    },
    {
      name: 'leasingPageTextFourteen',
      value: 'leasingPageTextFifteen'
    },
    {
      name: 'leasingPageTextSixteen',
      value: 'leasingPageTextSeventeen'
    },
    {
      name: 'leasingPageTextEighteen',
      value: 'leasingPageTextNineteen'
    },
  ]


  DocsGroupOne: string[] = [
    "leasingPageTextTwenty",
    "leasingPageTextTwentyOne",
    "leasingPageTextTwentyTwo",
    "leasingPageTextTwentyThree",
    "leasingPageTextTwentyFour",
    "leasingPageTextTwentyFive",
    "leasingPageTextTwentySix",
    "leasingPageTextTwentySeven",
    "leasingPageTextTwentyEight",
  ]

  DocsGroupTwo: string[] = [
    "leasingPageTextTwentyNine",
    "leasingPageTextThirty",
    "leasingPageTextThirtyOne",
    "leasingPageTextThirtyTwo",
    "leasingPageTextThirtyThree",
    "leasingPageTextThirtyFour",
    "leasingPageTextThirtyFive",
    "leasingPageTextThirtySix",
    "leasingPageTextThirtySeven",
    "leasingPageTextThirtyEight",
  ]

  DocsGroupThree: string[] = [
    "leasingPageTextThirtyNine",
    "leasingPageTextForty",
    "leasingPageTextFortyOne",
    "leasingPageTextFortyTwo",
    "leasingPageTextFortyThree",
    "leasingPageTextFortyFour",
    "leasingPageTextFortyFive",
    "leasingPageTextFortySix",
    "leasingPageTextFortySeven",
  ]

  constructor(private translate: TranslateService) {
  }

  translateText(key: string): string {
    return this.translate.instant(key);
  }

  financingQuestions: any = [
    {
      question: 'leasingPageTextFortyEight',
      answer: 'leasingPageTextFortyNine'
    },
    {
      question: 'leasingPageTextFifty',
      answer: 'leasingPageTextFiftyOne',
    },
    {
      question: 'leasingPageTextFiftyTwo',
      answer: 'leasingPageTextFiftyThree.',
    },
    {
      question: 'leasingPageTextFiftyFour',
      answer: 'leasingPageTextFiftyFive',
    },
    {
      question: 'leasingPageTextFiftySix',
      answer: 'leasingPageTextFiftySeven',
    }
  ]
}
