import {Component, Input, OnChanges} from '@angular/core';
// import {CoachDetails} from "../../../models/CoachDetails";
// import {DataService} from "../../../services/data.service";

//added TEMPORARY to get MOCK data
import { CoachService } from 'src/app/services/coach.service';
import {Coach} from "../../../models/Coach";

@Component({
  selector: 'app-coaches-rows',
  templateUrl: './coaches-rows.component.html',
  styleUrls: ['./coaches-rows.component.css']
})
export class CoachesRowsComponent implements OnChanges{
  @Input() coach?: Coach | undefined;
  constructor(private coachService:CoachService) {
  }
  ngOnChanges(): void {
  }
  Onclick() {
    this.coachService.setMockCoaches(this.coach)
  }
}
