import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {AthleteService} from "../../services/athlete.service";
import {AthleteDetails} from "../../models/AthleteDetails";
import {DataService} from "../../services/data.service";

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {
  userRole: string | undefined;

  constructor(private authService: AuthService, private athleteService: AthleteService,private dataService: DataService) {
    this.userRole = authService.getUserRole()
  }
logout(){
    this.authService.logout()
}
  setUserDetails() {
    if (this.userRole == 'ATHLETE') {
      this.athleteService.getAthleteDetails().subscribe(
        {
          next: (value) => this.dataService.setAthleteDetails(value),
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
