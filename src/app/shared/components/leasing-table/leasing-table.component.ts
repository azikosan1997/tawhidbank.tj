import {Component, Input} from '@angular/core';
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-leasing-table',
  templateUrl: './leasing-table.component.html',
  styleUrls: ['./leasing-table.component.scss']
})
export class LeasingTableComponent {
  @Input() tariffs!: any;
  @Input() documents!: any;
  @Input() DocsGroupOne!: any;
  @Input() DocsGroupTwo!: any;
  @Input() DocsGroupThree!: any;

  tabsArray: string[] = ['leasingPageTextFour', 'financingCalculatorComponentTextSixteen'];
  activatedTab: number = 0;

  constructor(private translate: TranslateService){
  }

  translateText(key: string): string {
    return this.translate.instant(key);
  }

  setTab(index: number) {
    this.activatedTab = index;
  }
}
