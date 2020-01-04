import {Component, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {UserModalComponent} from './user-modal/user-modal.component';
import {UserService} from "../../services/user.service";
import {Router} from "@angular/router";
import {User} from "./user.model";

const USERS: User[] = [
  {
    name: 'Daniel Tamir',
    age: 28,
    email: 'daniel.tamir@tufin.com',
    lovesAngular: true
  }
];

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {

  users: User[] = USERS;
  userSubscriptions: Subscription = new Subscription();

  constructor(private modalService: NgbModal, private router: Router, public userService: UserService) {
  }

  ngOnInit() {
    if (!this.userService.userLoggedIn) {
      this.router.navigate(['/']);
    }

    this.userSubscriptions.add(this.userService.createUser$.subscribe((user: User) => {
      this.users = [...this.users, user]
    }));
  }

  addNewUser() {
    const modalRef = this.modalService.open(UserModalComponent);
  }
}
