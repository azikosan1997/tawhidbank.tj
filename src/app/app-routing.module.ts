import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LayoutComponent} from "./shared/layout/layout.component";
import {MainComponent} from "./views/personal/main/main.component";

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', redirectTo: 'personal', pathMatch: 'full' },
      { path: 'personal', loadChildren: () => import('./views/personal/personal.module').then(m => m.PersonalModule) },
      { path: 'personal', loadChildren: () => import('./views/deposit/deposit.module').then(m => m.DepositModule) },
      { path: 'personal', loadChildren: () => import('./views/financing/financing.module').then(m => m.FinancingModule) },
      { path: 'personal', loadChildren: () => import('./views/cards/cards.module').then(m => m.CardsModule) },
      { path: 'business', loadChildren: () => import('./views/business/business.module').then(m => m.BusinessModule) },
      { path: 'about', loadChildren: () => import('./views/about/about.module').then(m => m.AboutModule) }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {anchorScrolling: 'enabled', scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
