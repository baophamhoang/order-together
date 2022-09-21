import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { Order } from 'src/app/order';

@Component({
  selector: 'app-home-no-tasks',
  templateUrl: './home-no-tasks.component.html',
  styleUrls: ['./home-no-tasks.component.scss']
})
export class HomeNoTasksComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onAddOrderInitial(): void {
    this.addOrderInitialEvent.emit(true)
  }

  changeOnHover(state: boolean) {
    this.onHover = state;
  }

  onHover: boolean = false;

  @Output() addOrderInitialEvent = new EventEmitter<Boolean>();

  // @Input() orders?: Order[];

}
