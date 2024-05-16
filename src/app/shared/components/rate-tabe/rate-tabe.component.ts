import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {MyObject} from "../../../../types/rate.type";
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-rate-tabe',
  templateUrl: './rate-tabe.component.html',
  styleUrls: ['./rate-tabe.component.scss']
})
export class RateTabeComponent implements OnInit{
  cashRateData: any;
  moneyTransferRateData: any;
  nonCashRateData: any;
  updateDataTime: string = '';
  constructor(private http: HttpClient) {

  }

  ngOnInit() {
    this.http.get<any>('https://my.tawhid.tj/twbrates/v2/Handler2.ashx')
      .subscribe((response: any) => {
        const data = response.data;

        let time = new Date();
        let hours = time.getHours().toString().padStart(2, '0');
        let minutes = time.getMinutes().toString().padStart(2, '0');
        let formattedTime = `${hours}:${minutes}`;
        this.updateDataTime = response.bdate + ' ' + formattedTime;

        const cashRateElement = data.find((item: any) => item[0] === 'Cash_Rate');
        this.cashRateData = cashRateElement ? cashRateElement[1] : null;

        const moneyTransferRateElement = data.find((item: any) => item[0] === 'MoneyTransfer_Rate');
        this.moneyTransferRateData = moneyTransferRateElement ? moneyTransferRateElement[1] : null;

        const nonCashRateElement = data.find((item: any) => item[0] === 'NonCash_Rate');
        this.nonCashRateData = nonCashRateElement ? nonCashRateElement[1] : null;
      });
  }
}
