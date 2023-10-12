import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Session} from "../models/Session";
import {environment} from "../environments/environment.prod";
import {SessionDetails} from "../models/SessionDetails";
import {ActivityTime} from "../models/ActivityTime";

@Injectable({
  providedIn: 'root'
})
export class ActivityService {

  constructor(private http:HttpClient) {
  }
  getActivityTime(id: string | undefined): Observable<ActivityTime> {
    return this.http.get<ActivityTime>(environment.baseURL + '/api/v1/activities/activity/' + id)
  }

}
