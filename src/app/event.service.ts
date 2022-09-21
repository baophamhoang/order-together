import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Order } from './order';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor() { }

  private formSubmitEvent = new BehaviorSubject<any>('');
  private formRemoveEvent = new BehaviorSubject<any>('');

  emitFormSubmit(form: Order) {
    this.formSubmitEvent.next(form);
  }

  emitFormRemove(no: number) {
    this.formRemoveEvent.next(no);
  }

  formSubmitListener() {
    return this.formSubmitEvent.asObservable();
  }

  formRemoveListener() {
    return this.formRemoveEvent.asObservable();
  }
  
}
