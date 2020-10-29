import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import * as firebase from 'firebase';
import { AppUser } from './models/app-user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private database: AngularFireDatabase) {}

  save(user: firebase.User) {
    this.database.object('/users/' + user.uid).update({
      name: user.displayName,
      email: user.email,
    });
  }
  get(uid: string) {
    return this.database.object('/users/' + uid);
  }
}
