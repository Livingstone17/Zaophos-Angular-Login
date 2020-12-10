import { Component, OnInit,ViewChild } from '@angular/core';
import {NgForm,NgModel} from '@angular/forms'; 
import {User} from '../data/user-settings';
import {DataService} from '../data.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  user: User = {
    name:'',
    email:'',
    password:'',
    username:'',
    locations:'',
    policy:false
    
  };

  @ViewChild('form', {static:false}) form:NgForm;

  constructor(private dataService: DataService, private router:Router,private userData:SharedService) { }

  postError=false;
  postErrorMessage="";
  postSuccessMessage="";
  postSuccess=false;
  locations:Observable<string[]>;


  onSubmit(form:NgForm){
    if(form.valid){
      const newUser = new User(this.form.value['email'],this.form.value['password'],this.form.value['username'],this.form.value['name']);
      this.userData.addUser(newUser);
      console.log(newUser);
      // console.log(form.value)
     this.postError=false;
     this.postSuccess=true;
     this.postSuccessMessage="Congratulations! welcome back";
     this.router.navigate(['/welcome-user']);
    }else{
      // alert('please refill form')
      console.log('error: abeg boss enter the correct thing na');
      // this.onSubmitError;
      this.postError =true;
      this.postSuccess=false;
      this.postErrorMessage = "Please fix the above error";
    }
   
  }

  ngOnInit(){
    this.locations = this.dataService.getLocation();
  }

}
