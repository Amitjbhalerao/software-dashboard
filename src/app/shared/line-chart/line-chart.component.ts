import { Component, ViewChild } from '@angular/core';
import {ApexAxisChartSeries,ApexChart,ApexXAxis,ApexDataLabels,ApexTitleSubtitle,ApexStroke,ApexGrid,} from 'ng-apexcharts';
import { WebServicesService } from 'src/app/services/web-services.service';

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  dataLabels: ApexDataLabels;
  grid: ApexGrid;
  stroke: ApexStroke;
  title: ApexTitleSubtitle;
};

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.scss'],
})
export class LineChartComponent {
  @ViewChild('chart') chart: any;
  public chartOptions: any;
  constructor(private service:WebServicesService) {
  }
  ngOnInit(){
    this.chartOptions =this.service.getChartData('lineChart');
  }
}
