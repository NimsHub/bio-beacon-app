import {Component, OnInit} from '@angular/core';
import {DataService} from "../../services/data.service";
import {ActivityTime} from "../../models/ActivityTime";
import {ActivityService} from "../../services/activity.service";

@Component({
  selector: 'app-activity-times',
  templateUrl: './activity-times.component.html',
  styleUrls: ['./activity-times.component.css']
})
export class ActivityTimesComponent implements OnInit {
  sessionId?: string;
  activityTime?: ActivityTime | undefined
  totalActivityTime?: number
  cyclingFraction?: number
  runningFraction?: number
  pushUpFraction?: number
  walkingFraction?: number
  squatFraction?: number
  tableTennisFraction?: number

  cyclingCalories?: number
  valueF?: number
  runningCalories?: number
  pushUpCalories?: number
  walkingCalories?: number
  squatCalories?: number
  tableTennisCalories?: number
  totalCalories?: number

  ACWR?: number
  acuteWorkload?: number
  chronicWorkload?: number

  constructor(
    private dataService: DataService,
    private activityService: ActivityService
  ) {
  }

  ngOnInit(): void {
    this.sessionId = this.dataService.getSession()?.sessionId

    this.activityService.getActivityTime(this.sessionId).subscribe({
      next: (value) => {

        this.acuteWorkload = this.activityTime?.acuteWorkload
        this.chronicWorkload = this.activityTime?.chronicWorkload
        let variable = Math.random() * 50
this.activityTime=value

        this.totalActivityTime = +this.activityTime.cycling +
          +this.activityTime.tableTennis +
          +this.activityTime.pushUp +
          +this.activityTime.walking +
          +this.activityTime.running +
          +this.activityTime.squat


        this.cyclingFraction = Math.floor((400 / this.totalActivityTime) * +this.activityTime.cycling)
        this.runningFraction = Math.floor((400 / this.totalActivityTime) * +this.activityTime.running)
        this.pushUpFraction = Math.floor((400 / this.totalActivityTime) * +this.activityTime.pushUp)
        this.walkingFraction = Math.floor((400 / this.totalActivityTime) * +this.activityTime.walking)
        this.squatFraction = Math.floor((400 / this.totalActivityTime) * +this.activityTime.squat)
        this.tableTennisFraction = Math.floor((400 / this.totalActivityTime) * +this.activityTime.tableTennis)
        console.log(this.runningFraction)
        console.log(this.walkingFraction)
        this.cyclingCalories = Math.floor(+this.activityTime.cycling * 0.175)
        this.runningCalories = Math.floor(+this.activityTime.running * 0.186)
        this.pushUpCalories = Math.floor(+this.activityTime.pushUp * 0.094)
        this.walkingCalories = Math.floor(+this.activityTime.walking * 0.069)
        this.squatCalories = Math.floor(+this.activityTime.squat * 0.069)
        this.tableTennisCalories = Math.floor(+this.activityTime.tableTennis * 0.097)

        this.totalCalories = this.cyclingCalories + this.runningCalories + this.pushUpCalories + this.walkingCalories + this.squatCalories + this.tableTennisCalories

        // @ts-ignore
        this.ACWR = this.dataService.calculateAcwr(this.totalCalories, this.chronicWorkload).toFixed(2);


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
