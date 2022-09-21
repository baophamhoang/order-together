import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { EventService } from 'src/app/event.service';
import { Order } from 'src/app/order';

@Component({
  selector: 'app-orders-form',
  templateUrl: './orders-form.component.html',
  styleUrls: ['./orders-form.component.scss']
})
export class OrdersFormComponent implements OnInit {

  constructor(private eventService: EventService) { }

  ngOnInit(): void {
  }
  @Input() formNumber!: number; 
  profileForm = new FormGroup({
    clientName: new FormControl(''),
    dishName: new FormControl(''),
    dishPrice: new FormControl(),
    dishAmount: new FormControl(),
  })

  // @Output() formSubmittedEvent = new EventEmitter<any>();

  onSubmit():void {
    const formValue: Order = {
      clientName: String(this.profileForm.value.clientName),
      dishName: String(this.profileForm.value.dishName),
      dishPrice: Number(this.profileForm.value.dishPrice),
      dishAmount: Number(this.profileForm.value.dishAmount),
    };
    console.log(formValue);
    this.eventService.emitFormSubmit(formValue);
    this.eventService.emitFormRemove(this.formNumber);
  }
  onRemove(): void {
    console.log('remove orderForm ',this.formNumber);
    this.eventService.emitFormRemove(this.formNumber);
  }
}
