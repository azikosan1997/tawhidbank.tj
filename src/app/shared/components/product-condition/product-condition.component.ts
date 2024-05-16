import {Component, Input} from '@angular/core';
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'product-condition',
  templateUrl: './product-condition.component.html',
  styleUrls: ['./product-condition.component.scss']
})
export class ProductConditionComponent {
    @Input() conditionData!:any;

  constructor(private translate: TranslateService){
  }

  translateText(key: string): string {
    return this.translate.instant(key);
  }
}
