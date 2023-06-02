import {Injectable} from '@angular/core';
import {Athlete} from "../models/Athlete";
import {Session} from "../models/Session";
import {AthleteDetails} from "../models/AthleteDetails";

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private athlete: Athlete | undefined;
  private _session: Session | undefined;
  private athleteDetails: AthleteDetails | undefined;
  constructor( ) {
  }
  setAthleteDetails(athleteDetails:AthleteDetails){
    this.athleteDetails = athleteDetails;
  }

  getAthleteDetails():AthleteDetails | undefined{
    return this.athleteDetails;
  }
  get session(): Session | undefined {
    return this._session;
  }

  set session(value: Session | undefined) {
    this._session = value;
  }


  setAthlete(athlete: Athlete | undefined) {
    this.athlete = athlete;
  }

  getAthlete() {
    return this.athlete
  }
}
