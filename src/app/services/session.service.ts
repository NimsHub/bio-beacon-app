import {Injectable} from '@angular/core';
import {Session} from "../models/Session";
import {SESSIONS} from "../models/mock";

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  constructor() {
  }

  getSessions(): Session[] {
    return SESSIONS
  }
}
