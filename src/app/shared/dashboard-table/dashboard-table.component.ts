import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-dashboard-table',
  templateUrl: './dashboard-table.component.html',
  styleUrls: ['./dashboard-table.component.scss']
})
export class DashboardTableComponent {
  @Input() recent_orders:any;
  orderDetail:any;
  
  getOrderDetails(orderDetail:any){
  this.orderDetail=orderDetail;
  }
}
