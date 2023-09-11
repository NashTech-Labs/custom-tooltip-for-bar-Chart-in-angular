import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.scss']
})
export class BarChartComponent {
  @ViewChild('chartContainer') chartContainer!: ElementRef;
  @Input() barChartData: any[] = [];

  constructor(private router: Router) {
  }

  ngAfterViewInit() {
    if (this.barChartData.length) {
      this.createChartColumn();
    }
  }
  private createChartColumn(): void {
    Highcharts.chart(this.chartContainer.nativeElement, {
      chart: {
        type: 'column'
      },
      title: {
        text: ''
      },
       responsive: true,

      xAxis: {
        categories:  this.barChartData.map((data) => data['day-of-week']) ,
          labels: {
          useHTML: true,
          style: {
            fontWeight: '400',
            fontSize: '12px',
            fontFamily: 'Montserrat',
            lineHeight: '15px',
            letterSpacing: '0px',
            textAlign: 'right',
            color: '#000000'
          }
        },
        crosshair: true
      },
      yAxis: {
        min: 0,
        title: {
          text: ''
        }
      },
      tooltip: {
        headerFormat: '<table>',
        pointFormat: '<tr><td style="color:#666666; padding:3px; font-size:13px; font-family: \'Montserrat\'">{series.name}</td>'
          + '<td style="color:#333333; font-size:13px; padding-left:20px;text-align: right; font-family: \'Montserrat\'"><b>{point.y}</b></td></tr>',
        footerFormat: '</table>',
        shared: true,
        useHTML: true,
      },

      credits: {
        enabled: false
      },
      accessibility: {
        enabled: false
      },
      plotOptions: {
        column: {
          pointPadding: 0,
          borderWidth: 0,
          borderRadius:  10,
          pointWidth:  16,
        },
        series: {
          marker: {
            width: 0
          },
        }
      },
      series: [
        {
          data: this.barChartData.map((data) => data["item-count"]),
          name: "Total Items",
          color: "#04C3DE",
          cursor: "pointer",
        },
        {
          data: this.barChartData.map((data) => data["total-event-count"]),
          name:"Total Events",
          color: "#0081B6",
          cursor: "pointer",
        },
      ],
    } as any)
  }
}
