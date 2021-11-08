import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './page/add/add.component';
import { ListComponent } from './page/list/list.component';
import { UpdateComponent } from './page/update/update.component';
import {IntervalComponent} from './page/list-presence/interval/interval.component';
import { AddPresenceComponent } from './page/list-presence/add-presence/add-presence.component';
import {AddPrenceComponent} from "./page/list-presence/add/add.component";

const routes: Routes = [
{
  path:'list',
  component:ListComponent
},
{
  path:'add',
  component:AddComponent
},
{
  path:'update/:id',
  component:UpdateComponent
},
{
  path:'add-presence',
  component:AddPrenceComponent
},
{
  path:'presence-intervall',
  component:IntervalComponent
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
