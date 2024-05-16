import { Component } from '@angular/core';
import {TranslateService} from "@ngx-translate/core";
import {LanguageServiceService} from "../../../services/language-service.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-about-header',
  templateUrl: './about-header.component.html',
  styleUrls: ['../personal-header/personal-header.component.scss']
})
export class AboutHeaderComponent {
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

  translateText(text: string) {
    return this.translate.instant(text);
  }

  mobileMenuItems: any = [
    {
      icon: 'location_on',
      text: 'aboutBranchesPageTextOne'
    },
    {
      icon: 'description',
      text: 'bottomAboutHeaderMenuTwo'
    },
    {
      icon: '',
      text: 'footerAboutTextOne'
    },
    {
      icon: 'work',
      text: 'bottomAboutHeaderMenuThree'
    },
    {
      icon: 'more_vert',
      text: 'personalDepositsTextButtonOne'
    },
  ]

  setMenu(index: number): void {
    this.mobileMenuActive = index;
    switch(index) {
      case 0:
        this.router.navigate(['/about/location']);
        break;
      case 1:
        this.router.navigate(['/about/documents']);
        break;
      case 2:
        this.router.navigate(['/about']);
        break;
      case 3:
        this.router.navigate(['/about/job']);
        break;
      case 4:
        this.mobileMenuActive = index;
        this.closeMobileMenu = true;
        break;
      default:
        this.mobileMenuActive = index;
        break;
    }
  }

  setCloseMobileMenu(): void {
    this.closeMobileMenu = !this.closeMobileMenu;
  }

  navigateMain(): void {
    this.router.navigate(['/about']);
  }
}
