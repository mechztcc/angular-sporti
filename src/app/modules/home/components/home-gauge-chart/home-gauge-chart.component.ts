import { Component, ViewChild } from '@angular/core';

import {
  ApexNonAxisChartSeries,
  ApexPlotOptions,
  ApexChart,
  ApexFill,
  ChartComponent,
  NgApexchartsModule,
} from 'ng-apexcharts';

export type ChartOptions = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  labels: string[];
  plotOptions: ApexPlotOptions;
  fill: ApexFill;
};

@Component({
  selector: 'app-home-gauge-chart',
  imports: [NgApexchartsModule],
  templateUrl: './home-gauge-chart.component.html',
  styleUrl: './home-gauge-chart.component.scss',
})
export class HomeGaugeChartComponent {
  @ViewChild('chart') chart!: ChartComponent;
  chartOptions: Partial<ChartOptions>;

  get rotationAngle(): number {
  const value = this.chartOptions.series![0];
  return -90 + (value * 180) / 100;
}

  constructor() {
    this.chartOptions = {
      series: [50],
      chart: {
        type: 'radialBar',
        offsetY: -20,
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
      plotOptions: {
        radialBar: {
          startAngle: -90,
          endAngle: 90,
          track: {
            background: '#e7e7e7',
            strokeWidth: '97%',
            margin: 5, // margin is in pixels
            dropShadow: {
              enabled: true,
              top: 2,
              left: 0,
              opacity: 0.31,
              blur: 2,
            },
          },
          dataLabels: {
            name: {
              show: false,
            },
            value: {
              offsetY: -2,
              fontSize: '22px',
            },
          },
        },
      },
      fill: {
        type: 'gradient',
        gradient: {
          shade: 'light',
          shadeIntensity: 0.4,
          inverseColors: false,
          opacityFrom: 1,
          opacityTo: 1,
          stops: [0, 50, 53, 91],
        },
      },
      labels: ['Average Results'],
    };
  }
}
