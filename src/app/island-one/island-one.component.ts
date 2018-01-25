import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../user.model';

@Component({
  selector: 'app-island-one',
  templateUrl: './island-one.component.html',
  styleUrls: ['./island-one.component.css']

})
export class IslandOneComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

}
