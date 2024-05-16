import { Component } from '@angular/core';
import {TranslateService} from "@ngx-translate/core";


@Component({
  selector: 'app-financing',
  templateUrl: './financing.component.html',
  styleUrls: ['./financing.component.scss'],
})

export class FinancingComponent {
  appId: number = 1;
  productId: number = 1;
  constructor(private translate: TranslateService) {
  }

  translateTitle(key: string): string {
    return this.translate.instant(key);
  }

  financingInfo = [
    {
      image: './assets/images/pages/financing/f1.png',
      financingSubText: 'personalFinancingCardOneTextTwo',
      imageAlt: 'Cart',
      financingName: 'personalFinancingCardOneTextOne',
      financingTextFirst: 'personalFinancingCardOneTextThree',
      financingSubFirst: 'personalFinancingCardOneTextFour',
      financingTextSecond: 'personalFinancingCardOneTextFive',
      financingSubSecond: 'personalFinancingCardOneTextSix',
      financingTextThird: 'personalFinancingCardOneTextSeven',
      financingSubThird: 'personalFinancingCardOneTextEight',
      financingLink: 'personalFinancingCardOneTextNine',
      financingButton: 'personalFinancingCardOneTextTen',
      link: '/personal/financing/murabaha-consumption'
    },
    {
      image: './assets/images/pages/financing/f2.png',
      financingSubText: 'personalFinancingCardTwoTextTwo',
      imageAlt: 'House',
      financingName: 'personalFinancingCardTwoTextOne',
      financingTextFirst: 'personalFinancingCardTwoTextThree',
      financingSubFirst: 'personalFinancingCardTwoTextFour',
      financingTextSecond: 'personalFinancingCardTwoTextFive',
      financingSubSecond: 'personalFinancingCardTwoTextSix',
      financingTextThird: 'personalFinancingCardTwoTextSeven',
      financingSubThird: 'personalFinancingCardTwoTextEight',
      financingLink: 'personalFinancingCardTwoTextNine',
      financingButton: 'personalFinancingCardTwoTextTen',
      link: '/personal/financing/murabaha-house'
    },
    {
      image: './assets/images/pages/financing/f3.png',
      financingSubText: 'personalFinancingCardThreeTextTwo',
      imageAlt: 'Time',
      financingName: 'personalFinancingCardThreeTextOne',
      financingTextFirst: 'personalFinancingCardThreeTextThree',
      financingSubFirst: 'personalFinancingCardThreeTextFour',
      financingTextSecond: 'personalFinancingCardThreeTextFive',
      financingSubSecond: 'personalFinancingCardThreeTextSix',
      financingTextThird: 'personalFinancingCardThreeTextSeven',
      financingSubThird: 'personalFinancingCardThreeTextEight',
      financingLink: 'personalFinancingCardThreeTextNine',
      financingButton: 'personalFinancingCardThreeTextTen',
      link: '/personal/financing/murabaha-business'
    },
    {
      image: './assets/images/pages/financing/f4.png',
      financingSubText: 'personalFinancingCardFourTextTwo',
      imageAlt: 'Car',
      financingName: 'personalFinancingCardFourTextOne',
      financingTextFirst: 'personalFinancingCardFourTextThree',
      financingSubFirst: 'personalFinancingCardFourTextFour',
      financingTextSecond: 'personalFinancingCardFourTextFive',
      financingSubSecond: 'personalFinancingCardFourTextSix',
      financingTextThird: 'personalFinancingCardFourTextSeven',
      financingSubThird: 'personalFinancingCardFourTextEight',
      financingLink: 'personalFinancingCardFourTextNine',
      financingButton: 'personalFinancingCardFourTextTen',
      link: '/personal/auto-financing'
    },
    {
      image: './assets/images/pages/financing/f6.png',
      financingSubText: 'personalFinancingCardFiveTextTwo',
      imageAlt: 'Time',
      financingName: 'personalFinancingCardFiveTextOne',
      financingTextFirst: 'personalFinancingCardFiveTextThree',
      financingSubFirst: 'personalFinancingCardFiveTextFour',
      financingTextSecond: 'personalFinancingCardFiveTextFive',
      financingSubSecond: 'personalFinancingCardFiveTextSix',
      financingTextThird: 'personalFinancingCardFiveTextSeven',
      financingSubThird: 'personalFinancingCardFiveTextEight',
      financingLink: 'personalFinancingCardFiveTextNine',
      financingButton: 'personalFinancingCardFiveTextTen',
      link: '/personal/financing/murabaha-agriculture'
    }
  ]
  financingQuestions: any = [
    {
      question: 'financingQuestionsTextOne',
      answer: 'financingQuestionsTextTwo'
    },
    {
      question: 'financingQuestionsTextThree',
      answer: 'financingQuestionsTextFour',
      options: [
        {row: 'financingQuestionsTextFive'},
        {row: 'financingQuestionsTextSix'},
        {row: 'financingQuestionsTextSeven'},
        {row: 'financingQuestionsTextEight'},
        {row: 'financingQuestionsTextNine'},
        {row: 'financingQuestionsTextTen'},
        {row: 'financingQuestionsTextEleven'},
        {row: 'financingQuestionsTextTwelve'},
      ]
    },
    {
      question: 'financingQuestionsTextThirteen',
      answer: 'financingQuestionsTextFourteen',
      options: [
        {row: 'financingQuestionsTextFifteen'},
        {row: 'financingQuestionsTextSixteen'},
        {row: 'financingQuestionsTextSeventeen'},
        {row: 'financingQuestionsTextEighteen'},
        {row: 'financingQuestionsTextNineteen'},
        {row: 'financingQuestionsTextTwenty'},
        {row: 'financingQuestionsTextTwentyOne'},
      ]
    },
    {
      question: 'financingQuestionsTextTwentyTwo',
      answer: 'financingQuestionsTextTwentyThree',
    },
    {
      question: 'financingQuestionsTextTwentyFour',
      options: [
        {row: 'financingQuestionsTextTwentyFive'},
        {row: 'financingQuestionsTextTwentySix'},
        {row: 'financingQuestionsTextTwentySeven'},
        {row: 'financingQuestionsTextTwentyEight'},
      ]
    },
    {
      question: 'financingQuestionsTextTwentyNine',
      answer: 'financingQuestionsTextThirty',
    },
    {
      question: 'financingQuestionsTextThirtyOne',
      answer: 'financingQuestionsTextThirtyTwo',
    },
    {
      question: 'financingQuestionsTextThirtyThree',
      options: [
        {row: 'financingQuestionsTextThirtyFour'},
        {row: 'financingQuestionsTextThirtyFive'},
      ]
    },
    {
      question: 'financingQuestionsTextThirtySix',
      answer: 'financingQuestionsTextThirtySeven',
    },
    {
      question: 'financingQuestionsTextThirtyEight',
      answer: 'financingQuestionsTextThirtyNine',
      options: [
        {row: 'financingQuestionsTextForty'},
        {row: 'financingQuestionsTextFortyOne'},
        {row: 'financingQuestionsTextFortyTwo'},
        {row: 'financingQuestionsTextFortyThree'},
        {row: 'financingQuestionsTextFortyFour'},
        {row: 'financingQuestionsTextFortyFive'},
      ]
    },
    {
      question: 'financingQuestionsTextFortySix',
      answer: 'financingQuestionsTextFortySeven',
    },
    {
      question: 'financingQuestionsTextFortyEight',
      options: [
        {row: 'financingQuestionsTextFortyNine'},
        {row: 'financingQuestionsTextFifty'},
        {row: 'financingQuestionsTextFiftyOne'},
        {row: 'financingQuestionsTextFiftyTwo'},
        {row: 'financingQuestionsTextFiftyThree'},
        {row: 'financingQuestionsTextFiftyFour'},
        {row: 'financingQuestionsTextFiftyFive'},
        {row: 'financingQuestionsTextFiftySix'},
        {row: 'financingQuestionsTextFiftySeven'},
        {row: 'financingQuestionsTextFiftyEight'},
        {row: 'financingQuestionsTextFiftyNine'},
      ]
    },
    {
      question: 'financingQuestionsTextSixty',
      answer: 'financingQuestionsTextSixtyOne',
    },
    {
      question: 'financingQuestionsTextSixtyTwo',
      answer: 'financingQuestionsTextSixtyThree',
    },
    {
      question: 'financingQuestionsTextSixtyFour',
      answer: 'financingQuestionsTextSixtyFive',
    },
  ]
}
