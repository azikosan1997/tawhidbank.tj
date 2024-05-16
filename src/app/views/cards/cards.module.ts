import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CardsRoutingModule } from './cards-routing.module';
import { NationalComponent } from './national/national.component';
import { GreenComponent } from './green/green.component';
import { NamelessComponent } from './nameless/nameless.component';
import {SharedModule} from "../../shared/shared.module";


@NgModule({
  declarations: [
    NationalComponent,
    GreenComponent,
    NamelessComponent
  ],
  imports: [
    CommonModule,
    CardsRoutingModule,
    SharedModule,

  ]
})
export class CardsModule { }
