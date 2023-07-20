import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {AthleteDetails} from "../models/AthleteDetails";
import {environment} from "../environments/environment.prod";
import {HttpClient} from "@angular/common/http";
import {CoachDetails} from "../models/CoachDetails";
import {Coach} from "../models/Coach";

@Injectable({
  providedIn: 'root'
})
export class CoachService {

  constructor(private http:HttpClient) { }
  getCoachDetails():Observable<CoachDetails>{
    return this.http.get<CoachDetails>(environment.baseURL + '/api/v1/coaches/get-coach')
  }

  getCoaches():Observable<Coach[]>{
    return this.http.get<Coach[]>(environment.baseURL + '/api/v1/coaches/get-all')
  }
}
