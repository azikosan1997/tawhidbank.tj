import {Component, ElementRef, Input, OnInit, TemplateRef, ViewChild} from '@angular/core';
import { Location } from '@angular/common';
import {MatDialog, MatDialogRef} from "@angular/material/dialog";
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'tab-panel',
  templateUrl: './tab-panel.component.html',
  styleUrls: ['./tab-panel.component.scss']
})
export class TabPanelComponent implements OnInit{
  @Input() tariffTitle!: string;
  @Input() tariffs!: any;
  @Input() documents!: any;
  @ViewChild('Rate') depositPopup!: TemplateRef<ElementRef>;

  tabsArray: string[] = ['depositMudarabatextThirtyTwo', 'depositMudarabatextThirtyThree'];
  activatedTab: number = 0;
  noRate = false;
  currentPath: string;

  currentLanguage: string = 'tj';
  selectedLanguageFlag: number = 0;

  constructor(private location: Location,
              public dialog: MatDialog,
              private translate: TranslateService,) {
    this.currentPath = this.location.path();
    if (this.currentPath === '/personal/deposit/manzil' || this.currentPath === '/personal/deposit/vakala'){
      this.noRate = true;
    }
  }

  ngOnInit() {
    this.currentLanguage = sessionStorage.getItem('lang') || 'tj' || 'ru';


    if( this.currentLanguage === 'tj' ) {
      this.selectedLanguageFlag = 0;
    } else if ( this.currentLanguage === 'ru' ) {
      this.selectedLanguageFlag = 1;
    } else if ( this.currentLanguage === 'en' )  {
      this.selectedLanguageFlag = 2;
    }
  }

  translateText(key: string): string {
    return this.translate.instant(key);
  }

  setTab(index: number) {
    this.activatedTab = index;
  }

  openPopup() {
    this.dialog.open(this.depositPopup,{
      width: '80vw',
    });
  }

  closePopup() {
    this.dialog.closeAll();
  }



}
