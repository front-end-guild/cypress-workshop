import {Component} from '@angular/core';
import {Router} from "@angular/router";
import {UserService} from "../../services/user.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginInfo = {email: '', password: ''};

  constructor(private router: Router, private userService: UserService) {
  }

  login() {
    this.router.navigate(['/users']);
    this.userService.userLoggedIn = true;
  }
}
