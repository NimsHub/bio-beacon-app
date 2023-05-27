import {Component, Input, OnChanges} from '@angular/core';
import {Session} from "../../../models/Session";
import {Athlete} from "../../../models/Athlete";

@Component({
  selector: 'app-athlete-row',
  templateUrl: './athlete-row.component.html',
  styleUrls: ['./athlete-row.component.css']
})
export class AthleteRowComponent implements OnChanges{
  @Input() athlete?: Athlete;

  ngOnChanges(): void {
  }

}
