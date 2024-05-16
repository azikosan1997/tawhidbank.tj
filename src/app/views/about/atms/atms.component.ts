import { Component } from '@angular/core';
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-atms',
  templateUrl: './atms.component.html',
  styleUrls: ['./atms.component.scss']
})
export class AtmsComponent {
  // regions: any = [
  //   {value: 'headquarter', viewValue: 'Головной офис'},
  //   {value: 'pizza-1', viewValue: 'г. Бохтар'},
  //   {value: 'tacos-2', viewValue: 'р. Шахритуз'},
  //   {value: 'tacos-2', viewValue: 'р. Рудаки'},
  //   {value: 'tacos-2', viewValue: 'р. Фирдавси'},
  //   {value: 'tacos-2', viewValue: 'г. Худжанд'},
  // ];

  customMarkerIcon: any  = {
    url: './assets/images/pages/about/location/atm.png',
    scaledSize: {
      width: 35,
      height: 40
    }
  };
  options: google.maps.MapOptions = {
    center: {lat: 38.56189789218196, lng: 68.78516342737},
    zoom: 18,

    styles: [
      {
        featureType: 'landscape',
        elementType: 'geometry',
        stylers: [
          { hue: '#686868' },
          { saturation: 0 },
          { lightness: 0 }
        ]
      },
      {
        featureType: 'road',
        elementType: 'labels.text.fill',
        stylers: [
          { color: '#2c2c2c' }
        ]
      },
      {
        featureType: 'buildings',
        elementType: 'geometry',
        stylers: [
          { hue: '#686868' },
          { saturation: -100 }
        ]
      },
      {
        featureType: 'poi',
        stylers: [
          { visibility: 'off' }
        ]
      },
    ]
  };
  constructor(private translate: TranslateService) {
  }

  translateText(key: string): string {
    return this.translate.instant(key);
  }

  atms = [
    {
      address: 'aboutAtmsInfoTextOne',
      graphic: 'aboutAtmsInfoTextFortyFive',
      cash: 'aboutAtmsInfoTextFortySix',
      lat: 38.56187506936877,
      lng:  68.78517315106345
    },
    {
      address: 'aboutAtmsInfoTextTwo',
      graphic: 'aboutAtmsInfoTextFortyFive',
      cash: 'aboutAtmsInfoTextFortySix',
      lat: 38.551445493177454,
      lng: 68.7724729233923
    },
    {
      address: 'aboutAtmsInfoTextThree',
      graphic: 'aboutAtmsInfoTextFortyFive',
      cash: 'aboutAtmsInfoTextFortySix',
      lat: 38.56284816745753,
      lng: 68.80893370374254
    },
    {
      address: 'aboutAtmsInfoTextFour',
      graphic: 'aboutAtmsInfoTextFortyFive',
      cash: 'aboutAtmsInfoTextFortySix',
      lat: 38.59620676769875,
      lng:  68.78644512922176
    },
    {
      address: 'aboutAtmsInfoTextFive',
      graphic: 'aboutAtmsInfoTextFortyFive',
      cash: 'aboutAtmsInfoTextFortySix',
      lat: 38.56344527125462,
      lng: 68.79731740034428
    },
    {
      address: 'aboutAtmsInfoTextSix',
      graphic: 'aboutAtmsInfoTextFortyFive',
      cash: 'aboutAtmsInfoTextFortySix',
      lat: 38.514257365658665,
      lng: 68.74298765044999
    },
    {
      address: 'aboutAtmsInfoTextSeven',
      graphic: 'aboutAtmsInfoTextFortyFive',
      cash: 'aboutAtmsInfoTextFortySix',
      lat: 38.571582340584904,
      lng: 68.74037852290027
    },
    {
      address: 'aboutAtmsInfoTextEight',
      graphic: 'aboutAtmsInfoTextFortyFive',
      cash: 'aboutAtmsInfoTextFortySix',
      lat: 38.519421236412384,
      lng:  68.75284202728598
    },
    {
      address: 'aboutAtmsInfoTextNine',
      graphic: 'aboutAtmsInfoTextFortyFive',
      cash: 'aboutAtmsInfoTextFortySix',
      lat: 38.44217571403086,
      lng: 68.77431617020443
    },
    {
      address: 'aboutAtmsInfoTextTen',
      graphic: 'aboutAtmsInfoTextFortyFive',
      cash: 'aboutAtmsInfoTextFortySix',
      lat: 38.58561061041767,
      lng: 68.799218249868
    },
    {
      address: 'aboutAtmsInfoTextEleven',
      graphic: 'aboutAtmsInfoTextFortyFive',
      cash: 'aboutAtmsInfoTextFortySix',
      lat: 38.59066588896101,
      lng: 68.73376104458269
    },
    {
      address: 'aboutAtmsInfoTextTwelve',
      graphic: 'aboutAtmsInfoTextFortyFive',
      cash: 'aboutAtmsInfoTextFortySix',
      lat: 38.556496383243974,
      lng: 68.76250201771414
    },
    {
      address: 'aboutAtmsInfoTextThirteen',
      graphic: 'aboutAtmsInfoTextFortyFive',
      cash: 'aboutAtmsInfoTextFortySix',
      lat: 38.442505341233165,
      lng:  68.77612346578225
    },
    {
      address: 'aboutAtmsInfoTextFourteen',
      graphic: 'aboutAtmsInfoTextFortyFive',
      cash: 'aboutAtmsInfoTextFortySix',
      lat: 40.28156761785792,
      lng: 69.62303701427719
    },
    {
      address: 'aboutAtmsInfoTextFifteen',
      graphic: 'aboutAtmsInfoTextFortyFive',
      cash: 'aboutAtmsInfoTextFortySix',
      lat: 40.29725411712463,
      lng: 69.61323671534471
    },
    {
      address: 'aboutAtmsInfoTextSixteen',
      graphic: 'aboutAtmsInfoTextFortyFive',
      cash: 'aboutAtmsInfoTextFortySix',
      lat: 40.648154585648705,
      lng: 69.59697737186997
    },
    {
      address: 'aboutAtmsInfoTextSeventeen',
      graphic: 'aboutAtmsInfoTextFortyFive',
      cash: 'aboutAtmsInfoTextFortySix',
      lat: 40.28156761785792,
      lng: 69.62303701427719
    },
    {
      address: 'aboutAtmsInfoTextEighteen',
      graphic: 'aboutAtmsInfoTextFortyFive',
      cash: 'aboutAtmsInfoTextFortySix',
      lat: 40.183887606284834,
      lng: 68.85640966400717
    },
    {
      address: 'aboutAtmsInfoTextNineteen',
      graphic: 'aboutAtmsInfoTextFortyFive',
      cash: 'aboutAtmsInfoTextFortySix',
      lat: 40.23479103245573,
      lng: 69.6961381655734
    },
    {
      address: 'aboutAtmsInfoTextTwenty',
      graphic: 'aboutAtmsInfoTextFortyFive',
      cash: 'aboutAtmsInfoTextFortySix',
      lat: 40.29183356829012,
      lng: 69.63855612883617
    },
    {
      address: 'aboutAtmsInfoTextTwentyOne',
      graphic: 'aboutAtmsInfoTextFortyFive',
      cash: 'aboutAtmsInfoTextFortySix',
      lat: 40.66432771565648,
      lng: 70.35635373698958
    },
    {
      address: 'aboutAtmsInfoTextTwentyTwo',
      graphic: 'aboutAtmsInfoTextFortyFive',
      cash: 'aboutAtmsInfoTextFortySix',
      lat: 40.648154585648705,
      lng: 69.59697737186997
    },
    {
      address: 'aboutAtmsInfoTextTwentyThree',
      graphic: 'aboutAtmsInfoTextFortyFive',
      cash: 'aboutAtmsInfoTextFortySix',
      lat: 39.90268781999013,
      lng: 69.00094544013601
    },
    {
      address: 'aboutAtmsInfoTextTwentyFour',
      graphic: 'aboutAtmsInfoTextFortyFive',
      cash: 'aboutAtmsInfoTextFortySix',
      lat: 37.41178077825105,
      lng: 68.1950013315614
    },
    {
      address: 'aboutAtmsInfoTextTwentyFive',
      graphic: 'aboutAtmsInfoTextFortyFive',
      cash: 'aboutAtmsInfoTextFortySix',
      lat: 37.27091352113215,
      lng:  68.14780437476817
    },
    {
      address: 'aboutAtmsInfoTextTwentySix',
      graphic: 'aboutAtmsInfoTextFortyFive',
      cash: 'aboutAtmsInfoTextFortySix',
      lat: 37.834672724724285,
      lng:  68.7768289
    },
    {
      address: 'aboutAtmsInfoTextTwentySeven',
      graphic: 'aboutAtmsInfoTextFortyFive',
      cash: 'aboutAtmsInfoTextFortySix',
      lat: 37.266736936748046,
      lng:  68.14375081776683
    },
    {
      address: 'aboutAtmsInfoTextTwentyEight',
      graphic: 'aboutAtmsInfoTextFortyFive',
      cash: 'aboutAtmsInfoTextFortySix',
      lat: 37.23202660984037,
      lng:  69.09504978402842
    },
    {
      address: 'aboutAtmsInfoTextTwentyNine',
      graphic: 'aboutAtmsInfoTextFortyFive',
      cash: 'aboutAtmsInfoTextFortySix',
      lat: 38.419035734912605,
      lng:  68.9510612406925
    },
    {
      address: 'aboutAtmsInfoTextThirty',
      graphic: 'aboutAtmsInfoTextFortyFive',
      cash: 'aboutAtmsInfoTextFortySix',
      lat: 37.23052618698867,
      lng: 69.10134162341434
    },
    {
      address: 'aboutAtmsInfoTextThirtyOne',
      graphic: 'aboutAtmsInfoTextFortyFive',
      cash: 'aboutAtmsInfoTextFortySix',
      lat: 37.533220528806446,
      lng: 68.4747486264298
    },
    {
      address: 'aboutAtmsInfoTextThirtyTwo',
      graphic: 'aboutAtmsInfoTextFortyFive',
      cash: 'aboutAtmsInfoTextFortySix',
      lat: 37.834576185947505,
      lng: 68.77680629223237
    },
    {
      address: 'aboutAtmsInfoTextThirtyThree',
      graphic: 'aboutAtmsInfoTextFortyFive',
      cash: 'aboutAtmsInfoTextFortySix',
      lat: 38.3143123081005,
      lng: 69.03894305049847
    },
    {
      address: 'aboutAtmsInfoTextThirtyFour',
      graphic: 'aboutAtmsInfoTextFortyFive',
      cash: 'aboutAtmsInfoTextFortySix',
      lat: 37.265942940978356,
      lng: 68.14375347810767
    },
    {
      address: 'aboutAtmsInfoTextThirtyFive',
      graphic: 'aboutAtmsInfoTextFortyFive',
      cash: 'aboutAtmsInfoTextFortySix',
      lat: 37.831621670294304,
      lng: 68.76511044747447
    },
    {
      address: 'aboutAtmsInfoTextThirtySix',
      graphic: 'aboutAtmsInfoTextFortyFive',
      cash: 'aboutAtmsInfoTextFortySix',
      lat: 37.80567580198357,
      lng: 69.63665915960213
    },
    {
      address: 'aboutAtmsInfoTextThirtySeven',
      graphic: 'aboutAtmsInfoTextFortyFive',
      cash: 'aboutAtmsInfoTextFortySix',
      lat: 37.264941,
      lng: 68.142894
    },
    {
      address: 'aboutAtmsInfoTextThirtyEight',
      graphic: 'aboutAtmsInfoTextFortyFive',
      cash: 'aboutAtmsInfoTextFortySix',
      lat: 37.947849806951965,
      lng: 68.79742379480739
    },
    {
      address: 'aboutAtmsInfoTextThirtyNine',
      graphic: 'aboutAtmsInfoTextFortyFive',
      cash: 'aboutAtmsInfoTextFortySix',
      lat: 37.23052618698867,
      lng: 69.10134162341434
    },
    {
      address: 'aboutAtmsInfoTextForty',
      graphic: 'aboutAtmsInfoTextFortyFive',
      cash: 'aboutAtmsInfoTextFortySix',
      lat: 38.513386,
      lng: 668.233606
    },
    {
      address: 'aboutAtmsInfoTextFortyOne',
      graphic: 'aboutAtmsInfoTextFortyFive',
      cash: 'aboutAtmsInfoTextFortySix',
      lat: 38.52682477364034,
      lng: 68.55435804264229
    },
    {
      address: 'aboutAtmsInfoTextFortyTwo',
      graphic: 'aboutAtmsInfoTextFortyFive',
      cash: 'aboutAtmsInfoTextFortySix',
      lat: 38.51082905993192,
      lng: 68.23378072716018
    },
    {
      address: 'aboutAtmsInfoTextFortyThree',
      graphic: 'aboutAtmsInfoTextFortyFive',
      cash: 'aboutAtmsInfoTextFortySix',
      lat: 38.51644193923049,
      lng: 68.72903455531606
    },
    {
      address: 'aboutAtmsInfoTextFortyFour',
      graphic: 'aboutAtmsInfoTextFortyFive',
      cash: 'aboutAtmsInfoTextFortySix',
      lat: 38.55711281922677,
      lng: 69.01936896988605
    },
  ]
  filteredAtms: any[] = this.atms;

  isSearching = false;

  updateCenter(event: any): void {
    const searchTerm = event.target.value.toLowerCase();

    if (searchTerm) {
      this.filteredAtms = this.atms.filter(atm =>
        atm.address.toLowerCase().includes(searchTerm)
      );
      this.isSearching = true;
    } else {
      this.filteredAtms = this.atms;
      this.isSearching = false;
    }
  }
}
