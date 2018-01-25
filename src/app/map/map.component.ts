import { Component, OnInit } from '@angular/core';
import { Router, Params, ActivatedRoute } from '@angular/router';
import { User } from '../user.model';
import { Location } from '@angular/common';
import { FirebaseListObservable } from 'angularfire2/database';
import { UserService } from '../user.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css'],
  providers: [UserService]
})
export class MapComponent implements OnInit {
  currentUser;
  userId;

  constructor(private router: Router, private location: Location, private userService: UserService, private route: ActivatedRoute) { }

  ngOnInit() {
      this.route.params.forEach((urlParameters) => {
      console.log(urlParameters);
      this.userId = urlParameters['id'];
  });
    this.currentUser = this.userService.getUserById(this.userId);
  }

}
