import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {SharedRoutingModule} from './shared-routing.module';
import {NewsComponent} from "./components/news/news.component";
import {FaqComponent} from "./components/faq/faq.component";
import {FeedbackComponent} from './components/feedback/feedback.component';
import {PersonalHeaderComponent} from './components/personal-header/personal-header.component';
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {MatMenuModule} from "@angular/material/menu";
import {BusinessHeaderComponent} from './components/business-header/business-header.component';
import {AboutHeaderComponent} from './components/about-header/about-header.component';
import {AboutNavigationComponent} from './components/about-navigation/about-navigation.component';
import {RequestFormComponent} from './components/request-form/request-form.component';
import {StepsComponent} from './components/steps/steps.component';
import {DocumetsComponent} from './components/documets/documets.component';
import {BannerProductComponent} from './components/banner-product/banner-product.component';
import {ProductConditionComponent} from './components/product-condition/product-condition.component';
import {HowToOpenComponent} from './components/how-to-open/how-to-open.component';
import {TabPanelComponent} from './components/tab-panel/tab-panel.component';
import {FormComponent} from './components/form/form.component';
import {CardManagementsComponent} from './components/card-managements/card-managements.component';
import {TabCardsComponent} from './components/tab-cards/tab-cards.component';
import {AddressComponent} from './components/address/address.component';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {PQuestionsComponent} from './components/p-questions/p-questions.component';
import {MatExpansionModule} from "@angular/material/expansion";
import {LoanPaymentComponent} from './components/loan-payment/loan-payment.component';
import {FinancingFormComponent} from './components/financing-form/financing-form.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {TabFinancingComponent} from './components/tab-financing/tab-financing.component';
import {FinancingCalculatorComponent} from './components/financing-calculator/financing-calculator.component';
import {MortgageCalculatorComponent} from './components/mortgage-calculator/mortgage-calculator.component';
import {MatOptionModule} from "@angular/material/core";
import {MatSelectModule} from "@angular/material/select";
import {ConverterComponent} from './components/converter/converter.component';
import {RateTabeComponent} from './components/rate-tabe/rate-tabe.component';
import {MatTabsModule} from "@angular/material/tabs";
import {
  AutoFinancingCalculatorComponent
} from './components/auto-financing-calculator/auto-financing-calculator.component';
import {MatDialogModule} from "@angular/material/dialog";
import {BranchInfoComponent} from './components/branch-info/branch-info.component';
import {PersonGraphicComponent} from './components/person-graphic/person-graphic.component';
import {FileGetterComponent} from './components/file-getter/file-getter.component';
import {ConverterBuyComponent} from './components/converter-buy/converter-buy.component';
import {LanguageToggleComponent} from './components/language-toggle/language-toggle.component';
import {PersonInfoComponent} from './components/person-info/person-info.component';
import {TranslateModule} from "@ngx-translate/core";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatRadioModule} from "@angular/material/radio";
import { RegionDropdownComponent } from './components/region-dropdown/region-dropdown.component';
import { BusinessRegionDropdownComponent } from './components/business-region-dropdown/business-region-dropdown.component';

@NgModule({
  declarations: [
    NewsComponent,
    FaqComponent,
    FeedbackComponent,
    PersonalHeaderComponent,
    BusinessHeaderComponent,
    AboutHeaderComponent,
    AboutNavigationComponent,
    RequestFormComponent,
    StepsComponent,
    DocumetsComponent,
    BannerProductComponent,
    ProductConditionComponent,
    HowToOpenComponent,
    TabPanelComponent,
    FormComponent,
    CardManagementsComponent,
    TabCardsComponent,
    AddressComponent,
    PQuestionsComponent,
    LoanPaymentComponent,
    FinancingFormComponent,
    TabFinancingComponent,
    FinancingCalculatorComponent,
    MortgageCalculatorComponent,
    ConverterComponent,
    RateTabeComponent,
    AutoFinancingCalculatorComponent,
    BranchInfoComponent,
    PersonGraphicComponent,
    FileGetterComponent,
    ConverterBuyComponent,
    LanguageToggleComponent,
    PersonInfoComponent,
    RegionDropdownComponent,
    BusinessRegionDropdownComponent,
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatExpansionModule,
    FormsModule,
    MatDatepickerModule,
    ReactiveFormsModule,
    MatOptionModule,
    MatSelectModule,
    MatTabsModule,
    MatDialogModule,
    TranslateModule,
    MatCheckboxModule,
    MatRadioModule

  ],
  exports: [
    NewsComponent,
    FaqComponent,
    FeedbackComponent,
    PersonalHeaderComponent,
    BusinessHeaderComponent,
    AboutHeaderComponent,
    AboutNavigationComponent,
    RequestFormComponent,
    StepsComponent,
    DocumetsComponent,
    BannerProductComponent,
    ProductConditionComponent,
    HowToOpenComponent,
    TabPanelComponent,
    FormComponent,
    CardManagementsComponent,
    TabCardsComponent,
    AddressComponent,
    PQuestionsComponent,
    LoanPaymentComponent,
    FinancingFormComponent,
    TabFinancingComponent,
    FinancingCalculatorComponent,
    MortgageCalculatorComponent,
    ConverterComponent,
    RateTabeComponent,
    AutoFinancingCalculatorComponent,
    BranchInfoComponent,
    PersonGraphicComponent,
    FileGetterComponent,
    ConverterBuyComponent,
    LanguageToggleComponent,
    PersonInfoComponent,
    RegionDropdownComponent,
    BusinessRegionDropdownComponent
  ]
})
export class SharedModule {
}
