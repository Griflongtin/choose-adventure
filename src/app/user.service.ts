import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
@Injectable()
export class UserService {
  users;
  constructor(private database: AngularFireDatabase) {
    this.users = database.list('users');
  }
    getUsers(){
      return this.users;
    }

}
