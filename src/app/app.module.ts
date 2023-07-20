import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {LoginComponent} from './components/login/login.component';
import {MaterialModule} from "./modules/material/material.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {RegistrationComponent} from './components/registration/registration.component';
import {LandingComponent} from './views/landing/landing.component';
import {SessionTableComponent} from './components/sessions/session-table/session-table.component';
import {SidenavComponent} from './components/sidenav/sidenav.component';
import {HomePageComponent} from './home-page/home-page.component';
import {ContatUsComponent} from './contat-us/contat-us.component';
import {AppRoutingModule} from "./app-routing.module";
import {AboutUsComponent} from './about-us/about-us.component';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {AthleteTableComponent} from './components/athletes/athlete-table/athlete-table.component';
import { SessionRowComponent } from './components/sessions/session-row/session-row.component';
import { ErrorPageComponent } from './components/error-page/error-page.component';
import { AthleteRowComponent } from './components/athletes/athlete-row/athlete-row.component';
import {ChartComponent} from "./components/chart/chart.component";
import {NgChartsModule} from "ng2-charts";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import { DevicesComponent } from './components/devices/devices.component';
import {TokenInterceptor} from "./services/token.interceptor";
import { DeviceRowComponent } from './components/devices/device-row/device-row.component';
import {NgxQRCodeModule} from "@techiediaries/ngx-qrcode";
import {AdminSidenavComponent} from './components/admin-sidenav/admin-sidenav.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { CoachesTableComponent } from './components/admin-coaches/coaches-table/coaches-table.component';
import { CoachesRowsComponent } from './components/admin-coaches/coaches-rows/coaches-rows.component';
import { AtheletesRowsComponent } from './components/admin-atheletes/atheletes-rows/atheletes-rows.component';
import { AtheletesTableComponent } from './components/admin-atheletes/atheletes-table/atheletes-table.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ChartComponent,
    RegistrationComponent,
    LandingComponent,
    SessionTableComponent,
    SidenavComponent,
    ContatUsComponent,
    HomePageComponent,
    SidenavComponent,
    AboutUsComponent,
    AthleteTableComponent,
    SessionRowComponent,
    ErrorPageComponent,
    AthleteRowComponent,
    DevicesComponent,
    DeviceRowComponent,
    AdminSidenavComponent,
    AdminDashboardComponent,
    CoachesTableComponent,
    CoachesRowsComponent,
    AtheletesRowsComponent,
    AtheletesTableComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule,
    FontAwesomeModule,
    FontAwesomeModule,
    NgChartsModule,
    NgxQRCodeModule
  ],
  providers: [  {provide:HTTP_INTERCEPTORS,useClass:TokenInterceptor,multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
