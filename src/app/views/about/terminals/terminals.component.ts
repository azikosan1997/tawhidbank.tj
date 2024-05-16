import {Component, OnInit} from '@angular/core';
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-terminals',
  templateUrl: './terminals.component.html',
  styleUrls: ['./terminals.component.scss']
})
export class TerminalsComponent implements OnInit {

  tabsArray:string[] = ['regionTextOne', 'regionTextTwo', 'regionTextThree', 'regionTextFour', 'regionTextFive', 'regionTextSix']
  activatedTab: number = 0;

  setTab(index: number) {
    this.activatedTab = index;
  }

  constructor(private translate: TranslateService) {
  }

  translateText(key: string): string {
    return this.translate.instant(key);
  }

  ngOnInit() {
  }

  // regions: any = [
  //   {value: 'headquarter', viewValue: 'Головной офис'},
  //   {value: 'pizza-1', viewValue: 'г. Бохтар'},
  //   {value: 'tacos-2', viewValue: 'р. Шахритуз'},
  //   {value: 'tacos-2', viewValue: 'р. Рудаки'},
  //   {value: 'tacos-2', viewValue: 'р. Фирдавси'},
  //   {value: 'tacos-2', viewValue: 'г. Худжанд'},
  // ];
  customMarkerIcon: any  = {
    url: './assets/images/pages/about/location/terminal.png',
    scaledSize: {
      width: 35,
      height: 40
    }
  };
  options: google.maps.MapOptions = {
    center: {lat: 38.56189789218196, lng: 68.78516342737},
    zoom: 15,

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

  bokhtarTerminals: any  = [
    {
      address: 'aboutTerminalsTextNine',
      graphic: 'aboutAtmsInfoTextFortyFive',
      cash: 'aboutAtmsInfoTextFortySix',
      lat: 37.834672724724285,
      lng: 68.7768289
    },
    {
      address: 'aboutTerminalsTextTen',
      graphic: 'aboutAtmsInfoTextFortyFive',
      cash: 'aboutAtmsInfoTextFortySix',
      lat: 37.533220528806446,
      lng: 68.4747486264298
    },
    {
      address: 'aboutTerminalsTextEleven',
      graphic: 'aboutAtmsInfoTextFortyFive',
      cash: 'aboutAtmsInfoTextFortySix',
      lat: 37.834576185947505,
      lng: 68.77680629223237
    },
    {
      address: 'aboutTerminalsTextTwelve',
      graphic: 'aboutAtmsInfoTextFortyFive',
      cash: 'aboutAtmsInfoTextFortySix',
      lat: 37.265942940978356,
      lng: 68.14375347810767
    },
    {
      address: 'aboutTerminalsTextThirteen',
      graphic: 'aboutAtmsInfoTextFortyFive',
      cash: 'aboutAtmsInfoTextFortySix',
      lat: 37.947684777890096,
      lng: 68.79507545163665
    },
    {
      address: 'aboutTerminalsTextFourteen',
      graphic: 'aboutAtmsInfoTextFortyFive',
      cash: 'aboutAtmsInfoTextFortySix',
      lat: 37.533220528806446,
      lng: 68.4747486264298
    },
    {
      address: 'aboutTerminalsTextFifteen',
      graphic: 'aboutAtmsInfoTextFortyFive',
      cash: 'aboutAtmsInfoTextFortySix',
      lat: 37.231909966236145,
      lng: 69.09521797219324
    },
    {
      address: 'aboutTerminalsTextSixteen',
      graphic: 'aboutAtmsInfoTextFortyFive',
      cash: 'aboutAtmsInfoTextFortySix',
      lat: 37.35166676239271,
      lng: 68.67855543992928
    },
    {
      address: 'aboutTerminalsTextSeventeen',
      graphic: 'aboutAtmsInfoTextFortyFive',
      cash: 'aboutAtmsInfoTextFortySix',
      lat: 37.23052618698867,
      lng: 69.10134162341434
    },
    {
      address: 'aboutTerminalsTextEighteen',
      graphic: 'aboutAtmsInfoTextFortyFive',
      cash: 'aboutAtmsInfoTextFortySix',
      lat: 37.834576185947505,
      lng: 68.77680629223237
    },
    {
      address: 'aboutTerminalsTextNineteen',
      graphic: 'aboutAtmsInfoTextFortyFive',
      cash: 'aboutAtmsInfoTextFortySix'
    },
    {
      address: 'aboutTerminalsTextTwenty',
      graphic: 'aboutAtmsInfoTextFortyFive',
      cash: 'aboutAtmsInfoTextFortySix',
      lat: 37.834576185947505,
      lng: 68.77680629223237
    },
    {
      address: 'aboutTerminalsTextTwentyOne',
      graphic: 'aboutAtmsInfoTextFortyFive',
      cash: 'aboutAtmsInfoTextFortySix',
      lat: 38.419035734912605,
      lng: 68.9510612406925
    },
    {
      address: 'aboutTerminalsTextTwentyTwo',
      graphic: 'aboutAtmsInfoTextFortyFive',
      cash: 'aboutAtmsInfoTextFortySix'
    },
    {
      address: 'aboutTerminalsTextTwentyThree',
      graphic: 'aboutAtmsInfoTextFortyFive',
      cash: 'aboutAtmsInfoTextFortySix',
      lat: 37.947684777890096,
      lng: 68.79507545163665
    },
    {
      address: 'aboutTerminalsTextTwentyFour',
      graphic: 'aboutAtmsInfoTextFortyFive',
      cash: 'aboutAtmsInfoTextFortySix',
      lat: 37.265942940978356,
      lng: 68.14375347810767
    },
    {
      address: 'aboutTerminalsTextTwentyFive',
      graphic: 'aboutAtmsInfoTextFortyFive',
      cash: 'aboutAtmsInfoTextFortySix',
      lat: 37.23202660984037,
      lng: 69.09504978402842
    },
    {
      address: 'aboutTerminalsTextTwentySix',
      graphic: 'aboutAtmsInfoTextFortyFive',
      cash: 'aboutAtmsInfoTextFortySix',
      lat: 37.23052618698867,
      lng: 69.10134162341434
    },
    {
      address: 'aboutTerminalsTextTwentySeven',
      graphic: 'aboutAtmsInfoTextFortyFive',
      cash: 'aboutAtmsInfoTextFortySix'
    }
  ]
  shahrituzTerminals: any[] = [
    {
      address: 'aboutTerminalsTextTwentyEight',
      graphic: 'aboutAtmsInfoTextFortyFive',
      cash: 'aboutAtmsInfoTextFortySix',
      lat:37.266736936748046,
      lng: 68.14375081776683
    },
    {
      address: 'aboutTerminalsTextTwentyNine',
      graphic: 'aboutAtmsInfoTextFortyFive',
      cash: 'aboutAtmsInfoTextFortySix',
      lat: 37.264941,
      lng: 68.142894
    },
    {
      address: 'aboutTerminalsTextThirty',
      graphic: 'aboutAtmsInfoTextFortyFive',
      cash: 'aboutAtmsInfoTextFortySix'
    },
    {
      address: 'aboutTerminalsTextThirtyOne',
      graphic: 'aboutAtmsInfoTextFortyFive',
      cash: 'aboutAtmsInfoTextFortySix',
      lat: 37.27091352113215,
      lng: 68.14780437476817
    },
    {
      address: 'aboutTerminalsTextThirtyTwo',
      graphic: 'aboutAtmsInfoTextFortyFive',
      cash: 'aboutAtmsInfoTextFortySix',
      lat: 37.265879793495756,
      lng: 68.14301297246037
    },
    {
      address: 'aboutTerminalsTextThirtyThree',
      graphic: 'aboutAtmsInfoTextFortyFive',
      cash: 'aboutAtmsInfoTextFortySix'
    },
    {
      address: 'aboutTerminalsTextThirtyFour',
      graphic: 'aboutAtmsInfoTextFortyFive',
      cash: 'aboutAtmsInfoTextFortySix',
      lat: 37.27091352113215,
      lng: 68.14780437476817
    },
    {
      address: 'aboutTerminalsTextThirtyFive',
      graphic: 'aboutAtmsInfoTextFortyFive',
      cash: 'aboutAtmsInfoTextFortySix',
      lat: 37.40440211688423,
      lng: 68.18330518555403
    },
    {
      address: 'aboutTerminalsTextThirtySix',
      graphic: 'aboutAtmsInfoTextFortyFive',
      cash: 'aboutAtmsInfoTextFortySix',
      lat: 37.270929095723915,
      lng: 68.14781389850828
    },
    {
      address: 'aboutTerminalsTextThirtySeven',
      graphic: 'aboutAtmsInfoTextFortyFive',
      cash: 'aboutAtmsInfoTextFortySix',

    },
    {
      address: 'aboutTerminalsTextThirtyEight',
      graphic: 'aboutAtmsInfoTextFortyFive',
      cash: 'aboutAtmsInfoTextFortySix'
    },

  ]
  rudakiTerminals: any[] = [
    {
      address: 'aboutTerminalsTextThirtyNine',
      graphic: 'aboutAtmsInfoTextFortyFive',
      cash: 'aboutAtmsInfoTextFortySix',
      lat: 38.44217571403086,
      lng: 68.77431617020443
    },
    {
      address: 'aboutTerminalsTextForty',
      graphic: 'aboutAtmsInfoTextFortyFive',
      cash: 'aboutAtmsInfoTextFortySix',
      lat: 38.51644193923049,
      lng: 68.72903455531606
    },
    {
      address: 'aboutTerminalsTextFortyOne',
      graphic: 'aboutAtmsInfoTextFortyFive',
      cash: 'aboutAtmsInfoTextFortySix',
      lat: 38.31789310128809,
      lng: 69.03685148502663
    },
    {
      address: 'aboutTerminalsTextFortyTwo',
      graphic: 'aboutAtmsInfoTextFortyFive',
      cash: 'aboutAtmsInfoTextFortySix',
      lat: 38.15845610998668,
      lng: 68.86280611455751
    },
    {
      address: 'aboutTerminalsTextFortyThree',
      graphic: 'aboutAtmsInfoTextFortyFive',
      cash: 'aboutAtmsInfoTextFortySix',
      lat: 38.514257365658665,
      lng: 68.74298765044999
    },
    {
      address: 'aboutTerminalsTextFortyFour',
      graphic: 'aboutAtmsInfoTextFortyFive',
      cash: 'aboutAtmsInfoTextFortySix',
      lat: 38.48864331548067,
      lng: 68.78417191555036
    },
    {
      address: 'aboutTerminalsTextFortyFive',
      graphic: 'aboutAtmsInfoTextFortyFive',
      cash: 'aboutAtmsInfoTextFortySix',
      lat: 38.44081604051886,
      lng:  68.77410178489158
    },
    {
      address: 'aboutTerminalsTextFortySix',
      graphic: 'aboutAtmsInfoTextFortyFive',
      cash: 'aboutAtmsInfoTextFortySix',
      lat: 38.31789310128809,
      lng: 69.03685148502663
    },
    {
      address: 'aboutTerminalsTextFortySeven',
      graphic: 'aboutAtmsInfoTextFortyFive',
      cash: 'aboutAtmsInfoTextFortySix'
    },
    {
      address: 'aboutTerminalsTextFortyEight',
      graphic: 'aboutAtmsInfoTextFortyFive',
      cash: 'aboutAtmsInfoTextFortySix',
      lat: 38.44061611917932,
      lng: 68.7722295024488
    }
  ]
  firdavsiTerminals: any[] = [
    {
      address: 'aboutTerminalsTextFortyNine',
      graphic: 'aboutAtmsInfoTextFortyFive',
      cash: 'aboutAtmsInfoTextFortySix',
      lat: 38.55774884481649,
      lng: 68.80793773813296
    },
    {
      address: 'aboutTerminalsTextFifty',
      graphic: 'aboutAtmsInfoTextFortyFive',
      cash: 'aboutAtmsInfoTextFortySix',
      lat: 38.51012676398436,
      lng: 68.23386087525601
    },
    {
      address: 'aboutTerminalsTextFiftyOne',
      graphic: 'aboutAtmsInfoTextFortyFive',
      cash: 'aboutAtmsInfoTextFortySix',
      lat: 38.51015026394243,
      lng: 68.23403628253031
    },
    {
      address: 'aboutTerminalsTextFiftyTwo',
      graphic: 'aboutAtmsInfoTextFortyFive',
      cash: 'aboutAtmsInfoTextFortySix'
    },
    {
      address: 'aboutTerminalsTextFiftyThree',
      graphic: 'aboutAtmsInfoTextFortyFive',
      cash: 'aboutAtmsInfoTextFortySix',
      lat: 38.513386,
      lng: 68.233606
    },
    {
      address: 'aboutTerminalsTextFiftyFour',
      graphic: 'aboutAtmsInfoTextFortyFive',
      cash: 'aboutAtmsInfoTextFortySix',
      lat: 38.59620676769875,
      lng: 68.78644512922176
    },
    {
      address: 'aboutTerminalsTextFiftyFive',
      graphic: 'aboutAtmsInfoTextFortyFive',
      cash: 'aboutAtmsInfoTextFortySix',
      lat: 38.551445493177454,
      lng: 68.7724729233923
    },
  ]
  khujandTerminals: any[] = [
    {
      address: 'aboutTerminalsTextFiftySix',
      graphic: 'aboutAtmsInfoTextFortyFive',
      cash: 'aboutAtmsInfoTextFortySix',
      lat: 40.7454251416812,
      lng: 70.6532405865697
    },
    {
      address: 'aboutTerminalsTextFiftySeven',
      graphic: 'aboutAtmsInfoTextFortyFive',
      cash: 'aboutAtmsInfoTextFortySix',
      lat: 40.648154585648705,
      lng: 69.59697737186997
    },
    {
      address: 'aboutTerminalsTextFiftyEight',
      graphic: 'aboutAtmsInfoTextFortyFive',
      cash: 'aboutAtmsInfoTextFortySix',
      lat: 40.18372038994417,
      lng: 68.85646230817353
    },
    {
      address: 'aboutTerminalsTextFiftyNine',
      graphic: 'aboutAtmsInfoTextFortyFive',
      cash: 'aboutAtmsInfoTextFortySix',
      lat: 39.90268781999013,
      lng: 69.00094544013601
    },
    {
      address: 'aboutTerminalsTextSixty',
      graphic: 'aboutAtmsInfoTextFortyFive',
      cash: 'aboutAtmsInfoTextFortySix',
      lat: 40.15844329527259,
      lng: 69.52216163672212
    },
    {
      address: 'aboutTerminalsTextSixtyOne',
      graphic: 'aboutAtmsInfoTextFortyFive',
      cash: 'aboutAtmsInfoTextFortySix'
    },
    {
      address: 'aboutTerminalsTextSixtyTwo',
      graphic: 'aboutAtmsInfoTextFortyFive',
      cash: 'aboutAtmsInfoTextFortySix',
      lat: 40.66432771565648,
      lng: 70.35635373698958
    },
    {
      address: 'aboutTerminalsTextSixtyThree',
      graphic: 'aboutAtmsInfoTextFortyFive',
      cash: 'aboutAtmsInfoTextFortySix',
      lat: 40.51727262860877,
      lng: 69.32952989304242
    },
    {
      address: 'aboutTerminalsTextSixtyFour',
      graphic: 'aboutAtmsInfoTextFortyFive',
      cash: 'aboutAtmsInfoTextFortySix',
      lat:  39.49702589981844,
      lng: 67.61126435717992
    },
    {
      address: 'aboutTerminalsTextSixtyFive',
      graphic: 'aboutAtmsInfoTextFortyFive',
      cash: 'aboutAtmsInfoTextFortySix'
    },
    {
      address: 'aboutTerminalsTextSixtySix',
      graphic: 'aboutAtmsInfoTextFortyFive',
      cash: 'aboutAtmsInfoTextFortySix'
    },
    {
      address: 'aboutTerminalsTextSixtySeven',
      graphic: 'aboutAtmsInfoTextFortyFive',
      cash: 'aboutAtmsInfoTextFortySix'
    },
    {
      address: 'aboutTerminalsTextSixtyEight',
      graphic: 'aboutAtmsInfoTextFortyFive',
      cash: 'aboutAtmsInfoTextFortySix',
      lat: 40.517280789649625,
      lng: 69.32954516611875
    },
    {
      address: 'aboutTerminalsTextSixtyNine',
      graphic: 'aboutAtmsInfoTextFortyFive',
      cash: 'aboutAtmsInfoTextFortySix',
      lat: 40.28156761785792,
      lng: 69.62303701427719
    },
  ]
}
