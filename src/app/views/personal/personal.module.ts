import {NgModule} from '@angular/core';
import {CommonModule, NgIf} from '@angular/common';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {VgCoreModule} from '@videogular/ngx-videogular/core';
import {VgControlsModule} from '@videogular/ngx-videogular/controls';
import {VgOverlayPlayModule} from '@videogular/ngx-videogular/overlay-play';
import {VgBufferingModule} from '@videogular/ngx-videogular/buffering';

import {PersonalRoutingModule} from './personal-routing.module';
import {DepositComponent} from './deposit/deposit.component';
import {FinancingComponent} from './financing/financing.component';
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatNativeDateModule} from "@angular/material/core";
import {MatExpansionModule} from "@angular/material/expansion";
import {TransfersComponent} from './transfers/transfers.component';
import {AutoComponent} from './auto/auto.component';
import {TawhidPayComponent} from './tawhidpay/tawhidpay.component';
import {SharedModule} from "../../shared/shared.module";
import {CardsComponent} from './cards/cards.component';
import {MatDialogModule} from "@angular/material/dialog";
import {MatSnackBarModule} from "@angular/material/snack-bar";
import {HttpClientModule} from "@angular/common/http";
import {QuestionsComponent} from './questions/questions.component';
import {TranslateModule} from "@ngx-translate/core";
import {MatRadioModule} from "@angular/material/radio";
import {MatCheckboxModule} from "@angular/material/checkbox";


@NgModule({
  declarations: [
    DepositComponent,
    FinancingComponent,
    TransfersComponent,
    AutoComponent,
    TawhidPayComponent,
    CardsComponent,
    QuestionsComponent,
  ],
  imports: [
    CommonModule,
    PersonalRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    NgIf,
    MatButtonModule,
    MatIconModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatExpansionModule,
    VgCoreModule,
    VgControlsModule,
    VgOverlayPlayModule,
    VgBufferingModule,
    SharedModule,
    MatDialogModule,
    MatSnackBarModule,
    ReactiveFormsModule,
    HttpClientModule,
    TranslateModule,
    MatCheckboxModule,
    MatRadioModule,
    SharedModule
  ]
})
export class PersonalModule {
}
