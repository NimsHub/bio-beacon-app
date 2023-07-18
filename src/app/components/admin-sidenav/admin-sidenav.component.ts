import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {AthleteService} from "../../services/athlete.service";
import {DataService} from "../../services/data.service";
import {CoachService} from "../../services/coach.service";
import {CoachDetails} from "../../models/CoachDetails";
import {AthleteDetails} from "../../models/AthleteDetails";

@Component({
  selector: 'app-admin-sidenav',
  templateUrl: './admin-sidenav.component.html',
  styleUrls: ['./admin-sidenav.component.css']
})
export class AdminSidenavComponent implements OnInit {
  userRole: string | undefined;
  athlete: AthleteDetails | undefined;
  coach: CoachDetails | undefined;

  constructor(
    private authService: AuthService,
    private athleteService: AthleteService,
    private coachService: CoachService,
    private dataService: DataService
  ) {
    this.userRole = authService.getUserRole()
  }

  logout() {
    this.authService.logout()
  }

  setUserDetails() {
    if (this.userRole == 'ATHLETE') {
      this.athleteService.getAthleteDetails().subscribe(
        {
          next: (value) => {
            this.athlete = value
            this.dataService.setAthleteDetails(value)
          },
          error: (error) => console.log(error),
          complete: () => console.log(this.dataService.getAthleteDetails())
        }
      );
    } else if (this.userRole === 'COACH') {
      this.coachService.getCoachDetails().subscribe(
        {
          next: (value) => {
            this.coach = value
            this.dataService.setCoachDetails(value)
          },
          error: (error) => console.log(error),
          complete: () => console.log(this.dataService.getAthleteDetails())
        }
      );
    }
  }

  ngOnInit(): void {
    this.setUserDetails();
  }
}

