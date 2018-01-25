import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../user.model';
import { UserService } from '../user.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css'],
  providers: [UserService]
})
export class MapComponent implements OnInit {
  currentUser;


  constructor(private router: Router, private userService: UserService) { }

  ngOnInit() {
    // setInterval(
    // this.currentUser =  this.userService.findUser()
    //   , 1000);
  }

}
