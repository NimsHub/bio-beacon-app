import { Injectable } from '@angular/core';
import {Session} from "../models/Session";
import {DEVICES} from "../models/mock";
import {Device} from "../models/Device";
import {CoachDetails} from "../models/CoachDetails";
import {environment} from "../environments/environment.prod";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DeviceService {

  constructor(private http:HttpClient) {
  }

  getDevices(): Observable<Device[]> {
    return this.http.get<Device[]>(environment.baseURL + '/api/v1/devices')
  }

  createDevice(){
    return this.http.post(environment.baseURL + '/api/v1/devices',null)
  }
}
