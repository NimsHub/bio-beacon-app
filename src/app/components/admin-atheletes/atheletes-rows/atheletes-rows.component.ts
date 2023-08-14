import {Component, Input, OnChanges} from '@angular/core';
import {Athlete} from "../../../models/Athlete";
import {DataService} from "../../../services/data.service";

@Component({
  selector: 'app-atheletes-rows',
  templateUrl: './atheletes-rows.component.html',
  styleUrls: ['./atheletes-rows.component.css']
})
export class AtheletesRowsComponent implements OnChanges{
  @Input() athlete?: Athlete | undefined;
  constructor(private dataService:DataService) {
  }
  ngOnChanges(): void {
  }

  Onclick() {
    this.dataService.setAthlete(this.athlete)
  }
  onRemoveClick() {
    // this.athlete.isActivated = false;
  }
}
