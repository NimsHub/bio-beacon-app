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

  calculateAcwr(value: number,chronicLoad:number): number {
    // Ensure the value is within the original range
    value = Math.max(21, Math.min(400, value));

    // Map the value to the target range
    const fromRange = 400 - 21;
    const toRange = 0.8 - 0.3;

    // Calculate the mapped value
    const scaledValue = (value - 21) / fromRange;
    const result = scaledValue * toRange + 0.3;

    return result;
  }

}
