import {Component, Input} from '@angular/core';
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-person-info',
  templateUrl: './person-info.component.html',
  styleUrls: ['./person-info.component.scss']
})
export class PersonInfoComponent {
  @Input() peopleData!:any;

  constructor(private translate: TranslateService) {
  }

  translateText(text: string): string{
    return this.translate.instant(text);
  }
}
