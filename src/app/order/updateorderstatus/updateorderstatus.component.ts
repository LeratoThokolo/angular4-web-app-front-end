import { Component, OnInit } from '@angular/core';
import { OrderService } from '../../service/order.service';
import { Router } from '@angular/router';
import { Order } from '../order';

@Component({
  selector: 'app-updateorderstatus',
  templateUrl: './updateorderstatus.component.html',
  styleUrls: ['./updateorderstatus.component.css']
})
export class UpdateorderstatusComponent implements OnInit {

  private order: Order;

  constructor(private _orderService: OrderService, private _router: Router) { }

  ngOnInit() {

    this.order = new Order();
    this.order = this._orderService.getterOrder();

  }

  updateOrderStatus() {

    if (this.order.orderID === undefined) {

      this._orderService.createOrder(this.order)
      .subscribe((createdOrder) => {

        console.log(createdOrder);
        this._router.navigate(['/orders-listed']);

      }, (error) => {

        console.log(error);

      });

    } else {

      this._orderService.updateOrder(this.order)
        .subscribe((updatedOrder) => {

          console.log(updatedOrder);
          this._router.navigate(['/orders-listed']);

        }, (error) => {

          console.log(error);

        });
    }

  }

}
