import { Component, ViewChild } from '@angular/core';
import { ChartComponent } from "ng-apexcharts";
import {ApexNonAxisChartSeries,ApexResponsive,ApexChart} from "ng-apexcharts";
import { WebServicesService } from 'src/app/services/web-services.service';

export type ChartOptions = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  responsive: ApexResponsive[];
  labels: any;
};
@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.scss']
})
export class PieChartComponent {
  @ViewChild("chart") chart: any;
  public chartOptions: any;

  constructor(private service:WebServicesService) {
  }
  ngOnInit(){
    this.chartOptions =this.service.getChartData('pieChart');
  }
}
