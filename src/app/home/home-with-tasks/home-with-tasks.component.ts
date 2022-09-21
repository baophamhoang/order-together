import { Component, Input, OnInit } from '@angular/core';
import { Order } from 'src/app/order';

@Component({
  selector: 'app-home-with-tasks',
  templateUrl: './home-with-tasks.component.html',
  styleUrls: ['./home-with-tasks.component.scss']
})
export class HomeWithTasksComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() formNumber!: number;

}
