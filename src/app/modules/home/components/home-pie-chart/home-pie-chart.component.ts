import { Component, ViewChild } from '@angular/core';
import { ChartComponent, NgApexchartsModule } from 'ng-apexcharts';

import {
  ApexNonAxisChartSeries,
  ApexResponsive,
  ApexChart,
} from 'ng-apexcharts';

export type ChartOptions = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  responsive: ApexResponsive[];
  labels: any;
};

@Component({
  selector: 'app-home-pie-chart',
  imports: [NgApexchartsModule],
  templateUrl: './home-pie-chart.component.html',
  styleUrl: './home-pie-chart.component.scss',
})
export class HomePieChartComponent {
  @ViewChild('chart') chart!: ChartComponent;
  chartOptions: Partial<ChartOptions>;

  constructor() {
    this.chartOptions = {
      series: [44, 55, 13],
      chart: {
        type: 'donut',
        toolbar: {
          show: true, 
          tools: {
            download: true, 
            selection: true,
            zoom: true,
            zoomin: true,
            zoomout: true,
            pan: true,
            reset: true,
          },
        },
      },
      labels: ['Team A', 'Team B', 'Team C'],
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200,
            },
            legend: {
              position: 'bottom',
            },
          },
        },
      ],
    };
  }
}
