import { Component } from '@angular/core';
import {TranslateService} from "@ngx-translate/core";
import {LanguageServiceService} from "../../../services/language-service.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-business-header',
  templateUrl: './business-header.component.html',
  styleUrls: ['../personal-header/personal-header.component.scss']
})
export class BusinessHeaderComponent {
  logo: string  = 'tj'
  mobileMenuActive: number = 0;

  constructor(private translate: TranslateService,
              private languageService: LanguageServiceService,
              private router: Router) {

  }

  translateText(text: string): string{
    return  this.translate.instant(text);
  }

  ngOnInit() {
    this.languageService.selectedLanguage$.subscribe(langCode => {
      this.logo = langCode;
    });
  }

  mobileMenuItems: any = [
    {
      icon: 'account_balance',
      text: 'bottomBusinessHeaderMenuOne'
    },
    {
      icon: 'assessment',
      text: 'bottomBusinessHeaderMenuTwo'
    },
    {
      icon: '',
      text: 'main'
    },
    {
      icon: 'pie_chart',
      text: 'bottomBusinessHeaderMenuThree'
    },
    {
      icon: 'list_alt',
      text: 'bottomBusinessHeaderMenuFour'
    },
  ]

  setMenu(index: number): void {
    this.mobileMenuActive = index;
    switch(index) {
      case 0:
        this.router.navigate(['/business/accounting']);
        break;
      case 1:
        this.router.navigate(['/business/financing']);
        break;
      case 2:
        this.router.navigate(['/business']);
        break;
      case 3:
        this.router.navigate(['/business/deposits']);
        break;
      case 4:
        this.router.navigate(['/business/merchant-acquiring']);
        break;
      default:
        this.router.navigate(['/business']);
        break;
    }
  }

  navigateMain(): void {
    this.router.navigate(['/business']);
  }
}
