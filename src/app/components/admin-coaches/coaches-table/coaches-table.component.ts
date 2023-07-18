import { Component, OnInit } from '@angular/core';
import {CoachService} from "../../../services/coach.service";
import {CoachDetails} from "../../../models/CoachDetails";

@Component({
  selector: 'app-coaches-table',
  templateUrl: './coaches-table.component.html',
  styleUrls: ['./coaches-table.component.css']
})
export class CoachesTableComponent implements OnInit {
  coaches: CoachDetails[] = [];

  constructor(private coachService: CoachService) {
  }

  getCoachDetails() {
    this.coachService.getCoachDetails().subscribe(
      {
        next: (value) => this.coaches = value,
        error: (error) => console.log(error),
        complete: () => console.log("coaches retrieved")
      }
    );
  }

  ngOnInit(): void {
    this.getCoachDetails()
  }

}

