import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListproductComponent } from '../../product/listproduct/listproduct.component';
import { ProductdetailsComponent } from '../../product/productdetails/productdetails.component';
import { ListcategoryComponent } from '../../category/listcategory/listcategory.component';
import { ProductlistbycategoryComponent } from '../../product/productlistbycategory/productlistbycategory.component';
import { CartComponent } from '../../cart/cart/cart.component';
import { BankingdetailsComponent } from '../../banking/bankingdetails/bankingdetails.component';
import { OrderComponent } from '../../order/order/order.component';
import { CustomerprofileComponent } from '../customerprofile/customerprofile.component';

const routes: Routes = [
  { path: 'home', component: ListproductComponent },
  { path: 'home/:productID', component: ProductdetailsComponent },
  { path: 'list-category', component: ListcategoryComponent },
  { path: 'list-category/:categoryID', component: ProductlistbycategoryComponent },
  { path: 'cart-items', component: CartComponent },
  { path: 'banking-details', component: BankingdetailsComponent },
  { path: 'order-details', component: OrderComponent },
  { path: 'customer-profile', component: CustomerprofileComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }
