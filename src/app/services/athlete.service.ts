import {Injectable} from '@angular/core';
import {ATHLETES} from "../models/mock";
import {AthleteDetails} from "../models/AthleteDetails";
import {HttpClient} from "@angular/common/http";
import {environment} from "../environments/environment.prod";
import {Observable} from "rxjs";
import {Athlete} from "../models/Athlete";

@Injectable({
  providedIn: 'root'
})
export class AthleteService {

  constructor(private http: HttpClient) {}

  getAthletes(): AthleteDetails[] {
    return ATHLETES
  }
  getAthleteDetails():Observable<AthleteDetails>{
   return this.http.get<AthleteDetails>(environment.baseURL + '/api/v1/athletes/get-athlete')
  }
  getAthletesByCoach():Observable<Athlete[]>{
    return this.http.get<Athlete[]>(environment.baseURL + '/api/v1/athletes/coach')
  }
  getAllAthletes():Observable<Athlete[]>{
    return this.http.get<Athlete[]>(environment.baseURL + '/api/v1/athletes/get-all')
  }
}
