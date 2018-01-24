import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../user.model';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  users: FirebaseListObservable<any[]>;
  constructor(private router: Router) { }

  ngOnInit() {
    console.log(this.users)
  }
  // goToMap() {
  //   alert('help');
  //   this.router.navigate(['map','start']);
  // };

}
