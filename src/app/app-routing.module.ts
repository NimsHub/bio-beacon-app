import { NgModule } from "@angular/core";
import { RouterModule , Routes } from "@angular/router";
import { HomePageComponent } from "./home-page/home-page.component";
import { ContatUsComponent } from "./contat-us/contat-us.component";
import { LoginComponent } from "./components/login/login.component";

const appRoutes: Routes = [
    {path:'', component: HomePageComponent},
    {path: 'contact-us', component: ContatUsComponent},
    {path: 'sign-in', component: LoginComponent}
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