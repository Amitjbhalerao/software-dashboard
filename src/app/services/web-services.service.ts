import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class WebServicesService {
  
  API_URL:string="https://1.api.fy23ey05.careers.ifelsecloud.com/"

  constructor(private http: HttpClient) { }

  public getFromServer(): Observable<any> {
    return this.http.get(this.API_URL);
  }
  public getChartData(chartType:any){
   if(chartType=='columnChart'){
    return  {
      series: [
        {
          name: "Income",
          data: [44, 55, 41,44, 55, 41,44, 55, 41,44, 55, 41]
        },
        {
          name: "Borrow",
          data: [13, 23, 20,44, 55, 41,44, 55, 41,44, 55, 41]
        },
      ],
      title: {
        text: 'Balance Overview',
        align: 'left',
      },
      chart: {
        type: "bar",
        height: 350,
        stacked: true,
        toolbar: {
          show: true
        },
        zoom: {
          enabled: true
        }
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            legend: {
              position: "bottom",
              offsetX: -10,
              offsetY: 0
            }
          }
        }
      ],
      plotOptions: {
        bar: {
          horizontal: false
        }
      },
      xaxis: {
        type: "category",
        categories: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec"
        ]
      },
      legend: {
        position: "right",
        offsetY: 40
      },
      fill: {
        opacity: 1
      }
    };
   }else if(chartType=='lineChart'){
    return  {
      series: [
        {
          data: [10, 11, 10, 14, 28,20, 38],
        },
      ],
      chart: {
        height: 350,
        type: 'line',
        zoom: {
          enabled: false,
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: 'smooth',
      },
      title: {
        text: 'Sales Statistics',
        align: 'left',
      },
      grid: {
        row: {
          colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
          opacity: 0.5,
        },
      },
      xaxis: {
        categories: [
          'Sun',
          'Mon',
          'Tue',
          'Wed',
          'Thu',
          'Fri',
          'Sat',
        ],
      },
    }
   }else if(chartType=='pieChart'){
    return  {
      series: [44, 55, 13],
      chart: {
        type: "donut"
      },
      title: {
        text: 'Top Products',
        align: 'left',
      },
      labels: ["Men", "Electronics", "Women"],
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 100
            },
            legend: {
              position: "bottom"
            }
          }
        }
      ]
    }
   }else{
    return null;
   }
  }
}
