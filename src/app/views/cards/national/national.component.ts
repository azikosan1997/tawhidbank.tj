import {Component} from '@angular/core';

@Component({
  selector: 'app-national',
  templateUrl: './national.component.html',
  styleUrls: ['./national.component.scss']
})
export class NationalComponent {
  requestType: string = 'National Card';
  appId: number = 3;
  prodId: number = 12;

  banner = [
    {
      title: 'personalNationalCardTextOne',
      subtitle: 'personalNationalCardTextTwo',
      image: './assets/images/pages/cards%20info/national-card-banner.png',
      buttonText: 'personalNationalCardTextThree',
      link: 'personal/cards/national#form',
      class: 'card'
    }
  ]
  conditionData = [
    {
      image: './assets/images/pages/cards%20info/cd1.png',
      title: 'personalNationalCardTextFour',
      subtitle: 'personalNationalCardTextFive'
    },
    {
      image: './assets/images/pages/deposit%20info/d2.png',
      title: 'personalNationalCardTextSix',
      subtitle: 'personalNationalCardTextSeven'
    },
    {
      image: './assets/images/pages/deposit%20info/d3.png',
      title: 'personalNationalCardTextEight',
      subtitle: 'personalNationalCardTextNine'
    },
  ]
  tariffTitle: string = 'personalNationalCardTextTen'
  tariffs = [
    {
      name: 'personalNationalCardTextEleven',
      value: 'personalNationalCardTextTwelve'
    },
    {
      name: 'personalNationalCardTextThirteen',
      value: 'personalNationalCardTextFourteen'
    },
    {
      name: 'personalNationalCardTextFifteen',
      value: 'personalNationalCardTextSixteen'
    },
    {
      name: 'personalNationalCardTextSeventeen',
      value: 'personalNationalCardTextEighteen'
    },
  ]
  documents: string[] = [
    'personalNationalCardTextNineteen',
    'personalDepositsFormTextOne',
  ]

  limits = [
    {
      name: 'personalNationalCardTextTwentyTwo',
      value: 'personalNationalCardTextTwentyThree'
    },
    {
      name: 'personalNationalCardTextTwentyFour',
      value: 'personalNationalCardTextTwentyFive'
    },
    {
      name: 'personalNationalCardTextTwentySix',
      value: 'personalNationalCardTextTwentySeven'
    },
    {
      name: 'personalNationalCardTextTwentyEight',
      value: 'personalNationalCardTextTwentyNine'
    },
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

  constructor() {
  }
}
