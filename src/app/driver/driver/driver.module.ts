import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DriverRoutingModule } from './driver-routing.module';
import { VieworderComponent } from '../../order/vieworder/vieworder.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { DriverComponent } from './driver.component';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    DriverRoutingModule
  ],
  declarations: [VieworderComponent, DriverComponent]
})
export class DriverModule { }
