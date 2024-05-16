import {Component} from '@angular/core';
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-deposits',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.scss']
})
export class AccountsComponent {
  appId: number = 5;
  productId: number = 14;

  tabsArray: string[] = ['businessAccountsPageTextOne', 'businessAccountsPageTextTwo',
    'businessAccountsPageTextThree', 'businessAccountsPageTextFour'];
  activatedTab: number = 0;
  requestType: string = 'businessAccountsPageTextFive'

  banner = [
    {
      title: 'businessAccountsPageTextFive',
      subtitle: 'businessAccountsPageTextSix',
      image: './assets/images/pages/business%20deposit/banner.png',
      buttonText: 'businessAccountsPageTextSeven',
      link: 'business/accounting#request',
      class: 'card'
    }
  ]

  constructor(private translateService: TranslateService) {
  }

  translateText(key: string): string {
    return this.translateService.instant(key);
  }

  setTab(index: number) {
    this.activatedTab = index;
  }

}
