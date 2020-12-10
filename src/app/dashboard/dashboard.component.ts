import { Component, OnInit,OnDestroy } from '@angular/core';
import { User } from '../data/user-settings';
import {SharedService} from '../shared.service';



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  user:User

  constructor(private userData:SharedService){}

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
