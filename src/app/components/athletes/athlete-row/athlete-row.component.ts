import {Component, Input, OnChanges} from '@angular/core';
import {Athlete} from "../../../models/Athlete";
import {DataService} from "../../../services/data.service";

@Component({
  selector: 'app-athlete-row',
  templateUrl: './athlete-row.component.html',
  styleUrls: ['./athlete-row.component.css']
})
export class AthleteRowComponent implements OnChanges{
  @Input() athlete?: Athlete;
  constructor(private dataService:DataService) {
  }
  ngOnChanges(): void {
  }

  Onclick() {
    this.dataService.setAthlete(this.athlete)
  }
}
