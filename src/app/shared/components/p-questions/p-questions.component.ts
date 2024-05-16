import {Component, Input} from '@angular/core';
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-p-questions',
  templateUrl: './p-questions.component.html',
  styleUrls: ['./p-questions.component.scss']
})
export class PQuestionsComponent {
  @Input() questions: any;

  constructor(private translate: TranslateService) {
  }

  translateText(text: string): string{
    return this.translate.instant(text);
  }
}
