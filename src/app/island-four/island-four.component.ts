import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../user.model';

@Component({
  selector: 'app-island-four',
  templateUrl: './island-four.component.html',
  styleUrls: ['./island-four.component.css']
})
export class IslandFourComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

}
