import { Component, OnInit } from '@angular/core';
import { Router, Params, ActivatedRoute } from '@angular/router';
import { User } from '../user.model';
import { FirebaseListObservable } from 'angularfire2/database';
import { UserService } from '../user.service';


@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css'],
  providers: [UserService]
})
export class MapComponent implements OnInit {
  userId;
  currentUser;
  currentUserObj;
  inventoryList = [];
  constructor(private router: Router, private userService: UserService, private route: ActivatedRoute) { }

  ngOnInit() {
      this.route.params.forEach((urlParameters) => {
      this.userId = urlParameters['id'];
  });
    this.currentUser = this.userService.getUserById(this.userId);
    this.currentUser.subscribe(dataLastEmittedFromObserver => {
      this.currentUserObj = dataLastEmittedFromObserver;
    })

    this.inventoryRun();

  }
  inventoryRun() {
    console.log(this.currentUserObj.inventory)
    this.currentUserObj.inventory.forEach((item) => {
      let el = document.getElementById('output'),
        elChild = document.createElement('div');
        elChild.className = item;
        el.appendChild(elChild);
    });
  }

  goToIslandOne() {
    this.router.navigate(['island-one/', this.currentUserObj.$key]);
  };
  goToIslandTwo() {
    this.router.navigate(['island-two/', this.currentUserObj.$key]);
  };
  goToIslandThree() {
    this.router.navigate(['island-three/', this.currentUserObj.$key]);
  };
  goToIslandFour() {
    this.router.navigate(['island-four/', this.currentUserObj.$key]);
  };


}
