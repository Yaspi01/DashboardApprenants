import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddPrenceComponent } from "./add/add.component";
import { IntervalComponent } from "./interval/interval.component";
import { JourComponent } from "./jour/jour.component";
import { ListComponent } from "./list/list.component";
import { AddPresenceComponent } from "./add-presence/add-presence.component";
import { FormsModule, ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    AddPrenceComponent,
    IntervalComponent,
    JourComponent,
    ListComponent,
    AddPresenceComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class ListPresenceModule { }
