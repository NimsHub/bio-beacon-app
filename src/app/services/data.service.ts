import {Injectable} from '@angular/core';
import {Athlete} from "../models/Athlete";
import {Session} from "../models/Session";
import {AthleteDetails} from "../models/AthleteDetails";
import {CoachDetails} from "../models/CoachDetails";
import {Coach} from "../models/Coach";

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private athlete: Athlete | undefined;
  private _session: Session | undefined;
  private athleteDetails: AthleteDetails | undefined;
  private coachDetails: CoachDetails | undefined;
  private coach : Coach | undefined;
  constructor( ) {
  }

  setCoach(coach: Coach | undefined){
    this.coach = coach;
  }

  getCoach():Coach | undefined{
    return this.coach;
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
  setSession(value: Session | undefined) {
    this._session = value;
  }
  getSession() {
    return this._session
  }
  setAthlete(athlete: Athlete | undefined) {
    this.athlete = athlete;
  }

  getAthlete() {
    return this.athlete
  }
}
