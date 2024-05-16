import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MudarabaComponent} from "./mudaraba/mudaraba.component";
import {ManzilComponent} from "./manzil/manzil.component";
import {VakalaComponent} from "./vakala/vakala.component";

const routes: Routes = [
  {path: 'deposit/mudaraba', component: MudarabaComponent},
  {path: 'deposit/manzil', component: ManzilComponent},
  {path: 'deposit/vakala', component: VakalaComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DepositRoutingModule { }
