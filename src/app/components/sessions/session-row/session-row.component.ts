import {Component, Input, OnChanges} from '@angular/core';
import {Session} from "../../../models/Session";
import {Observable} from "rxjs";

@Component({
  selector: 'app-session-row',
  templateUrl: './session-row.component.html',
  styleUrls: ['./session-row.component.css']
})
export class SessionRowComponent implements OnChanges{
  @Input() sessionItem?: Session;

  startDate?: string;
  startTime?: string;
  endDate?: string;
  endTime?: string;
  duration?: string;

  ngOnChanges() {
    if (this.sessionItem) {
      this.startDate = this.getDate(this.sessionItem.startDateTime)
      this.startTime = this.getTime(this.sessionItem.startDateTime)
      this.endDate = this.getDate(this.sessionItem.endDateTime)
      this.endTime = this.getTime(this.sessionItem.endDateTime)

      this.duration = this.getTimeDuration(this.sessionItem.sessionDuration)
    }
  }

  getDate(value: string): string {
    return new Date(value).toDateString().slice(3)
  }

  getTime(value: string): string {
    return new Date(value).toLocaleTimeString()
  }

  getTimeDuration(value: number): string {
    const minutes = Math.floor(value / 60);
    const hours = Math.floor(minutes / 60);

    if (hours > 0) {
      const remainingMinutes = minutes % 60;
      return `${hours}H ${remainingMinutes}M`;
    } else {
      return `${minutes}M`;
    }
  }
}
