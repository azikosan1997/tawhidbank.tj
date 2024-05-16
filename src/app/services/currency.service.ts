import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {
  getCurrecyId(currencyType: string): number {
    const currencyIdMap: { [key: string]: number } = {
      'USD': 840,
      'RUB': 810,
      'EUR': 978,
      'TJS': 972
    };

    return currencyIdMap[currencyType] || 0;
  }

  transformData(inputArray: any[][]): any[] {
    return inputArray.map((item, index) => {
      const [currencyType, rateSell, rateBuy] = item;
      const currencyId = this.getCurrecyId(currencyType);

      return {
        id: index + 1,
        currencyType,
        currencyId,
        rateSell: parseFloat(rateSell),
        rateBuy: parseFloat(rateBuy)
      };
    });
  }
}
