import {Component, Input, OnChanges} from '@angular/core';
import {CoachDetails} from "../../../models/CoachDetails";
import {DataService} from "../../../services/data.service";
import {Coach} from "../../../models/Coach";

@Component({
  selector: 'app-coaches-rows',
  templateUrl: './coaches-rows.component.html',
  styleUrls: ['./coaches-rows.component.css']
})
export class CoachesRowsComponent implements OnChanges{
  @Input() coach?: Coach;
  constructor(private dataService:DataService) {
  }
  ngOnChanges(): void {
  }

  Onclick() {
    this.dataService.setCoach(this.coach)
  }
}
