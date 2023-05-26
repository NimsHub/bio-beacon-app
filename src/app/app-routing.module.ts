import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {HomePageComponent} from "./home-page/home-page.component";
import {ContatUsComponent} from "./contat-us/contat-us.component";
import {LandingComponent} from "./views/landing/landing.component";

import {SidenavComponent} from "./components/sidenav/sidenav.component";
import {SessionTableComponent} from "./components/session-table/session-table.component";

const appRoutes: Routes = [
  {path: 'sign-in', component: LandingComponent},
  {path: 'contact-us', component: ContatUsComponent},
  {
    path: 'dashboard', component: SidenavComponent,
    children: [
      {
        path: 'sessions',
        component: SessionTableComponent,
      }]
  },
  {path: '', component: HomePageComponent}
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
