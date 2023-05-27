import {Injectable} from '@angular/core';
import {ATHLETES} from "../models/mock";
import {Athlete} from "../models/Athlete";

@Injectable({
  providedIn: 'root'
})
export class AthleteService {

  constructor() {
  }

  getSessions(): Athlete[] {
    return ATHLETES
  }
}
