import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './views/personal/main/main.component';
import {HeaderComponent} from "./shared/layout/header/header.component";
import {FooterComponent} from "./shared/layout/footer/footer.component";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {CarouselModule} from "ngx-owl-carousel-o";
import {MatSelectModule} from '@angular/material/select';
import {MatTabsModule} from '@angular/material/tabs';
import {LayoutComponent} from "./shared/layout/layout.component";
import {SharedModule} from "./shared/shared.module";
import {PersonalModule} from "./views/personal/personal.module";
import {AboutModule} from "./views/about/about.module";
import {DepositModule} from "./views/deposit/deposit.module";
import {ReactiveFormsModule} from "@angular/forms";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {TranslateLoader, TranslateModule} from "@ngx-translate/core";
import {TranslateHttpLoader} from "@ngx-translate/http-loader";
import { HideOnSmallScreenDirective } from './hide-on-small-screen.directive';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    LayoutComponent,
    HeaderComponent,
    FooterComponent,
    HideOnSmallScreenDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    CarouselModule,
    MatSelectModule,
    MatTabsModule,
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
    SharedModule,
    PersonalModule,
    AboutModule,
    DepositModule,
    ReactiveFormsModule,
  ],
  providers: [HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
