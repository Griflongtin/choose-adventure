import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../user.model';
import { UserService } from '../user.service';

@Component({
  selector: 'app-island-three',
  templateUrl: './island-three.component.html',
  styleUrls: ['./island-three.component.css'],
  providers: [UserService]
})
export class IslandThreeComponent implements OnInit {

  constructor(private router: Router, private userService: UserService) { }

  ngOnInit() {
  }

}
