import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { User } from './data/user-settings';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  private myUser = new Subject<User>();
  myUserObservable = this.myUser.asObservable();

  addUser(user: User){
    this.myUser.next(user);
    console.log(user);
  }
  constructor() { }
}
