import {Component} from '@angular/core';
import {UserService} from "./services/user.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cypress-workshop';
  menuIsOpened = false;

  constructor(public userService: UserService) {
  }

  /* Set the width of the side navigation to 250px */
  toggleNav() {
    this.menuIsOpened = !this.menuIsOpened;
  }
}
