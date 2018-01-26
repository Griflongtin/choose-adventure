import { Component, OnInit } from '@angular/core';
import { Router, Params, ActivatedRoute } from '@angular/router';
import { User } from '../user.model';
import { UserService } from '../user.service';
import { FirebaseListObservable } from 'angularfire2/database';


@Component({
  selector: 'app-island-three',
  templateUrl: './island-three.component.html',
  styleUrls: ['./island-three.component.css'],
  providers: [UserService]
})
export class IslandThreeComponent implements OnInit {
  userId;
  currentUser;
  currentUserObj;
  constructor(private router: Router, private userService: UserService, private route: ActivatedRoute) { }
  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
    this.userId = urlParameters['id'];
  });
    this.currentUser = this.userService.getUserById(this.userId);
    this.currentUser.subscribe(dataLastEmittedFromObserver => {
      this.currentUserObj = dataLastEmittedFromObserver;
    })
  }

  goToMap() {

    this.router.navigate(['map/', this.currentUserObj.$key]);
  };

}
