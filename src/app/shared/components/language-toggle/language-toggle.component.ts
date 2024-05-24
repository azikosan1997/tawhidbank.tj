import {Component, OnInit} from '@angular/core';
import {TranslateService} from "@ngx-translate/core";
import {LanguageServiceService} from "../../../services/language-service.service";

@Component({
  selector: 'language-toggle',
  templateUrl: './language-toggle.component.html',
  styleUrls: ['./language-toggle.component.scss']
})
export class LanguageToggleComponent implements OnInit{
  selectedLanguageFlag: string = './assets/images/tjs.png';
  selectedLanguageText: string = 'ТОҶ';
  isButtonActive: boolean = false;
  arrowActive: boolean = false;
  currentLanguage: string = 'tj';

  constructor(private translateService: TranslateService,
              private languageService: LanguageServiceService) {
  }

  ngOnInit() {
    this.currentLanguage = sessionStorage.getItem('lang') || 'tj' || 'ru';


    if( this.currentLanguage === 'tj' ) {
      this.selectedLanguageFlag = './assets/images/tjs.png';
      this.selectedLanguageText = 'ТОҶ';
    } else if ( this.currentLanguage === 'ru' ) {
      this.selectedLanguageFlag = './assets/images/rub.png';
      this.selectedLanguageText = 'РУС';
    } else if ( this.currentLanguage === 'en' )  {
      this.selectedLanguageFlag = './assets/images/uk.png';
      this.selectedLanguageText = 'ENG';
    }
  }

  languages = [
    {
      language: './assets/images/tjs.png',
      flag: 'ТОҶ',
      langCode: 'tj'
    },
    {
      language: './assets/images/rub.png',
      flag: 'РУС',
      langCode: 'ru'
    },
    {
      language: './assets/images/uk.png',
      flag: 'ENG',
      langCode: 'en'
    },
    // {
    //   language: './assets/images/chi.png',
    //   flag: '中文',
    //   lang: 'chi'
    // },
  ]

  openSelectOptions() {
    this.isButtonActive = !this.isButtonActive;
    this.arrowActive = !this.arrowActive;
  }

  selectLanguage(lang: string, flag: string, langCode: string) {
    this.selectedLanguageText = lang;
    this.selectedLanguageFlag = flag;
    sessionStorage.setItem('lang', langCode);
    this.translateService.use(langCode);
    this.languageService.setLanguage(langCode);

  }
}
