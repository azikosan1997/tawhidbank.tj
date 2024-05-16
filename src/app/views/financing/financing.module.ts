import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FinancingRoutingModule } from './financing-routing.module';
import { MurabahaConsumptionComponent } from './murabaha-consumption/murabaha-consumption.component';
import { MurabahaHouseComponent } from './murabaha-house/murabaha-house.component';
import { MurabahaBusinessComponent } from './murabaha-business/murabaha-business.component';
import {SharedModule} from "../../shared/shared.module";
import { AgricultureComponent } from './agriculture/agriculture.component';


@NgModule({
  declarations: [

    MurabahaConsumptionComponent,
       MurabahaHouseComponent,
       MurabahaBusinessComponent,
       AgricultureComponent
  ],
  imports: [
    CommonModule,
    FinancingRoutingModule,
    SharedModule
  ]
})
export class FinancingModule { }
