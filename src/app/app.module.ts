import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './components/login/login.component';
import { MaterialModule } from './modules/material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegistrationComponent } from './components/registration/registration.component';
import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { LandingComponent } from './views/landing/landing.component';
import { TableRowComponent } from './components/table-row/table-row.component';
import { SessionTableComponent } from './components/session-table/session-table.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ContatUsComponent } from './contat-us/contat-us.component';

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
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    MatTabsModule,
    MatButtonToggleModule,
    MatSidenavModule,
    MatCheckboxModule,
    MatToolbarModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
