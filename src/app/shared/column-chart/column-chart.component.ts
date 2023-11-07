import { Component, ViewChild } from '@angular/core';
import {
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexDataLabels,
  ApexPlotOptions,
  ApexResponsive,
  ApexLegend,
  ApexFill
} from "ng-apexcharts";
import { WebServicesService } from 'src/app/services/web-services.service';

export type ChartOptions2 = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  responsive: ApexResponsive[];
  xaxis: ApexXAxis;
  legend: ApexLegend;
  fill: ApexFill;
};
@Component({
  selector: 'app-column-chart',
  templateUrl: './column-chart.component.html',
  styleUrls: ['./column-chart.component.scss']
})
export class ColumnChartComponent {
  @ViewChild("chart") chart: any ;
  public chartOptions: any ;
  
constructor(private service:WebServicesService){}
ngOnInit(){
  this.chartOptions = this.service.getChartData('columnChart');
}
}
