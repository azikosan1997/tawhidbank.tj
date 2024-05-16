import {AfterViewInit, Component, ElementRef, TemplateRef, ViewChild} from '@angular/core';
import VanillaTilt from 'vanilla-tilt';
import {MatDialog} from "@angular/material/dialog";
import {TranslateService} from "@ngx-translate/core";



@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements AfterViewInit {
  @ViewChild('cardPopup') depositPopup!: TemplateRef<ElementRef>;
  tabsArray: string[] = ['personalCardsTextTwentySeven', 'personalCardsTextTwentyEight', 'personalCardsTextTwentyNine'];
  activatedTab: number = 0;
  value = '';
  mainForm: boolean = true;
  prodId: number = 0;

  formName: string = 'personalCardsTextThirty';

  allCard = [
    {
      cardImage: './assets/images/pages/cards/green-card.png',
      cardTitle: 'personalCardsTextOne',
      cardSubTitle: 'personalCardsTextTwo',
      percent:'personalCardsTextThree',
      percentText: 'personalCardsTextFour',
      age: 'personalCardsTextFive',
      ageText: 'personalCardsTextSix',
      feature: 'personalCardsTextSeven',
      featureText: 'personalCardsTextEight',
      link: '/personal/cards/green'
    },
    {
      cardImage: './assets/images/pages/cards/national-card.png',
      cardTitle: 'personalCardsTextNine',
      cardSubTitle: 'personalCardsTextTwo',
      percent:'personalCardsTextEleven',
      percentText: 'personalCardsTextTwelve',
      age: 'personalCardsTextThirteen',
      ageText: 'personalCardsTextSix',
      feature: 'personalCardsTextFifteen',
      featureText: 'personalCardsTextSixteen',
      link: '/personal/cards/national'
    },
    {
      cardImage: './assets/images/pages/cards/nameless-card.png',
      cardTitle: 'personalCardsTextSeventeen',
      cardSubTitle: 'personalCardsTextTwo',
      percent:'personalCardsTextEleven',
      percentText: 'personalCardsTextTwelve',
      age: 'personalCardsTextThirteen',
      ageText: 'personalCardsTextSix',
      feature: 'personalCardsTextFifteen',
      featureText: 'personalCardsTextSixteen',
      link: '/personal/cards/nameless'
    },
  ]

  craditCard = [
    {
      cardImage: './assets/images/pages/cards/green-card.png',
      cardTitle: 'personalCardsTextOne',
      cardSubTitle: 'personalCardsTextTwo',
      percent:'personalCardsTextThree',
      percentText: 'personalCardsTextFour',
      age: 'personalCardsTextFive',
      ageText: 'personalCardsTextSix',
      feature: 'personalCardsTextSeven',
      featureText: 'personalCardsTextEight',
      link: '/personal/cards/green'
    },
  ]

  debitCard  = [
    {
      cardImage: './assets/images/pages/cards/national-card.png',
      cardTitle: 'personalCardsTextNine',
      cardSubTitle: 'personalCardsTextTwo',
      percent:'personalCardsTextEleven',
      percentText: 'personalCardsTextTwelve',
      age: 'personalCardsTextThirteen',
      ageText: 'personalCardsTextSix',
      feature: 'personalCardsTextFifteen',
      featureText: 'personalCardsTextSixteen',
      link: '/personal/cards/national'
    },
    {
      cardImage: './assets/images/pages/cards/nameless-card.png',
      cardTitle: 'personalCardsTextSeventeen',
      cardSubTitle: 'personalCardsTextTwo',
      percent:'personalCardsTextEleven',
      percentText: 'personalCardsTextTwelve',
      age: 'personalCardsTextThirteen',
      ageText: 'personalCardsTextSix',
      feature: 'personalCardsTextFifteen',
      featureText: 'personalCardsTextSixteen',
      link: '/personal/cards/nameless'
    },
  ]
  cardsQuestions: any = [
    {
      question: 'cardQuestionsTextOne',
      answer: 'cardQuestionsTextTwo',
    },
    {
      question: 'cardQuestionsTextThree',
      answer: 'cardQuestionsTextFour',
    },
    {
      question: 'cardQuestionsTextFive',
      answer: 'cardQuestionsTextSix',
    },
    {
      question: 'cardQuestionsTextSeven',
      answer: 'cardQuestionsTextEight',
    },
    {
      question: 'cardQuestionsTextNine',
      answer: 'cardQuestionsTextTen',
    },
    {
      question: 'cardQuestionsTextEleven',
      answer: 'cardQuestionsTextTwelve',
    },
    {
      question: 'cardQuestionsTextThirteen',
      answer: 'cardQuestionsTextFourteen',
    },
  ]

  constructor(private el: ElementRef, public dialog: MatDialog, private translate: TranslateService) {
  }

  translateText(key: string): string {
    return this.translate.instant(key);
  }

  ngAfterViewInit() {
      setInterval(() =>{
          const tiltElement = this.el.nativeElement.querySelectorAll('.card-item-image');

          VanillaTilt.init(tiltElement, {
              max: 25,
              speed: 400,
              glare: false,
              'max-glare': 0.5,
          });
      }, 1000)
  }

  setTab(index: number) {
    this.activatedTab = index;
  }

  openPopup(id: number) {
    this.dialog.open(this.depositPopup,{
      width: '80vw',
    });

    this.prodId = id;
  }

  closePopup() {
    this.dialog.closeAll();
  }
}
