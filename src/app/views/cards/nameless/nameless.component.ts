import { Component } from '@angular/core';

@Component({
  selector: 'app-nameless',
  templateUrl: './nameless.component.html',
  styleUrls: ['./nameless.component.scss']
})
export class NamelessComponent {
  requestType: string = 'Nameless Card';
  appId: number = 3;
  prodId: number = 11;

  banner = [
    {
      title: 'personalNamelessCardTextOne',
      subtitle: 'personalNamelessCardTextTwo',
      image: './assets/images/pages/cards%20info/nameless-card-banner.png',
      buttonText: 'personalNamelessCardTextThree',
      link: 'personal/cards/nameless#form',
      class: 'card'
    }
  ]
  conditionData = [
    {
      image: './assets/images/pages/cards%20info/cd1.png',
      title: 'personalNamelessCardTextFour',
      subtitle: 'personalNamelessCardTextFive'
    },
    {
      image: './assets/images/pages/deposit%20info/d2.png',
      title: 'personalNamelessCardTextSix',
      subtitle: 'personalNamelessCardTextSeven'
    },
    {
      image: './assets/images/pages/deposit%20info/d3.png',
      title: 'personalNamelessCardTextEight',
      subtitle: 'personalNamelessCardTextNine'
    },
  ]
  tariffTitle: string = 'personalNamelessCardTextTen'
  tariffs = [
    {
      name: 'personalNamelessCardTextEleven',
      value: 'personalNamelessCardTextTwelve'
    },
    {
      name: 'personalNamelessCardTextThirteen',
      value: 'personalNamelessCardTextFourteen'
    },
    {
      name: 'personalNamelessCardTextFifteen',
      value: 'personalNamelessCardTextSixteen'
    },
    {
      name: 'personalNamelessCardTextSeventeen',
      value: 'personalNamelessCardTextEighteen'
    },
  ]
  documents: string[] = [
    'personalNationalCardTextNineteen',
    'personalDepositsFormTextOne',
  ]

  limits = [
    {
      name: 'personalNamelessCardTextTwentyTwo',
      value: 'personalNamelessCardTextTwentyThree'
    },
    {
      name: 'personalNamelessCardTextTwentyFour',
      value: 'personalNamelessCardTextTwentyFive'
    },
    {
      name: 'personalNamelessCardTextTwentySix',
      value: 'personalNamelessCardTextTwentySeven'
    },
    {
      name: 'personalNamelessCardTextTwentyEight',
      value: 'personalNamelessCardTextTwentyNine'
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
