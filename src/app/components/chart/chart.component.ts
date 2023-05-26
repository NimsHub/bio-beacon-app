import {Component, ViewChild, Input, OnInit} from '@angular/core';
import {Chart, ChartConfiguration, ChartEvent, ChartType} from 'chart.js';
import {BaseChartDirective} from 'ng2-charts';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent {
  @Input() chartName?: string;

  public lineChartData: ChartConfiguration['data'] = {
    datasets: [
      {
        data: [
          77, 75, 78, 81, 77, 78, 80, 81, 78, 82,
          77, 75, 78, 81, 77, 78, 80, 81, 78, 82,
          77, 75, 78, 81, 77, 78, 80, 81, 78, 82,
          77, 75, 78, 81, 77, 78, 80, 81, 78, 82,
          77, 75, 78, 81, 77, 78, 80, 81, 78, 82,
        ],
        backgroundColor: 'rgba(239,0,82,0.2)',
        borderColor: 'rgb(239,0,82)',
        borderWidth: 1,
        fill: 'origin',
      }
    ],
    labels: [
      '1', '2', '3', '4', '5', '6', '7', '8', '9', '10',
      '1', '2', '3', '4', '5', '6', '7', '8', '9', '10',
      '1', '2', '3', '4', '5', '6', '7', '8', '9', '10',
      '1', '2', '3', '4', '5', '6', '7', '8', '9', '10',
      '1', '2', '3', '4', '5', '6', '7', '8', '9', '10',
    ]
  };

  public lineChartOptions: ChartConfiguration['options'] = {
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
        text: 'Heart Rate',
      },
      legend: {display: false},
      // annotation: {
      //   annotations: [
      //     {
      //       type: 'line',
      //       scaleID: 'x',
      //       value: 'March',
      //       borderColor: 'orange',
      //       borderWidth: 2,
      //       label: {
      //         display: true,
      //         position: 'center',
      //         color: 'orange',
      //         content: 'LineAnno',
      //         font: {
      //           weight: 'bold'
      //         }
      //       }
      //     },
      //   ],
      // }
    }
  };

  public lineChartType: ChartType = 'line';

  @ViewChild(BaseChartDirective) chart?: BaseChartDirective;

  private static generateNumber(i: number): number {
    return Math.floor((Math.random() * (i < 2 ? 100 : 1000)) + 1);
  }

}
