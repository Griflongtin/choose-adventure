import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../user.model';

@Component({
  selector: 'app-island-two',
  templateUrl: './island-two.component.html',
  styleUrls: ['./island-two.component.css']
})
export class IslandTwoComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

}
