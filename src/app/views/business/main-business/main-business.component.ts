import {Component} from '@angular/core';
import {OwlOptions} from "ngx-owl-carousel-o";
import {FormBuilder, Validators} from "@angular/forms";
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-main-business',
  templateUrl: './main-business.component.html',
  styleUrls: ['./main-business.component.scss']
})
export class MainBusinessComponent {

  constructor(private formBuilder: FormBuilder,
              private translate: TranslateService,) {
  }

  translateText(key: string): string {
    return this.translate.instant(key);
  }

  accountConsulting = this.formBuilder.group({
    fullName: [
      '',
      [
        Validators.required,
        Validators.pattern(/^[A-Za-zА-Яа-я]+(?: [A-Za-zА-Яа-я]+)*$/),
      ],
    ],
    mobileNumber: [
      '+992',
      [
        Validators.required,
        Validators.pattern(/^\+992\d{3}\d{3}\d{3}$/),
      ],
    ],
  });

  sendConsultingRequest() {
    if (this.accountConsulting.valid) {

    }
  }

  serviceOptions: OwlOptions = {
    autoplay: true,
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    margin: 30,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      499: {
        items: 1
      },
      767: {
        items: 2
      },
      1024: {
        items: 3
      },
      1199: {
        items: 3
      }
    },
    nav: false
  }

  bannerData = [
    {
      background: './assets/images/pages/business%20main/b4.png',
      title: "mainBusinessTextTwelve",
      description: "mainBusinessTextThirteen",
      link: '/business/merchant-acquiring'
    },
    {
      background: './assets/images/pages/business%20main/b2.png',
      title: "mainBusinessTextFourteen",
      description: "mainBusinessTextFifteen",
      link: '/business/accounting'
    },
    {
      background: './assets/images/pages/business%20main/b3.png',
      title: "mainBusinessTextSixteen",
      description: "mainBusinessTextSeventeen",
      link: '/business/financing'
    },
  ];

  usefullServices: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    margin: 20,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      499: {
        items: 1
      },
      767: {
        items: 2
      },
      1024: {
        items: 3
      },
      1199: {
        items: 3
      }
    },
    nav: true
  }
}
