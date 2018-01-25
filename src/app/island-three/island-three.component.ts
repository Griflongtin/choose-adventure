import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../user.model';

@Component({
  selector: 'app-island-three',
  templateUrl: './island-three.component.html',
  styleUrls: ['./island-three.component.css']
})
export class IslandThreeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

}
