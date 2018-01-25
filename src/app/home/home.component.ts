import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../user.model';
import { FirebaseListObservable } from 'angularfire2/database';
import { UserService } from '../user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [ UserService]
})
export class HomeComponent implements OnInit {
  userId: number;
  Users = [];
  userToDisplay;
  newPlayerName;
  constructor(private router: Router, private userService: UserService) { }
  createUserName(newPlayerName) {
    const newUserPerks: User = new User(3, 9, 1, 4, 3, 2);
    this.newPlayerName = newPlayerName;
    const place = 'map';
    const inventory = ["crowbar", "bag", "mushroom", "grenade", "drugs"];
    this.userService.addUser(this.newPlayerName, place, newUserPerks, inventory);
  }
  ngOnInit() {
    this.Users = this.userService.getUsers();

    this.router.Params.forEach((urlParameters) => {
      this.userId = parseInt(urlParameters['id']);
    });
    this.userToDisplay = this.userService.getUserById(this.userId);

  }

  goToCharacterProgress(clickedUser) {

    alert('hell');
    this.router.navigate(['map', clickedUser.$key]);
    // this.userToDisplay = this.userService.getUserById(clickedUser.$key);
  };


}
