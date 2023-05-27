import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {LoginComponent} from './components/login/login.component';
import {MaterialModule} from "./modules/material/material.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {RegistrationComponent} from './components/registration/registration.component';
import {LandingComponent} from './views/landing/landing.component';
import {TableRowComponent} from './components/sessions/table-row/table-row.component';
import {SessionTableComponent} from './components/sessions/session-table/session-table.component';
import {SidenavComponent} from './components/sidenav/sidenav.component';
import {HomePageComponent} from './home-page/home-page.component';
import {ContatUsComponent} from './contat-us/contat-us.component';
import {AppRoutingModule} from "./app-routing.module";
import {AboutUsComponent} from './about-us/about-us.component';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {AthleteTableComponent} from './components/athletes/athlete-table/athlete-table.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    LandingComponent,
    TableRowComponent,
    SessionTableComponent,
    SidenavComponent,
    ContatUsComponent,
    HomePageComponent,
    SidenavComponent,
    AboutUsComponent,
    AthleteTableComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule,
    FontAwesomeModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
