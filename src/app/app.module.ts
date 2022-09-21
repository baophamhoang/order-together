import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeNoTasksComponent } from './home/home-no-tasks/home-no-tasks.component';
import { HomeWithTasksComponent } from './home/home-with-tasks/home-with-tasks.component';
import { AboutmeComponent } from './aboutme/aboutme.component';
import { OrdersFormComponent } from './home/home-with-tasks/orders-form/orders-form.component';
import { FormsModule,  ReactiveFormsModule, } from '@angular/forms';
import { OrdersTableComponent } from './home/orders-table/orders-table.component';
import { MaterialModule } from './material/material.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    HomeNoTasksComponent,
    HomeWithTasksComponent,
    AboutmeComponent,
    OrdersFormComponent,
    OrdersTableComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
