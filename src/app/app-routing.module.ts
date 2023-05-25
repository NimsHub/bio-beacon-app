import { NgModule } from "@angular/core";
import { RouterModule , Routes } from "@angular/router";
import { HomePageComponent } from "./home-page/home-page.component";
import { ContatUsComponent } from "./contat-us/contat-us.component";
import { LandingComponent } from "./views/landing/landing.component";

import { SidenavComponent } from "./components/sidenav/sidenav.component";

const appRoutes: Routes = [
    {path:'', component: HomePageComponent},
    {path: 'contact-us', component: ContatUsComponent},
    {path: 'sign-in', component: LandingComponent},

    //START-TESTING ROUTES
    {path: 'sessions', component: SidenavComponent}
    //END-TESTING ROUTES
]

@NgModule({
    imports:[
        RouterModule.forRoot(appRoutes)
    ],
    exports: [
        RouterModule
    ]

})
export class AppRoutingModule{

}