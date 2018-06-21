import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VieworderComponent } from '../../order/vieworder/vieworder.component';

const routes: Routes = [

  {path: 'orders', component: VieworderComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DriverRoutingModule { }
