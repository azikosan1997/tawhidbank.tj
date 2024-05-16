import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MainComponent} from "./main/main.component";
import {DepositComponent} from "./deposit/deposit.component";
import {FinancingComponent} from "./financing/financing.component";
import {TransfersComponent} from "./transfers/transfers.component";
import {AutoComponent} from "./auto/auto.component";
import {TawhidPayComponent} from "./tawhidpay/tawhidpay.component";
import {CardsComponent} from "./cards/cards.component";
import {QuestionsComponent} from "./questions/questions.component";

const routes: Routes = [
  {path: '', component: MainComponent},
  {path: 'deposit', component: DepositComponent},
  {path: 'financing', component: FinancingComponent},
  {path: 'transfers', component: TransfersComponent},
  {path: 'auto-financing', component: AutoComponent},
  {path: 'tawhid-pay', component: TawhidPayComponent},
  {path: 'account-management', component: TawhidPayComponent},
  {path: 'account-management', component: TawhidPayComponent},
  {path: 'cards', component: CardsComponent},
  {path: 'questions', component: QuestionsComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PersonalRoutingModule { }
