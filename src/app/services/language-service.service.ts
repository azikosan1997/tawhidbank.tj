import { Injectable } from '@angular/core';
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class LanguageServiceService {

  private selectedLanguageSubject = new Subject<string>();

  selectedLanguage$ = this.selectedLanguageSubject.asObservable();

  setLanguage(langCode: string) {
    this.selectedLanguageSubject.next(langCode);
    sessionStorage.setItem('lang', langCode);
  }
}
