import {Component, Input} from '@angular/core';
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'how-to-open',
  templateUrl: './how-to-open.component.html',
  styleUrls: ['./how-to-open.component.scss']
})
export class HowToOpenComponent {
    @Input() productName!: string;

    constructor(private translate: TranslateService) {
    }

    translateText(key: string): string {
      return this.translate.instant(key);
    }
}
