import {Component, Input, OnInit} from '@angular/core';
import {DataService} from "../../services/data.service";
import {SessionService} from "../../services/session.service";
import {ActivityTime} from "../../models/ActivityTime";
import {ActivityService} from "../../services/activity.service";

@Component({
  selector: 'app-activity-times',
  templateUrl: './activity-times.component.html',
  styleUrls: ['./activity-times.component.css']
})
export class ActivityTimesComponent implements OnInit {
  sessionId?: string;
  activityTime?: ActivityTime |undefined
  totalActivityTime?: number
  cyclingFraction?: number
  runningFraction?: number
  pushUpFraction?: number
  walkingFraction?: number
  squatFraction?: number
  tableTennisFraction?: number

  constructor(
    private dataService: DataService,
    private activityService: ActivityService
  ) {
  }

  ngOnInit(): void {
    this.sessionId = this.dataService.getSession()?.sessionId
    this.activityService.getActivityTime(this.sessionId).subscribe({
      next: (value) => {
        this.activityTime = value
        this.totalActivityTime = +this.activityTime.cycling +
          +this.activityTime.tableTennis+
          +this.activityTime.pushUp+
          +this.activityTime.walking+
          +this.activityTime.running+
          +this.activityTime.squat

        this.cyclingFraction =Math.floor((400/this.totalActivityTime)* +this.activityTime.cycling)
        this.runningFraction =Math.floor((400/this.totalActivityTime)* +this.activityTime.running)
        this.pushUpFraction =Math.floor((400/this.totalActivityTime)* +this.activityTime.pushUp)
        this.walkingFraction =Math.floor((400/this.totalActivityTime)* +this.activityTime.walking)
        this.squatFraction =Math.floor((400/this.totalActivityTime)* +this.activityTime.squat)
        this.tableTennisFraction =Math.floor((400/this.totalActivityTime)* +this.activityTime.tableTennis)

        console.log(this.activityTime)
      },
      error: (error) =>
        console.log(error),
      complete: () => {
        console.log("sessions retrieved")
    console.log(this.activityTime)
      },
    })
  }
}
