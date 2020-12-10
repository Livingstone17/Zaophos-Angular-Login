import { Component, OnInit,OnDestroy } from '@angular/core';
import { User } from '../data/user-settings';
import {SharedService} from '../shared.service';
@Component({
  selector: 'app-welcomeuser',
  templateUrl: './welcomeuser.component.html',
  styleUrls: ['./welcomeuser.component.scss']
})
export class WelcomeuserComponent implements OnInit {
  user:User
  username:string="";
  name:string="";
  password:string="";
  constructor(private userData:SharedService) { }

  ngOnInit(): void {
    this.userData.myUserObservable.subscribe(
      (user:User)=>{
        this.user=user;
        console.log(user);
      }
    );
  }

  ngOnDestroy(){

  }

}






