import { Injectable } from '@angular/core';
import { User } from './user.model';
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

    addUser(newPlayerName, place, newUserPerks, inventory) {
      this.users.push({name: newPlayerName, place: place, perks: newUserPerks, inventory: inventory});
    }

    pushNewUsersData(newPlayerName, newplace, UserPerks, inventory){
      const userEntryInFirebace = this.users;
      userEntryInFirebace.update({name: newPlayerName, place: newplace, perks: UserPerks, inventory: inventory});
    }

    getUserById(userId: number){
    return this.database.object('users/' + userId);
  }

}
