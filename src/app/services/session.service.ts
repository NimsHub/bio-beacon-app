import {Injectable} from '@angular/core';
import {Session} from "../models/Session";
import {environment} from "../environments/environment.prod";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {SessionDetails} from "../models/SessionDetails";

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  constructor(private http:HttpClient) {
  }

  getSessions(id: string | undefined): Observable<Session[]> {
    return this.http.get<Session[]>(environment.baseURL + '/api/v1/sessions/athlete/' + id)
  }

  getSessionDetails(id:string|undefined):Observable<SessionDetails>{
    return this.http.get<SessionDetails>(environment.baseURL+'/api/v1/sessions/session-details/'+id)
  }
}
