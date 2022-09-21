import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { EventService } from '../event.service';
import { Order } from '../order';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private eventService: EventService) { 
  }

  ngOnInit(): void {
    this.eventService.formSubmitListener().subscribe(form => {
      if (form) this.addOrder(form);
      // this.deleteForm()
    })
    this.eventService.formRemoveListener().subscribe(formNo => {
      this.deleteForm(formNo);
    })
  }

  orderArr: Order[] = [];
  isAddOrderInitial: Boolean = false;
  numberOfForm: number = 0;
  dummyArr: any[] = [];
  isCalculated: Boolean = false;
  // realTotal!: number;
  realTotal = new FormControl();
  finalPriceArr: any;
  isAddBtnHover: boolean = false;
  isRestartBtnHover: boolean = false;
  panelMove: string = 'move-in';

  createFakeArray(range: number): any[]{
    const fakeArray = new Array(range);
    return fakeArray; 
  }

  deleteForm(no: number): void {
    this.dummyArr.splice(no, 1);
  }

  addNewForm(): void {
    this.dummyArr.push('');
  }

  restart(): void {
    this.orderArr = [];
    this.dummyArr = [];
    this.realTotal.setValue(0);
    this.panelMove = 'move-out';
    setTimeout(() => {
      this.isAddOrderInitial = false;
    }, 500);
  }

  onAddOrderInitial(isAddOrderInitial: Boolean) {
    this.panelMove = 'move-in'
    this.isAddOrderInitial = isAddOrderInitial;
    this.addNewForm();
  }

  addOrder(order: Order) {
    this.orderArr.push(order);
  }

  getCalculation(): any {
    this.isCalculated = true;
    const total = this.orderArr.reduce((sum, acc) => sum + acc.dishPrice * acc.dishAmount, 0);
    const newArr = this.orderArr.map(order => {
      return {
        ...order,
        tienphaitra: Math.ceil(order.dishPrice/ total* this.realTotal.value/1000) * 1000 * order.dishAmount
      }
    });
    console.log(newArr);
    this.finalPriceArr = newArr;
  }

  back(): void {
    this.isCalculated = false;
    this.orderArr = [];
    this.dummyArr = [];
    this.realTotal.setValue(0);
  }
}
