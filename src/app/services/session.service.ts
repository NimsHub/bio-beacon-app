import {Injectable} from '@angular/core';
import {Session} from "../models/Session";
import {SESSIONS} from "../models/mock";
import {Athlete} from "../models/Athlete";
import {environment} from "../environments/environment.prod";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  constructor(private http:HttpClient) {
  }

  getSessions(id: string | undefined): Observable<Session[]> {
    return this.http.get<Session[]>(environment.baseURL + '/api/v1/sessions/athlete/' + id)
  }
}
