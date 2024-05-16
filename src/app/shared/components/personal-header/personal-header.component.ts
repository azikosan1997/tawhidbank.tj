import {Component, OnInit} from '@angular/core';
import {TranslateService} from "@ngx-translate/core";
import {LanguageServiceService} from "../../../services/language-service.service";
import {Router} from "@angular/router";


@Component({
  selector: 'app-personal-header',
  templateUrl: './personal-header.component.html',
  styleUrls: ['./personal-header.component.scss']
})
export class PersonalHeaderComponent implements OnInit {
  logo: string  = 'tj'
  closeMobileMenu: boolean = false;
  mobileMenuActive: number = 0;

  constructor(private translate: TranslateService,
              private languageService: LanguageServiceService,
              private router: Router) {

  }

  ngOnInit() {
    this.languageService.selectedLanguage$.subscribe(langCode => {
      this.logo = langCode;
    });
  }

  translateText(text: string): string {
    return this.translate.instant(text);
  }

  mobileMenuItems: any = [
    {
      icon: 'credit_card',
      text: 'personalMobileMenuTestOne'
    },
    {
      icon: 'assessment',
      text: 'personalMobileMenuTestTwo'
    },
    {
      icon: '',
      text: 'personalMobileMenuTestThree'
    },
    {
      icon: 'swap_horizontal_circle',
      text: 'personalMobileMenuTestFour'
    },
    {
      icon: 'more_vert',
      text: 'personalDepositsTextButtonOne'
    },
  ]

  setMenu(index: number): void {
    this.mobileMenuActive = index;
    this.closeMobileMenu = true;
    if (index === 3) {
      this.router.navigate(['/personal/transfers']);
    }
  }

  setCloseMobileMenu(): void {
    this.closeMobileMenu = !this.closeMobileMenu;
  }

  navigateMain(): void {
    this.router.navigate(['/']);
  }
}
