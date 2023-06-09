import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {HomePageComponent} from "./home-page/home-page.component";
import {ContatUsComponent} from "./contat-us/contat-us.component";
import {LandingComponent} from "./views/landing/landing.component";

import {SidenavComponent} from "./components/sidenav/sidenav.component";
import {SessionTableComponent} from "./components/sessions/session-table/session-table.component";
import {AboutUsComponent} from "./about-us/about-us.component";
import {AthleteTableComponent} from "./components/athletes/athlete-table/athlete-table.component";
import {ErrorPageComponent} from "./components/error-page/error-page.component";
import {ChartComponent} from "./components/chart/chart.component";
import {DevicesComponent} from "./components/devices/devices.component";
import {AuthGuard} from "./guards/auth.guard";

const appRoutes: Routes = [
  {path: 'sign-in', component: LandingComponent},
  {path: 'contact', component: ContatUsComponent},
  {path: 'about', component: AboutUsComponent},
  {
    path: 'dashboard', component: SidenavComponent,canActivate:[AuthGuard],
    children: [
      { path: 'sessions/session', component: ChartComponent },
      { path: 'sessions', component: SessionTableComponent },
      { path: 'athletes', component: AthleteTableComponent },
      { path: 'devices', component: DevicesComponent },
      ]
  },
  {path: '', component: HomePageComponent},
  {path: '**', component: ErrorPageComponent}
]

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]

})
export class AppRoutingModule {

}
