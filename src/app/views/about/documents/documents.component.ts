import {Component} from '@angular/core';
import {Router} from "@angular/router";
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-documents',
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.scss']
})
export class DocumentsComponent {

  activeTab: string = 'aboutDocumentsTextOne';

  onTabClick(tab: string) {
    this.activeTab = tab;
  }

  constructor(private translate: TranslateService) {

  }

  translateText(text: string): string {
    return this.translate.instant(text);
  }

  tabLinkName = [
    {
      name: 'aboutDocumentsTextOne',
    },
    {
      name: 'aboutDocumentsTextTwo',
    },
    {
      name: 'aboutDocumentsTextThree',
    },
    {
      name: 'aboutDocumentsTextFour',
    },
    {
      name: 'aboutDocumentsTextFive',
    },

    {
      name: 'aboutDocumentsTextSix',
    },
    {
      name: 'aboutDocumentsTextSeven',
    },
    {
      name: 'aboutDocumentsTextEight',
    },
    {
      name: 'aboutDocumentsTextNine',
    },
    {
      name: 'aboutDocumentsTextTen',
    },
  ]

  aboutDocs = [
    {
      title: 'aboutDocumentsTextEleven',
      path: './assets/documents/About/Лицензия для проведения банковских операций.pdf'
    },
    {
      title: 'aboutDocumentsTextTwelve',
      path: './assets/documents/About/Правила проведения банковских операций ОАО Тавхидбанк.pdf'
    },
    {
      title: 'aboutDocumentsTextThirteen',
      path: './assets/documents/About/Реестр связанных лиц.pdf'
    },
    {
      title: 'aboutDocumentsTextFourteen',
      path: './assets/documents/About/Устав Тавхидбанк.pdf'
    },
  ]

  financialReportsDocs = [
    {
      title: 'aboutDocumentsTextFifteen',
      path: './assets/documents/financial-reports/Финансовая отчетность ТВБ 31.01.2024.pdf'
    },
    {
      title: 'aboutDocumentsTextSixteen',
      path: './assets/documents/financial-reports/Финансовая отчетность ТВБ 29.02.2024.pdf'
    },
    {
      title: 'aboutDocumentsTextSeventeen',
      path: './assets/documents/financial-reports/Ҳисоботи молиявии ТВБ   31.03.2024.pdf'
    },
    {
      title: 'aboutDocumentsTextEighteen',
      path: './assets/documents/financial-reports/TWB report 31.03.2024.pdf'
    },
    {
      title: 'aboutDocumentsTextNineteen',
      path: './assets/documents/financial-reports/Финансовая отчетность ТВБ 31.03.2024.pdf'
    },
    {
      title: 'aboutDocumentsTextTwenty',
      path: './assets/documents/financial-reports/Финансовая отчетность ТВБ 30.04.2024.pdf'
    },
    {
      title: 'aboutDocumentsTextTwentyOne',
      path: './assets/documents/financial-reports/TWB report 30.04.2024.pdf'
    },
    {
      title: 'aboutDocumentsTextTwentyTwo',
      path: './assets/documents/financial-reports/Финансовая отчетность ТВБ 30.04.2024.pdf'
    },
  ]

  auditDocs = [
    {
      title: 'aboutDocumentsTextFiftyFifty',
      path: './assets/documents/audit/audit-2023.PDF'
    },
    {
      title: 'aboutDocumentsTextFifty',
      path: './assets/documents/audit/Отчет независимых аудиторов за 2022г.pdf'
    },
    {
      title: 'aboutDocumentsTextFiftyOne',
      path: './assets/documents/audit/Отчет независимых аудиторов за 2021г.pdf'
    },
    {
      title: 'aboutDocumentsTextFiftyTwo',
      path: './assets/documents/audit/Отчет независимых аудиторов за 2021г.pdf'
    },
    {
      title: 'aboutDocumentsTextFiftyThree',
      path: './assets/documents/audit/Отчет независимых аудиторов за 2019г.pdf'
    },
    {
      title: 'aboutDocumentsTextFiftyFour',
      path: './assets/documents/audit/Отчет независимых аудиторов за 2018г.pdf'
    },
    {
      title: 'aboutDocumentsTextFiftyFive',
      path: './assets/documents/audit/Отчет независимых аудиторов за 2017г.pdf'
    },
    {
      title: 'aboutDocumentsTextFiftySix',
      path: './assets/documents/audit/Отчет независимых аудиторов за 2016г.pdf'
    },
  ]
  tawhidpayDocs = [
    {
      title: 'aboutDocumentsTextFiftySeven',
      path: './assets/documents/cards/ПУБЛИЧНАЯ ОФЕРТА Tawhid Pay.pdf'
    },
    {
      title: 'aboutDocumentsTextFiftyEight',
      path: './assets/documents/audit/ПУБЛИЧНАЯ ОФЕРТА Tawhid_Pay.pdf'
    },
  ]
  depositDocs = [
    {
      title: 'aboutDocumentsTextFiftyNine',
      path: './assets/documents/deposit/Договор депозита Мудараба для физических лиц.pdf'
    },
    {
      title: 'aboutDocumentsTextSixty',
      path: './assets/documents/deposit/Договор открытия и обслуживания банковского счета физических лиц.pdf'
    },
    {
      title: 'aboutDocumentsTextSixtyOne',
      path: './assets/documents/deposit/Заявления на размещение депозита Мудараба.pdf'
    },
    {
      title: 'aboutDocumentsTextSixtyTwo',
      path: './assets/documents/deposit/Коэффициент распределения прибыли по депозиту «Мудараба неограниченная».pdf'
    },
    {
      title: 'aboutDocumentsTextSixtyThree',
      path: './assets/documents/deposit/Правила проведения розыгрыша Умра.pdf'
    },
  ]
  contractsDocs = [
    {
      title: 'aboutDocumentsTextSixtyFour',
      path: './assets/documents/contracts/Договор исламского беспроцентного кредита (Кард хасан).pdf'
    },
    {
      title: 'aboutDocumentsTextSixtyFive',
      path: './assets/documents/contracts/Договор об открытии и обслуживании банковского счета физических лиц.pdf'
    },
    {
      title: 'aboutDocumentsTextSixtySix',
      path: './assets/documents/contracts/Договор открытия и обслуживания банковского счета юридических лиц и индивидуальных предпринимателей.pdf'
    },
    {
      title: 'aboutDocumentsTextSixtySeven',
      path: './assets/documents/contracts/Договор открытия и обслуживания банковского счета.pdf'
    },
  ]

  personDocs = [
    {
      title: 'aboutDocumentsTextSixtyEight',
      path: './assets/documents/tariffs/тарофаҳо_барои_хизматрасонии_шахсони_воқеӣ.pdf'
    },
    {
      title: 'aboutDocumentsTextSixtyEightOne',
      path: './assets/documents/tariffs/тарифы физ.лицам.pdf'
    },
    {
      title: 'aboutDocumentsTextSixtyEightTwo',
      path: './assets/documents/tariffs/tariffs_individuals.pdf'
    }
  ]

  companyDocs = [
    {
      title: 'aboutDocumentsTextSixtyNine',
      path: './assets/documents/tariffs/тарофаҳо_барои_хизматрасонии_шахсони_ҳуқуқӣ_V_№10_1.pdf'
    },
    {
      title: 'aboutDocumentsTextSixtyNineOne',
      path: './assets/documents/tariffs/тарифы юр.лицам.pdf'
    },
    {
      title: 'aboutDocumentsTextSixtyNineTwo',
      path: './assets/documents/tariffs/tariffs - legal entities edition.pdf'
    },
  ]

  criteriasDocs = [
    {
      title: 'aboutDocumentsTextSeventy',
      path: './assets/documents/сriterias/Соблюдение обязательных нормативов НБТ 311221.pdf'
    },
    {
      title: 'aboutDocumentsTextSeventyOne',
      path: './assets/documents/сriterias/Соблюдение обязательных нормативов НБТ 31122022.pdf'
    }
  ]

  financialResultsDocs = [
    {
      title: 'aboutDocumentsTextSeventyTwo',
      path: './assets/documents/financial-results/Финансовые результаты банка за 9 месяцев 2022 года.pdf'
    },
    {
      title: 'aboutDocumentsTextSeventyThree',
      path: './assets/documents/financial-results/Финансовые результаты банка за 6 месяцев 2022 года.pdf'
    },
    {
      title: 'aboutDocumentsTextSeventyFour',
      path: './assets/documents/financial-results/Финансовые результаты банка за 2021 года.pdf'
    },
  ]
  protected readonly encodeURI = encodeURI;
}
