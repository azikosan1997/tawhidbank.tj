import {Component, OnInit} from '@angular/core';
import {OwlOptions} from "ngx-owl-carousel-o";
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {


  ngOnInit() {
  }

  tabsArray: string[] = ['personalMainCalculateTabsArrayOne', 'personalMainCalculateTabsArrayTwo'];
  activatedTab: number = 0;

  converterArray: string[] = ['personalMainConverterTabsArrayOne', 'personalMainConverterTabsArrayTwo'];
  activeConverter: number = 0;


  constructor(private translate: TranslateService) {
  }

  translateText(key: string): string {
    return this.translate.instant(key);
  }

  setTab(index: number) {
    this.activatedTab = index;
  }

  setConverter(index: number) {
    this.activeConverter = index
  }


  mainBannerOptions: OwlOptions = {
    autoplay: true,
    loop: true,
    mouseDrag: false,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    navSpeed: 40,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      740: {
        items: 1
      },
      940: {
        items: 1
      }
    },
    nav: true,
    animateOut: 'fadeOut'
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
      767: {
        items: 2
      },
      940: {
        items: 3,
        margin: 15,
      },
      1199: {
        items: 3
      },

    },
    nav: false
  }

  bottomCarousel: OwlOptions = {
    autoplay: true,
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      740: {
        items: 1
      },
      940: {
        items: 1
      }
    },
    nav: true,
    animateOut: 'fadeOut'
  }

  bannerData = [
    {
      image: './assets/images/pages/main/banner-images/green-card.png',
      background: '#cde6e6',
      title: 'personalMainBannerDataTitleOne',
      description: 'personalMainBannerDataDescriptionOne',
      color: '#191919FF',
      button: '#309799',
      textColor: 'white',
      link: '/personal/cards/green'
    },
    {
      image: './assets/images/pages/main/banner-images/truck.png',
      background: '#309799',
      title: 'personalMainBannerDataTitleTwo',
      description: 'personalMainBannerDataDescriptionTwo',
      color: 'white',
      button: '#fff',
      textColor: '#309799',
      link: '/personal/financing/murabaha-agriculture'
    },
    {
      image: './assets/images/pages/main/banner-images/vakala.png',
      background: 'linear-gradient(160deg, #fceabb, #ffc93c)',
      title: 'personalMainBannerDataTitleThree',
      description: 'personalMainBannerDataDescriptionThree',
      color: '#191919FF',
      button: '#191919FF',
      textColor: '#fff',
      link: '/personal/deposit/vakala'
    },
    {
      image: './assets/images/pages/main/banner-images/car.png',
      background: 'linear-gradient(60deg, rgb(48, 153, 151) 0%, rgb(64, 192, 193) 100%)',
      title: 'personalMainBannerDataTitleFour',
      description: 'personalMainBannerDataDescriptionFour',
      color: '#fff',
      button: '#fff',
      textColor: '#309799',
      link: '/personal/auto-financing'
    },
  ];

  bestProducts = [
    {
      productImage: './assets/images//pages/main/best-products/b1.png',
      imageAlt: 'House',
      productTitle: 'personalMainBestProductTitleOne',
      link: '/personal/financing/murabaha-house',
      productDescription: 'personalMainBestProductTextOne',
    },
    {
      productImage: './assets/images//pages/main/best-products/b2.png',
      imageAlt: 'Car',
      productTitle: 'personalMainBestProductTitleTwo',
      link: '/personal/auto-financing',
      productDescription: 'personalMainBestProductTextTwo',
    },
    {
      productImage: './assets/images//pages/main/best-products/b3.png',
      imageAlt: 'Phone',
      productTitle: 'personalMainBestProductTitleThree',
      link: '/personal/financing/murabaha-business',
      productDescription: 'personalMainBestProductTextThree',
    },
    {
      productImage: './assets/images//pages/main/best-products/b4.png',
      imageAlt: 'Savings',
      productTitle: 'personalMainBestProductTitleFour',
      link: '/personal/deposit/mudaraba',
      productDescription: 'personalMainBestProductTextFour',
    },
    {
      productImage: './assets/images//pages/main/best-products/b5.png',
      imageAlt: 'Pie chart',
      productTitle: 'personalMainBestProductTitleFive',
      link: '/personal/deposit/vakala',
      productDescription: 'personalMainBestProductTextFive',
    },
    {
      productImage: './assets/images//pages/main/best-products/b6.png',
      imageAlt: 'Card',
      productTitle: 'personalMainBestProductTitleSix',
      link: '/personal/cards/green',
      productDescription: 'personalMainBestProductTextSix',
    },
  ]

  services = [
    {
      serviceIcon: './assets/images//pages/main/s1.png',
      iconAlt: 'Icon',
      serviceTitle: 'personalMainServicesCarouselTextOne',
      link: '/personal/transfers',
      fragment: '',
      serviceDescription: 'personalMainServicesCarouselTextOneDescription'
    },
    {
      serviceIcon: './assets/images//pages/main/s3.png',
      iconAlt: 'Icon',
      serviceTitle: 'personalMainServicesCarouselTextTwo',
      link: '/personal',
      fragment: 'calculator',
      serviceDescription: 'personalMainServicesCarouselTextTwoDescription'
    }
  ]

  bottomBanner = [
    {
      image: './assets/images//pages/main/bbt1.png',
      title: 'personalMainInterestingCarouselTextOne',
      color: '#fff',
      link: '/personal/transfers',
      description: 'personalMainInterestingCarouselTextOneDescription'
    },
    {
      image: './assets/images//pages/main/bbt2.png',
      title: 'personalMainInterestingCarouselTextTwo',
      href: 'https://ib.tawhid.tj/',
      color: '#1F232BFF',
      description: 'personalMainInterestingCarouselTextTwoDescription'
    },
  ]
}
