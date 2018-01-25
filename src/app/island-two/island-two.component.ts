import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../user.model';
import { UserService } from '../user.service';

@Component({
  selector: 'app-island-two',
  templateUrl: './island-two.component.html',
  styleUrls: ['./island-two.component.css'],
  providers: [UserService]
})
export class IslandTwoComponent implements OnInit {

  constructor(private router: Router, private userService: UserService) { }

  ngOnInit() {
  }

}
