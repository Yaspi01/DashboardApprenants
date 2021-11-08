import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddComponent } from "./add/add.component";
import { ListComponent } from "./list/list.component";
import { UpdateComponent } from "./update/update.component";
import { FormsModule, ReactiveFormsModule} from "@angular/forms";
import { RouterModule } from "@angular/router";
import {ListPresenceModule} from "./list-presence/list-presence.module";


@NgModule({
  declarations: [AddComponent,
    ListComponent,
    UpdateComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    ListPresenceModule
  ]
})
export class PageModule { }
