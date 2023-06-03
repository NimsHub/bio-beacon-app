import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, tap} from "rxjs";
import {LoginResponse} from "../models/LoginResponse";
import {environment} from "../environments/environment.prod";
import {Router} from "@angular/router";
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient,private router:Router) { }

  login(credentials: { password: string; email: string; }):Observable<any>{
    console.log(credentials)
    return this.http.post<LoginResponse>(environment.baseURL+'/api/v1/auth/authenticate', credentials).pipe(
      tap(response =>{
        if(response.token){
          localStorage.setItem('authToken',response.token)
          this.router.navigate(['/dashboard'])
        }
      })
    );
  }
logout(){
    localStorage.removeItem('authToken')
  this.router.navigate(['/sign-in'])
}
  getUserRole(){
   let token= localStorage.getItem('authToken')
    if (token) {
    let jwtData = token.split('.')[1]
    let decodedJwtJsonData = window.atob(jwtData)
    let decodedJwtData = JSON.parse(decodedJwtJsonData)
      return decodedJwtData.role
    }
  }
}
