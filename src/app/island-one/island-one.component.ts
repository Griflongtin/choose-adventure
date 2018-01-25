import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../user.model';
import { UserService } from '../user.service';

@Component({
  selector: 'app-island-one',
  templateUrl: './island-one.component.html',
  styleUrls: ['./island-one.component.css'],
  providers: [UserService]
})
export class IslandOneComponent implements OnInit {

  constructor(private router: Router, private userService: UserService) { }

  ngOnInit() {
  }

}