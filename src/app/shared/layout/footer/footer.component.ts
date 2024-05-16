import {Component, OnInit} from '@angular/core';
import {LanguageServiceService} from "../../../services/language-service.service";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit{
  logo: string = 'tj'

  constructor(private languageService: LanguageServiceService) {
  }

  ngOnInit() {
    this.languageService.selectedLanguage$.subscribe(langCode => {
      this.logo = langCode;
    });
  }
}
