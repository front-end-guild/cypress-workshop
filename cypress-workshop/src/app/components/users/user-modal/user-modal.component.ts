import {Component, OnInit} from '@angular/core';
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {UserService} from "../../../services/user.service";
import {User} from "../user.model";

@Component({
  selector: 'app-user-modal',
  templateUrl: './user-modal.component.html',
  styleUrls: ['./user-modal.component.css']
})
export class UserModalComponent implements OnInit {

  user: User = {name: '', age: null, email: '', lovesAngular: true};

  constructor(public activeModal: NgbActiveModal, private userService: UserService) {
  }

  ngOnInit() {
  }

  save() {
    this.userService.createUser$.next(this.user);
    this.activeModal.close();
  }
}
