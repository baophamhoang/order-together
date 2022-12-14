import { Component, Input, OnInit } from '@angular/core';
import { Order } from 'src/app/order';

@Component({
  selector: 'app-orders-table',
  templateUrl: './orders-table.component.html',
  styleUrls: ['./orders-table.component.scss']
})
export class OrdersTableComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  isDiscountNegative(n: number) {
    return n<0;
  }

  @Input() ordersSource: Order[] = [];
  displayedColumns: string[] = ['clientName', 'dishName','tienphaitra', 'discount']

}
