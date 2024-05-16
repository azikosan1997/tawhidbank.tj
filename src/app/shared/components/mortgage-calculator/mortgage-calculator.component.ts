import {Component} from '@angular/core';
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-mortgage-calculator',
  templateUrl: './mortgage-calculator.component.html',
  styleUrls: ['./mortgage-calculator.component.scss']
})
export class MortgageCalculatorComponent {
  currencyArray: string[] = ['personalMainCalculateMortgageTabOne', 'personalMainCalculateMortgageTabTwo'];
  activeCurrency: number = 0;

  loanAmount: number = 10000;
  initialFee: number = 0;
  loanPeriod: number = 12;
  currentRate: number = 25;
  totalAmount: number = 0;
  extraChange: number = 0;
  currency: string = 'TJS'

  constructor(private translate: TranslateService) {

  }

  translateText(key: string): string {
    return this.translate.instant(key);
  }

  setCurrency(index: number){
    this.activeCurrency = index
    if (index === 0){
      this.currency = 'TJS';
      this.currentRate = 24;
    } else {
      this.currency = 'USD'
      this.currentRate = 13;
    }
  }
  calculateMonthlyPayment(): number {
    const loanAmountWithFee = this.loanAmount - this.initialFee;
    const monthlyRate = this.currentRate / 100 / 12;
    const numberOfPayments = this.loanPeriod;
    const numerator = monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments);
    const denominator = Math.pow(1 + monthlyRate, numberOfPayments) - 1;

    const monthlyPayment = (loanAmountWithFee * (numerator / denominator)) || 0;

    this.totalAmount = monthlyPayment * this.loanPeriod;
    this.extraChange = this.totalAmount - this.loanAmount

    return monthlyPayment;
  }
  updateSlider() {
    this.loanAmount = Math.min(500000, Math.max(10000, this.loanAmount));
  }

  calculateFillPercentage(): number {
    return ((this.loanAmount - 10000) / (500000 - 10000)) * 100;
  }

  updateSliderTwo() {
    this.initialFee = Math.min(this.loanAmount, Math.max(0, +this.initialFee));
  }

  calculateFillPercentageTwo(): number {
    return (+this.initialFee / this.loanAmount) * 100;
  }
  updateSliderThree() {
    this.loanPeriod = Math.min(60, Math.max(1, this.loanPeriod));
  }

  calculateFillPercentageThree(): number {
    return (this.loanPeriod / 60) * 100;
  }
}
