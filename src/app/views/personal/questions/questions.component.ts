import { Component } from '@angular/core';
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss']
})
export class QuestionsComponent {

  tabsArray: string[] = ['faqPageTextFour', 'faqPageTextFive', 'faqPageTextSix', 'faqPageTextSeven', 'faqPageTextEight', 'faqPageTextNine',
    'faqPageTextTen','faqPageTextEleven', 'faqPageTextTwelve'];
  activatedTab: number = 0;
  banner = [
    {
      title: 'faqPageTextOne',
      subtitle: 'faqPageTextTwo',
      image: './assets/images/pages/faq/question.png',
      buttonText: 'faqPageTextThree',
      link: '/personal/questions#questions',
      class: 'card',
    }
  ]

  constructor(private translate:TranslateService)  {
  }

  translateText(key: string): string {
    return this.translate.instant(key);
  }

  setTab(index: number) {
    this.activatedTab = index;
  }

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
        {row: 'financingQuestionsTextFiftyFour предприниматель:'},
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

  depositQuestions: any = [
    {
      question: 'faqDepositQuestionsTextOne',
      answer: 'faqDepositQuestionsTextTwo',
      options: [
        {row: 'faqDepositQuestionsTextThree'},
        {row: 'faqDepositQuestionsTextFour'},
        {row: 'faqDepositQuestionsTextFive'},
      ]
    },
  ]

  accountsQuestions: any = [
    {
      question: 'faqAccountsQuestionsTextOne',
      answer: 'faqAccountsQuestionsTextTwo',
    },
  ]

  cardsQuestions: any = [
    {
      question: 'cardQuestionsTextOne',
      answer: 'cardQuestionsTextTwo',
    },
    {
      question: 'cardQuestionsTextThree',
      answer: 'cardQuestionsTextFour',
    },
    {
      question: 'cardQuestionsTextFive',
      answer: 'cardQuestionsTextSix',
    },
    {
      question: 'cardQuestionsTextSeven',
      answer: 'cardQuestionsTextEight',
    },
    {
      question: 'cardQuestionsTextNine',
      answer: 'cardQuestionsTextTen',
    },
    {
      question: 'cardQuestionsTextEleven',
      answer: 'cardQuestionsTextTwelve',
    },
    {
      question: 'cardQuestionsTextThirteen',
      answer: 'cardQuestionsTextFourteen',
    },
  ]
  transferQuestions: any = [
    {
      question: 'faqTransfersQuestionsTextOne',
      answer: 'faqTransfersQuestionsTextTwo',
    },
    {
      question: 'faqTransfersQuestionsTextThree',
      answer: 'faqTransfersQuestionsTextFour',
    },
    {
      question: 'faqTransfersQuestionsTextFive',
      answer: 'faqTransfersQuestionsTextSix',
    },
    {
      question: 'faqTransfersQuestionsTextSeven',
      answer: 'faqTransfersQuestionsTextEight',
    },
    {
      question: 'faqTransfersQuestionsTextNine',
      answer: 'faqTransfersQuestionsTextTen',
    },
    {
      question: 'faqTransfersQuestionsTextEleven',
      answer: 'faqTransfersQuestionsTextTwelve',
    },
    {
      question: 'faqTransfersQuestionsTextThirteen',
      answer: 'faqTransfersQuestionsTextFourteen;',
      options: [
        {row: 'faqTransfersQuestionsTextFifteen'},
        {row: 'faqTransfersQuestionsTextSixteen'},
        {row: 'faqTransfersQuestionsTextSeventeen'},
        {row: 'faqTransfersQuestionsTextEighteen'},
        {row: 'faqTransfersQuestionsTextNineteen'},
      ]
    },
    {
      question: 'faqTransfersQuestionsTextTwenty',
      answer: 'faqTransfersQuestionsTextTwentyOne',
    },
    {
      question: 'faqTransfersQuestionsTextTwentyTwo',
      answer: 'faqTransfersQuestionsTextTwentyThree',
    },
  ]

  tawhidpayQuestions: any = [
    {
      question: 'tawhidpayQuestionsTextOne',
      answer: 'tawhidpayQuestionsTextTwo',
    },
    {
      question: 'tawhidpayQuestionsTextThree',
      answer: 'tawhidpayQuestionsTextFour',
      options: [
        {row: 'tawhidpayQuestionsTextFive'},
        {row: 'tawhidpayQuestionsTextSix'},
        {row: 'tawhidpayQuestionsTextSeven'},
        {row: 'tawhidpayQuestionsTextEight;'},
        {row: 'tawhidpayQuestionsTextNine'},
        {row: 'tawhidpayQuestionsTextTen'},
        {row: 'tawhidpayQuestionsTextEleven'},
      ]
    },
    {
      question: 'tawhidpayQuestionsTextTwelve',
      answer: 'tawhidpayQuestionsTextThirteen',
    },
  ]

  currencyQuestions: any = [
    {
      question: 'faqExchangeQuestionsTextOne',
      answer: 'faqExchangeQuestionsTextTwo',
    },
    {
      question: 'faqExchangeQuestionsTextThree',
      answer: 'faqExchangeQuestionsTextFour',
    },
  ]

  tawhidbankQuestions: any = [
    {
      question: 'faqTawhidbankQuestionsTextOne',
      answer: 'faqTawhidbankQuestionsTextTwo'
    },
    {
      question: 'faqTawhidbankQuestionsTextThree',
      answer: 'faqTawhidbankQuestionsTextFour',
    },
    {
      question: 'faqTawhidbankQuestionsTextFive',
      answer: 'faqTawhidbankQuestionsTextSix',
    },
    {
      question: 'faqTawhidbankQuestionsTextSeven',
      answer: 'faqTawhidbankQuestionsTextEight',
    },
    {
      question: 'faqTawhidbankQuestionsTextNine',
      answer: 'faqTawhidbankQuestionsTextTen',
    },
    {
      question: 'faqTawhidbankQuestionsTextEleven',
      answer: 'faqTawhidbankQuestionsTextTwelve',
    },
  ]

  jobsQuestions: any = [
    {
      question: 'faqJobQuestionsTextOne',
      answer: 'faqJobQuestionsTextTwo'
    },
    {
      question: 'faqJobQuestionsTextThree',
      answer: 'faqJobQuestionsTextFour',
      options: [
        {row: 'faqJobQuestionsTextFive'},
        {row: 'faqJobQuestionsTextSix'},
        {row: 'faqJobQuestionsTextSeven'},
      ]
    },
  ]
}
