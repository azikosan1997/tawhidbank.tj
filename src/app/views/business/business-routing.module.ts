import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MainBusinessComponent} from "./main-business/main-business.component";
import {EquiringComponent} from "./equiring/equiring.component";
import {AccountsComponent} from "./accounts/accounts.component";
import {FinancingComponent} from "./financing/financing.component";
import {DepositsComponent} from "./deposits/deposits.component";

const routes: Routes = [
  {path:'', component: MainBusinessComponent},
  {path:'merchant-acquiring', component: EquiringComponent},
  {path:'accounting', component: AccountsComponent},
  {path:'financing', component: FinancingComponent},
  {path:'deposits', component: DepositsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BusinessRoutingModule { }
