import {Component, OnInit} from '@angular/core';
import {Session} from "../../../models/Session";
import {SessionService} from "../../../services/session.service";
import {DataService} from "../../../services/data.service";
import {AthleteDetails} from "../../../models/AthleteDetails";
import {AuthService} from "../../../services/auth.service";
import {AthleteService} from "../../../services/athlete.service";

@Component({
  selector: 'app-session-table',
  templateUrl: './session-table.component.html',
  styleUrls: ['./session-table.component.css']
})
export class SessionTableComponent implements OnInit {
  athlete: AthleteDetails | undefined;
  sessions: Session[] | undefined;

  constructor(
    private sessionService: SessionService,
    private dataService:DataService,
    private authService: AuthService,
    private athleteService:AthleteService) {
    this.getSessions()
  }

  getSessions(): void {
    if(this.authService.getUserRole()==='COACH'){
    this.sessionService.getSessions(this.dataService.getAthlete()?.athleteId).subscribe({
      next: (value) => this.sessions = value,
      error: (error) => console.log(error),
      complete: () => console.log("sessions retrieved")
    })
    }else{
      this.athleteService.getAthleteDetails().subscribe({
        next:(value)=>this.sessionService.getSessions(value.athleteId).subscribe(
          {
            next: (value) => this.sessions = value,
            error: (error) => console.log(error),
            complete: () => console.log("sessions retrieved")
          }
        ),
        error:(error)=>console.log(error),
      })
    }
  }
  public setSession(session:Session){
    this.dataService.setSession(session)
  }
  ngOnInit(): void {
    // this.getSessions()
  }

}
