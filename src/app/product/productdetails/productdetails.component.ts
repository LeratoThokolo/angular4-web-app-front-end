import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../../service/product.service';
import { Product } from '../product';
import { CartService } from '../../service/cart.service';
import { CartItem } from '../../cartitem/cart-item';

@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.css']
})
export class ProductdetailsComponent implements OnInit {

  private product: Product;
  increaseQuantity = 1;
  cartItem: CartItem;
  // tslint:disable-next-line:max-line-length
  constructor(private _productService: ProductService, private _activatedRoute: ActivatedRoute, private _cartService: CartService, private _router: Router) { }

  ngOnInit() {

    this.product = new Product();
    this.cartItem = new CartItem();

    const productID: Number = this._activatedRoute.snapshot.params['productID'];

    this._productService.getProduct(productID).subscribe((returnedProduct) => {

      console.log(returnedProduct);
      this.product = returnedProduct;
    }, (error) => {

      console.log(error);

    });
  }

  increase() {

    this.increaseQuantity++;

  }

  decrease() {

    this.increaseQuantity--;

  }

  addToCart() {

    if (localStorage.getItem('currentUser') === null) {

      this._router.navigate(['/user-login']);

    } else {

      this.cartItem.product = this.product;
      this.cartItem.count = this.increaseQuantity;

      this._cartService.addToCart(this.cartItem)
        .subscribe((addedItem) => {
          console.log(addedItem);
          this._router.navigate(['/cart-items']);

        });

    }

  }


}
