import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../user.model';
import { FirebaseListObservable } from 'angularfire2/database';
import { UserService } from '../user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [UserService]
})
export class HomeComponent implements OnInit {

  Users = [];
  newPlayerName;
  constructor(private router: Router, private userService: UserService) { }
  createUserName(newPlayerName) {
    this.newPlayerName = newPlayerName;
    this.User = User[];
    console.log(this.newPlayerName);
    // document.getElementsByClassName(form-)
  }
  ngOnInit() {
    this.Users = this.userService.getUsers();
  }
}
