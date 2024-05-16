import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {BusinessRoutingModule} from './business-routing.module';
import {MainBusinessComponent} from './main-business/main-business.component';
import {CarouselModule} from "ngx-owl-carousel-o";
import {MatTabsModule} from "@angular/material/tabs";
import {SharedModule} from "../../shared/shared.module";
import { EquiringComponent } from './equiring/equiring.component';
import {AccountsComponent} from "./accounts/accounts.component";
import {MatExpansionModule} from "@angular/material/expansion";
import { FinancingComponent } from './financing/financing.component';
import { DepositsComponent } from './deposits/deposits.component';
import {ReactiveFormsModule} from "@angular/forms";
import {TranslateModule} from "@ngx-translate/core";


@NgModule({
  declarations: [
    MainBusinessComponent,
    EquiringComponent,
    AccountsComponent,
    FinancingComponent,
    DepositsComponent
  ],
    imports: [
        CommonModule,
        BusinessRoutingModule,
        CarouselModule,
        MatTabsModule,
        SharedModule,
        MatExpansionModule,
        ReactiveFormsModule,
        TranslateModule,
    ]
})
export class BusinessModule {
}
