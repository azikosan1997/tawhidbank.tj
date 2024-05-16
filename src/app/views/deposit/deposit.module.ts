import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DepositRoutingModule } from './deposit-routing.module';
import { MudarabaComponent } from './mudaraba/mudaraba.component';
import {SharedModule} from "../../shared/shared.module";
import { ManzilComponent } from './manzil/manzil.component';
import { VakalaComponent } from './vakala/vakala.component';


@NgModule({
  declarations: [
    MudarabaComponent,
    ManzilComponent,
    VakalaComponent
  ],
  imports: [
    CommonModule,
    DepositRoutingModule,
    SharedModule
  ]
})
export class DepositModule { }
