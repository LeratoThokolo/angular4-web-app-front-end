import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ConfirmEqualValidator } from './customvalidator/confirm-equalpassword.directive';
import { NgxCarouselModule } from 'ngx-carousel';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { NgxPaginationModule } from 'ngx-pagination';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CreatecustomerComponent } from './customer/createcustomer/createcustomer.component';
import { CustomerService } from './service/customer.service';
import { ListcustomerComponent } from './customer/listcustomer/listcustomer.component';
import { ListproductComponent } from './product/listproduct/listproduct.component';
import { CreateproductComponent } from './product/createproduct/createproduct.component';
import { CreatecategoryComponent } from './category/createcategory/createcategory.component';
import { ListcategoryComponent } from './category/listcategory/listcategory.component';
import { CategoryService } from './service/category.service';
import { ProductService } from './service/product.service';
import { ProductlistbycategoryComponent } from './product/productlistbycategory/productlistbycategory.component';
import { LoginComponent } from './login/login/login.component';
import { LoginService } from './service/login.service';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword/forgotpassword.component';
import { ProductdetailsComponent } from './product/productdetails/productdetails.component';
import { CartComponent } from './cart/cart/cart.component';
import { CartService } from './service/cart.service';
import { BankingdetailsComponent } from './banking/bankingdetails/bankingdetails.component';
import { OrderComponent } from './order/order/order.component';
import { BankService } from './service/bank.service';
import { BankdetailService } from './service/bankdetail.service';
import { OrderService } from './service/order.service';
import { CreateorderComponent } from './order/createorder/createorder.component';
import { CustomerprofileComponent } from './customer/customerprofile/customerprofile.component';
import { UserService } from './service/user.service';
import { VieworderComponent } from './order/vieworder/vieworder.component';
import { UpdateorderstatusComponent } from './order/updateorderstatus/updateorderstatus.component';
import { DriverModule } from './driver/driver/driver.module';
import { DriverRoutingModule } from './driver/driver/driver-routing.module';
import { AdminComponent } from './admin/admin/admin.component';
import { SupplierComponent } from './supplier/supplier/supplier.component';
import { SupplierService } from './service/supplier.service';
import { CreatedriverComponent } from './driver/createdriver/createdriver.component';
import { PnpdriverService } from './service/pnpdriver.service';
import { CreatesupplierComponent } from './supplier/createsupplier/createsupplier.component';
import { CustomerordersComponent } from './order/customerorders/customerorders.component';
import { AllusersComponent } from './users/allusers/allusers.component';
import { UpdateproductquantityComponent } from './supplier/updateproductquantity/updateproductquantity.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PageNotFoundComponent,
    CreatecustomerComponent,
    ConfirmEqualValidator,
    ListcustomerComponent,
    ListproductComponent,
    CreateproductComponent,
    CreatecategoryComponent,
    ListcategoryComponent,
    ProductlistbycategoryComponent,
    LoginComponent,
    ForgotpasswordComponent,
    ProductdetailsComponent,
    CartComponent,
    BankingdetailsComponent,
    OrderComponent,
    CreateorderComponent,
    CustomerprofileComponent,
    UpdateorderstatusComponent,
    AdminComponent,
    SupplierComponent,
    CreatedriverComponent,
    CreatesupplierComponent,
    CustomerordersComponent,
    AllusersComponent,
    UpdateproductquantityComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    NgxCarouselModule,
    DriverModule,
    CarouselModule.forRoot(),
    BrowserAnimationsModule,
    MatSnackBarModule,
    NgxPaginationModule
  ],
  providers: [

    CustomerService,
    CategoryService,
    ProductService,
    LoginService,
    CartService,
    BankService,
    BankdetailService,
    OrderService,
    UserService,
    SupplierService,
    PnpdriverService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
