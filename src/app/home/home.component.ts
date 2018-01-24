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

  constructor(private router: Router, private userService: UserService) { }

  ngOnInit() {
    this.Users = this.userService.getUsers();
  }
}
