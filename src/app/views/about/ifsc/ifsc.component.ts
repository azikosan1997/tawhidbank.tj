import {Component} from '@angular/core';
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-ifsc',
  templateUrl: './ifsc.component.html',
  styleUrls: ['./ifsc.component.scss']
})
export class IfscComponent {
  ifscParagraphs = [
    'aboutIfcsTextOne',
    'aboutIfcsTextTwo',
    'aboutIfcsTextThree',
    'aboutIfcsTextFour',
    'aboutIfcsTextFive',
    'aboutIfcsTextSix',
    'aboutIfcsTextSeven',
    'aboutIfcsTextEight',
    'aboutIfcsTextNine',
    'aboutIfcsTextTen',
    'aboutIfcsTextEleven',
    'aboutIfcsTextTwelve',
    'aboutIfcsTextThirteen',
    'aboutIfcsTextFourteen',
    'aboutIfcsTextFifteen',
    'aboutIfcsTextSixteen',
    'aboutIfcsTextSeventeen',
    'aboutIfcsTextEighteen',
    'aboutIfcsTextNineteen'
  ]

  constructor(private translate: TranslateService) {
  }

  translateText(text: string): string {
    return this.translate.instant(text);
  }
}
