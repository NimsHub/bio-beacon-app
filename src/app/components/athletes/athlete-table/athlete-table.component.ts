import {Component, OnInit} from '@angular/core';
import {AthleteService} from "../../../services/athlete.service";
import {Athlete} from "../../../models/Athlete";

@Component({
  selector: 'app-athlete-table',
  templateUrl: './athlete-table.component.html',
  styleUrls: ['./athlete-table.component.css']
})
export class AthleteTableComponent implements OnInit {
  athletes: Athlete[] = [];

  constructor(private athleteService: AthleteService) {
  }

  ngOnInit(): void {
    this.athletes = this.athleteService.getSessions()
  }

}
