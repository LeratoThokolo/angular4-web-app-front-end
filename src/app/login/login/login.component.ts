import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { LoginService } from '../../service/login.service';
import { Router } from '@angular/router';
import { AppComponent } from '../../app.component';
import { UserService } from '../../service/user.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  model: any = {};
  loading = false;
  private user: User = new User();
  roleName: string;
  userName: string;

  // error = '';

  constructor(private _router: Router, private _loginService: LoginService, private _userService: UserService) { }

  ngOnInit() {
    // Reset login status
    this._loginService.logout();

  }

  redirectBasedOnUserRole(userRole: string) {

    switch (userRole) {
      case 'Admin':
        this._router.navigate(['/admin-admin-panel']);
        break;

      case 'Customer':
        this._router.navigate(['/home']);

        break;

      case 'Driver':
        this._router.navigate(['/driver-panel']);
        break;

      case 'Supplier':
        this._router.navigate(['/supplier-panel']);
        break;

      default:

        this._router.navigate(['/user-login']);

        break;
    }
  }

  login() {
    this.loading = true;
    this._loginService.login(this.model.userName, this.model.password)
      .subscribe((result) => {

        if (result) {

          this.userName = JSON.parse(localStorage.getItem('currentUser')).username;
          // console.log(this.userName);
          this._userService.getUserByUserName(this.userName)
            .subscribe((returnedUser) => {
              this.user = returnedUser;
              // console.log(this.user);
              // console.log(this.user.roles[0].name);
              this.redirectBasedOnUserRole(this.user.roles[0].name);
            }, (error) => {

              console.log(error);

            });

        } else {

          // this.model.error = 'Username or password is incorrect!';
          this.loading = false;

        }
      }, (error) => {
        this.loading = false;
        // this.model.error = error;
        this.model.error = 'Username or password is incorrect!!';
        console.log(error);
      });

  }

  recoverPassword() {

    this._router.navigate(['/recover-password']);

  }
}
