import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ListComponent } from './page/list/list.component';
import { HttpClientModule } from '@angular/common/http';
import { AddComponent } from './page/add/add.component';
import { ReactiveFormsModule } from '@angular/forms';
import { UpdateComponent } from './page/update/update.component';
import { JourComponent } from './page/list-presence/jour/jour.component';
import { IntervalComponent } from './page/list-presence/interval/interval.component';
import { AddPresenceComponent } from './page/list-presence/add-presence/add-presence.component';
import { AddFormateurComponent } from './page/formateur/add-formateur/add-formateur.component';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    AddComponent,
    UpdateComponent,
    JourComponent,
    IntervalComponent,
    AddPresenceComponent,
    AddFormateurComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
