import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {NationalComponent} from "./national/national.component";
import {GreenComponent} from "./green/green.component";
import {NamelessComponent} from "./nameless/nameless.component";

const routes: Routes = [
  {path: 'cards/national', component: NationalComponent},
  {path: 'cards/green', component: GreenComponent},
  {path: 'cards/nameless', component: NamelessComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CardsRoutingModule { }
