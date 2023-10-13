import {Component, ViewChild, Input, OnInit} from '@angular/core';
import {ChartConfiguration, ChartType} from 'chart.js';
import {BaseChartDirective} from 'ng2-charts';
import {SessionService} from "../../services/session.service";
import {DataService} from "../../services/data.service";
import {AuthService} from "../../services/auth.service";
import {AthleteService} from "../../services/athlete.service";
import {SessionDetails} from "../../models/SessionDetails";
import {Session} from "../../models/Session";

interface chartData {
  lineChartData: ChartConfiguration['data'],
  lineChartOptions: ChartConfiguration['options']
}

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {
  @Input() chartName?: string;
  lineChartDataArray?: chartData[] | undefined | null = [];
  sessionDetails: SessionDetails | undefined;
  session?: Session

  startDate?: string;
  startTime?: string;
  endDate?: string;
  endTime?: string;

  constructor(
    private sessionService: SessionService,
    private dataService: DataService) {
  }

  ngOnInit(): void {
    this.session = this.dataService.getSession()
    this.sessionService.getSessionDetails(this.dataService.getSession()?.sessionId).subscribe({
      next: (value) => {
        let asd = {
          HeartRate: value.heartRate.split(",").map(function (value) {
            return parseInt(value, 10);
          }),
          RespirationRate: value.respirationRate.split(",").map(function (value) {
            return parseInt(value, 10);
          }),
          BloodOxygen: value.bloodOxygen.split(",").map(function (value) {
            return parseInt(value, 10);
          })
        }
        for (const key in asd) {
          // @ts-ignore
          this.lineChartDataArray.push(this.lineChartDataGen(asd[key], key))
        }
      },
      error: (error) => console.log(error),
      complete: () => console.log(this.sessionDetails)
    })
if (this.session!=undefined){
    this.startDate = this.getDate(this.session.startDateTime)
    this.startTime = this.getTime(this.session.startDateTime)
    this.endDate = this.getDate(this.session.endDateTime)
    this.endTime = this.getTime(this.session.endDateTime)
}
  }
  getDate(value: string): string {
    return new Date(value).toDateString().slice(3)
  }

  getTime(value: string): string {
    return new Date(value).toLocaleTimeString()
  }

  private lineChartDataGen(data: number[], name: string) {

    let lineChartData: ChartConfiguration['data'] = {
      datasets: [
        {
          data: data,
          backgroundColor: 'rgba(0,84,239,0.2)',
          borderColor: 'rgb(0,84,239)',
          borderWidth: 1,
          fill: 'origin',
        }
      ],
      labels: [
        '1', '2', '3', '4', '5', '6', '7', '8', '9', '10',
      ]
    }

    let lineChartOptions: ChartConfiguration['options'] = {
      elements: {
        point: {
          radius: 0
        },
        line: {
          tension: 1
        }
      },
      scales: {
        // We use this empty structure as a placeholder for dynamic theming.
        y:
          {
            grid: {
              display: false
            },
            position: 'left',
            beginAtZero: true,
          },
        x: {
          grid: {
            display: false
          }
        }

      },

      plugins: {
        title: {
          display: true,
          text: name,
        },
        legend: {display: false},
      }
    };

    let finalData: chartData = {lineChartData, lineChartOptions}
    return finalData;
  }

  public lineChartType: ChartType = "line";

  @ViewChild(BaseChartDirective) chart?: BaseChartDirective;

  private static generateNumber(i: number): number {
    return Math.floor((Math.random() * (i < 2 ? 100 : 1000)) + 1);
  }

}
