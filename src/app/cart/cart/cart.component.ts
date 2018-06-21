import { Component, OnInit } from '@angular/core';
import { CartService } from '../../service/cart.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../../service/product.service';
import { Product } from '../../product/product';
import { CartItem } from '../../cartitem/cart-item';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartItems: CartItem[];
  cartItem: CartItem;
  cartGrandTotal = 0;
  // tslint:disable-next-line:max-line-length
  constructor(private _cartService: CartService, private _router: Router, private _matSnackBar: MatSnackBar) { }

  ngOnInit() {

    // this._notificationService.show('Hello cart!!!');
    this._cartService.getCartItems()
      .subscribe((returnedCartItems) => {

        this.cartItems = returnedCartItems;
        localStorage.setItem('cartItems', JSON.stringify({ items: this.cartItems }));

        console.log(this.cartItems);
      }, (error) => {
        console.log(error);
      });

    this.getTotalCartPrice();
    this.cartItem = new CartItem();
  }

  getTotalCartPrice() {

    this._cartService.getCartTotalPrice()
      .subscribe((cartTotalPrice) => {

        this.cartGrandTotal = cartTotalPrice;
        localStorage.setItem('cartGrandTotal', JSON.stringify(this.cartGrandTotal));
        console.log(this.cartGrandTotal);

      }, (error) => {

        console.log(error);

      });

  }

  removeFromCart(cartItem) {

    this._cartService.removeFromCart(cartItem).subscribe((data) => {

      console.log(data);
      this.cartItems.splice(this.cartItems.indexOf(cartItem, 1));

      this._router.navigate(['/home']);


    }, (error) => {
      console.log(error);
    });
  }

  removeAllItems() {

    this._cartService.removeAllItems()
      .subscribe((data) => {
        console.log(data);
        this.cartItems.length = 0;
        this.cartGrandTotal = 0;
      }, (error) => {
        console.log(error);
      });

  }

  bankDetails() {

    if (localStorage.getItem('cartGrandTotal').startsWith('0')) {

      this.openDialog('Your cart is empty!!');

    } else {

      this._router.navigate(['/banking-details']);

    }
  }

  openDialog(text: string) {

    this._matSnackBar.open(text, 'Ok', {
      duration: 10000
    });

  }

}
