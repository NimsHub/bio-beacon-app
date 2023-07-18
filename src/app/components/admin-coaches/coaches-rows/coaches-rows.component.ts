import {Component, Input, OnChanges} from '@angular/core';
import {CoachDetails} from "../../../models/CoachDetails";
import {DataService} from "../../../services/data.service";

@Component({
  selector: 'app-coaches-rows',
  templateUrl: './coaches-rows.component.html',
  styleUrls: ['./coaches-rows.component.css']
})
export class CoachesRowsComponent implements OnChanges{
  @Input() coach?: CoachDetails;
  constructor(private dataService:DataService) {
  }
  ngOnChanges(): void {
  }

  Onclick() {
    this.dataService.setCoachDetails(this.coach)
  }
}
