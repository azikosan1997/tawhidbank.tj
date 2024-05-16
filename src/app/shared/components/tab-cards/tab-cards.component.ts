import {Component, Input} from '@angular/core';
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-tab-cards',
  templateUrl: './tab-cards.component.html',
  styleUrls: ['../tab-panel/tab-panel.component.scss']
})
export class TabCardsComponent {
  @Input() tariffTitle!: string;
  @Input() tariffs!: any;
  @Input() documents!: any;
  @Input() limits!: any;

  tabsArray: string[] = ['financingCalculatorComponentTextFourteen', 'financingCalculatorComponentTextFifteen', 'financingCalculatorComponentTextSixteen'];
  activatedTab: number = 0;

  constructor(private translate: TranslateService) {
  }

  translateText(key: string): string {
    return this.translate.instant(key);
  }

  setTab(index: number) {
    this.activatedTab = index;
  }
}
