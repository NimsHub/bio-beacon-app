import {Injectable} from '@angular/core';
import {Athlete} from "../models/Athlete";
import {Session} from "../models/Session";
import {AthleteDetails} from "../models/AthleteDetails";
import {CoachDetails} from "../models/CoachDetails";

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private athlete: Athlete | undefined;
  private _session: Session | undefined;
  private athleteDetails: AthleteDetails | undefined;
  private coachDetails: CoachDetails | undefined;
  constructor( ) {
  }
  setAthleteDetails(athleteDetails:AthleteDetails){
    this.athleteDetails = athleteDetails;
  }

  getAthleteDetails():AthleteDetails | undefined{
    return this.athleteDetails;
  }
  setCoachDetails(coachDetails:CoachDetails){
    this.coachDetails = coachDetails;
  }

  getCoachDetails():CoachDetails | undefined{
    return this.coachDetails;
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
