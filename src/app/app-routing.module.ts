import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ListcustomerComponent } from './customer/listcustomer/listcustomer.component';
import { CreatecustomerComponent } from './customer/createcustomer/createcustomer.component';
import { ListproductComponent } from './product/listproduct/listproduct.component';
import { CreateproductComponent } from './product/createproduct/createproduct.component';
import { ListcategoryComponent } from './category/listcategory/listcategory.component';
import { CreatecategoryComponent } from './category/createcategory/createcategory.component';
import { ProductlistbycategoryComponent } from './product/productlistbycategory/productlistbycategory.component';
import { LoginComponent } from './login/login/login.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword/forgotpassword.component';
import { RefreshComponent } from './refresh/refresh/refresh.component';
import { ProductdetailsComponent } from './product/productdetails/productdetails.component';
import { CartComponent } from './cart/cart/cart.component';
import { BankingdetailsComponent } from './banking/bankingdetails/bankingdetails.component';
import { OrderComponent } from './order/order/order.component';
import { VieworderComponent } from './order/vieworder/vieworder.component';
import { CreateorderComponent } from './order/createorder/createorder.component';
import { CustomerprofileComponent } from './customer/customerprofile/customerprofile.component';
import { UpdateorderstatusComponent } from './order/updateorderstatus/updateorderstatus.component';
import { DriverComponent } from './driver/driver/driver.component';
import { AdminComponent } from './admin/admin/admin.component';
import { SupplierComponent } from './supplier/supplier/supplier.component';
import { CreatedriverComponent } from './driver/createdriver/createdriver.component';
import { CreatesupplierComponent } from './supplier/createsupplier/createsupplier.component';
import { CustomerordersComponent } from './order/customerorders/customerorders.component';
import { AllusersComponent } from './users/allusers/allusers.component';
import { UpdateproductquantityComponent } from './supplier/updateproductquantity/updateproductquantity.component';

const routes: Routes = [
  { path: 'home', component: ListproductComponent },
  { path: 'home/:productID', component: ProductdetailsComponent },
  { path: 'allcustomers', component: ListcustomerComponent },
  { path: 'register', component: CreatecustomerComponent },
  { path: 'add-product', component: CreateproductComponent },
  { path: 'list-category', component: ListcategoryComponent },
  { path: 'list-category/:categoryID', component: ProductlistbycategoryComponent },
  { path: 'cart-items', component: CartComponent },
  { path: 'create-category', component: CreatecategoryComponent },
  { path: 'banking-details', component: BankingdetailsComponent },
  { path: 'order-details', component: OrderComponent },
  { path: 'orders-listed', component: VieworderComponent },
  { path: 'supplier-panel', component: SupplierComponent },
  { path: 'admin-admin-panel', component: AdminComponent },
  { path: 'admin-create-driver', component: CreatedriverComponent },
  { path: 'admin-create-supplier', component: CreatesupplierComponent },
  { path: 'update-order-status', component: UpdateorderstatusComponent },
  { path: 'update-product-badge-quantity', component: UpdateproductquantityComponent },
  { path: 'all-application-users', component: AllusersComponent},
  { path: 'customer-order-orders', component: CustomerordersComponent },
  { path: 'create-order', component: CreateorderComponent },
  { path: 'customer-profile', component: CustomerprofileComponent },
  { path: 'driver-panel', component: DriverComponent },
  { path: 'recover-password', component: ForgotpasswordComponent },
  { path: 'user-login', component: LoginComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
