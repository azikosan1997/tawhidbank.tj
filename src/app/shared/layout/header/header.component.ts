import {Component, OnInit} from '@angular/core';
import {TranslateService} from "@ngx-translate/core";
import { Location } from '@angular/common';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],

})
export class HeaderComponent implements OnInit{
  path: string = 't';
  personal: boolean = false;
  business: boolean = false;
  about: boolean = false;

  constructor(private translate: TranslateService,
              private location: Location) {

  }

  ngOnInit() {
    this.path = this.location.path()

    if (this.path === '/' || this.path === '/personal') {
      this.personal = true;
      this.business = false;
      this.about = false;
    } else if (this.path === '/business') {
      this.personal = false;
      this.business = true;
      this.about = false;
    }else if (this.path === '/o-banke') {
      this.personal = false;
      this.business = false;
      this.about = true;
    }
  }


  sectionArray: any = [
    {
      title: 'topHeaderMenuPersonal',
      route: '/personal'
    },
    {
      title: 'topHeaderMenuBusiness',
      route: '/business'
    },
    {
      title: 'topHeaderMenuAbout',
      route: '/o-banke'
    },
  ];

  activatedSection: number = 0;

  setTab(index: number) {
    this.activatedSection = index;
  }

  translateTitle(key: string): string {
    return this.translate.instant(key);
  }

}
