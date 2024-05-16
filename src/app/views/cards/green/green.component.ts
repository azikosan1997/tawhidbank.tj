import {Component} from '@angular/core';
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-green',
  templateUrl: './green.component.html',
  styleUrls: ['./green.component.scss']
})
export class GreenComponent {
  requestType: string = 'Green Card'
  appId: number = 3;
  prodId: number = 13;

  constructor(private translate: TranslateService) {
  }

  translateText(key: string): string {
    return this.translate.instant(key);
  }

  banner = [
    {
      title: 'personalGreenCardTextOne',
      subtitle: 'personalGreenCardTextTwo',
      image: './assets/images/pages/cards%20info/green-card-banner.png',
      buttonText: 'personalGreenCardTextThree',
      link: 'personal/cards/green#form',
      class: 'card'
    }
  ]

  conditionData = [
    {
      image: './assets/images/pages/cards%20info/cd1.png',
      title: 'personalGreenCardTextFour',
      subtitle: 'personalGreenCardTextFive'
    },
    {
      image: './assets/images/pages/deposit%20info/d2.png',
      title: 'personalGreenCardTextSix',
      subtitle: 'personalGreenCardTextSeven'
    },
    {
      image: './assets/images/pages/deposit%20info/d3.png',
      title: 'personalGreenCardTextEight',
      subtitle: 'personalGreenCardTextNine'
    },
  ]
  tariffTitle: string = 'personalGreenCardTextTen'
  tariffs = [
    {
      name: 'personalGreenCardTextEleven',
      value: 'personalGreenCardTextTwelve'
    },
    {
      name: 'personalGreenCardTextThirteen',
      value: 'personalGreenCardTextFourteen'
    },
    {
      name: 'personalGreenCardTextFifteen',
      value: 'personalGreenCardTextSixteen'
    },
    {
      name: 'personalGreenCardTextSeventeen',
      value: 'personalGreenCardTextEighteen'
    },
    {
      name: 'personalGreenCardTextNineteen',
      value: 'personalGreenCardTextTwenty'
    },
    {
      name: 'personalGreenCardTextTwentyOne',
      value: 'personalGreenCardTextTwentyTwo'
    },
    {
      name: 'personalGreenCardTextTwentyThree',
      value: 'personalGreenCardTextTwentyFour'
    },
    {
      name: 'personalGreenCardTextTwentyFive',
      value: 'personalGreenCardTextTwentySix'
    },
  ]
  documents: string[] = [
    'financingCalculatorComponentTextEleven',
    'personalDepositsFormTextOne',
    'murabahaHousingTextThirtyFive',
  ]

  questions = [
    {
      question: 'cardQuestionsTextOne',
      answer: 'cardQuestionsTextTwo'
    },
    {
      question: 'cardQuestionsTextThree',
      answer: 'cardQuestionsTextFour'
    },
    {
      question: 'cardQuestionsTextFive',
      answer: 'cardQuestionsTextSix'
    },
    {
      question: 'cardQuestionsTextSeven',
      answer: 'cardQuestionsTextEight'
    },
    {
      question: 'cardQuestionsTextNine',
      answer: 'cardQuestionsTextTen'
    },
    {
      question: 'cardQuestionsTextEleven',
      answer: 'cardQuestionsTextTwelve'
    },
    {
      question: 'cardQuestionsTextThirteen',
      answer: 'cardQuestionsTextFourteen'
    },
  ]
}
