import { Component } from '@angular/core';
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-tawhidpay',
  templateUrl: './tawhidpay.component.html',
  styleUrls: ['./tawhidpay.component.scss']
})
export class TawhidPayComponent {
  constructor(private translate:TranslateService) {
  }

  translateText(key:string) {
    return this.translate.instant(key);
  }

  banner = [
    {
      title: 'tawhidpayPageTextOne',
      subtitle: 'tawhidpayPageTextTwo',
      image: './assets/images/pages/tawhid%20pay/banner.png',
      buttonText: 'tawhidpayPageTextThree',
      link: 'https://play.google.com/store/apps/details?id=tj.itservice.tawhidbank&hl=ru',
      description: 'tawhidpayPageTextFour',
      class: 'card'
    }
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
        {row: 'tawhidpayQuestionsTextEight'},
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
}
