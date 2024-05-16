import {Component, ElementRef, TemplateRef, ViewChild} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-deposit',
  templateUrl: './deposit.component.html',
  styleUrls: ['./deposit.component.scss']
})
export class DepositComponent {
  @ViewChild('depositPopup') depositPopup!: TemplateRef<ElementRef>;
  tabsArray: string[] = ['Сравнить вклады', 'Тарифы', 'Условия вклада'];
  activatedTab: number = 0;
  constructor(public dialog: MatDialog,
              private translate: TranslateService, ) {

  }

  translateText(key: string): string {
    return this.translate.instant(key);
  }

  setTab(index: number) {
    this.activatedTab = index;
  }

  openPopup() {
    this.dialog.open(this.depositPopup,{
      width: '60vw',
    });
  }

  closePopup() {
    this.dialog.closeAll();
  }

  depositsInfo = [
    {
      image: './assets/images/pages/deposits/d1.png',
      imageAlt: 'Saving',
      depositName: 'personalDepositsTextOne',
      depositTextFirst: 'personalDepositsTextTwo',
      depositSubFirst: 'personalDepositsTextThree',
      depositTextSecond: 'personalDepositsTextFour',
      depositSubSecond: 'personalDepositsTextFive',
      depositTextThird: 'personalDepositsTextSix',
      depositSubThird: 'personalDepositsTexSeven',
      link: '/personal/deposit/mudaraba'
    },
    {
      image: './assets/images/pages/deposits/d2.png',
      imageAlt: 'House',
      depositName: 'personalDepositsTextTen',
      depositTextFirst: 'personalDepositsTextEleven',
      depositSubFirst: 'personalDepositsTextTwelve',
      depositTextSecond: 'personalDepositsTextThirteen',
      depositSubSecond: 'personalDepositsTextFourteen',
      depositTextThird: 'personalDepositsTextFifteen',
      depositSubThird: 'personalDepositsTextSixteen',
      link: '/personal/deposit/manzil'
    },
    {
      image: './assets/images/pages/deposits/d3.png',
      imageAlt: 'Time',
      depositName: 'personalDepositsTextSeventeen',
      depositTextFirst: 'personalDepositsTextEighteen',
      depositSubFirst: 'personalDepositsTextTwenty',
      depositTextSecond: 'personalDepositsTextTwentyOne',
      depositSubSecond: 'personalDepositsTextTwentyTwo',
      depositTextThird: 'personalDepositsTextTwentyThree',
      depositSubThird: 'personalDepositsTextTwentyFour',
      link: '/personal/deposit/vakala'
    },
  ]
}
