import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {CurrencyService} from "../../../services/currency.service";

@Component({
  selector: 'app-converter-buy',
  templateUrl: './converter-buy.component.html',
  styleUrls: ['./converter-buy.component.scss']
})
export class ConverterBuyComponent {
  currencies: any = [
    {value: 'TJS', viewValue: 'TJS'},
    {value: 'USD', viewValue: 'USD'},
    {value: 'RUB', viewValue: 'RUB'},
    {value: 'EUR', viewValue: 'EUR'},
  ];
  currencyRate: any[] = [];
  selectedFromCurrency: string = this.currencies[1].value;
  selectedToCurrency: string = this.currencies[0].value;
  fromAmount: number = 100;
  toAmount: any = null;

  constructor(private http: HttpClient,
              private currencyService: CurrencyService) {

  }

  ngOnInit() {
    this.http.get<any>('https://my.tawhid.tj/twbrates/v2/Handler2.ashx')
      .subscribe((response: any) => {
        const data = response.data;
        const cashRateElement = data.find((item: any) => item[0] === 'Cash_Rate');
        // this.cashRateData = cashRateElement ? cashRateElement[1] : null;

        this.currencyRate = this.currencyService.transformData(cashRateElement ? cashRateElement[1] : null);
        this.fromAmount = 100;
        this.convert();
      });

  }

  getCurrencyRate(currencyType: string): number {
    const currency = this.currencyRate.find(c => c.currencyType === currencyType);
    return currency ? currency.rateBuy : 1;
  }
  getCurrencyRateTjs(currencyType: string): number {
    const currency = this.currencyRate.find(c => c.currencyType === currencyType);
    return currency ? currency.rateSell : 1;
  }

  convert() {
    if (this.selectedToCurrency !== 'TJS'){
      const fromRate = this.getCurrencyRateTjs(this.selectedFromCurrency);
      const toRate = this.getCurrencyRateTjs(this.selectedToCurrency);
      this.toAmount = ((this.fromAmount * fromRate) / toRate).toFixed(2);
    } else {
      const fromRate = this.getCurrencyRate(this.selectedFromCurrency);
      const toRate = this.getCurrencyRate(this.selectedToCurrency);
      this.toAmount = ((this.fromAmount * fromRate) / toRate).toFixed(2);
    }
  }

  convertTo() {
    if (this.selectedToCurrency !== 'TJS'){
      const fromRate = this.getCurrencyRateTjs(this.selectedFromCurrency);
      const toRate = this.getCurrencyRateTjs(this.selectedToCurrency);
      this.toAmount = ((this.fromAmount * fromRate) / toRate).toFixed(2);
    } else {
      const fromRate = this.getCurrencyRate(this.selectedFromCurrency);
      const toRate = this.getCurrencyRate(this.selectedToCurrency);
      this.fromAmount = parseFloat(((this.toAmount * toRate) / fromRate).toFixed(2));
    }
  }

  swapCurrencies(){
    const fromCurrency = this.selectedFromCurrency
    const toCurrency = this.selectedToCurrency

    this.selectedFromCurrency = toCurrency;
    this.selectedToCurrency = fromCurrency;
    this.convert()
  }
}
