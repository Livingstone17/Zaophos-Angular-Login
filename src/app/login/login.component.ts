import { Component, OnInit,EventEmitter,Output, ViewChild} from '@angular/core';
import {NgForm,NgModel} from '@angular/forms'; 
import { Router } from '@angular/router';
import {SharedService} from '../shared.service';
import {User} from '../data/user-settings'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: User = {
    email:'',
    password:'',
    name:''
  };

 
  @ViewChild('form', {static:false}) form:NgForm;
  constructor(private router : Router, private userData:SharedService) { }
  postError =false;
  postErrorMessage = '';
  postSuccess= false;
  postSuccessMessage='';
  focusState = false;

  ngOnInit(): void {
  }

  // onBlur(field : NgModel) {
  //   console.log('in onBlur: ', field.valid);
  // }

  

  onFocus(field:NgModel){
    this.focusState = true;
  }

  onSubmit(form: NgForm){
    // console.log('submitted',form.value);
    if(form.valid){
      const newUser = new User(this.form.value['email'],this.form.value['password'],this.form.value['username'],this.form.value['name']);
     this.userData.addUser(newUser);
     console.log(form.value)
     this.postError=false;
     this.postSuccess=true;
     this.postSuccessMessage="Congratulations! welcome back";
     
     this.router.navigate(['/dashboard']);
    }else{
      // alert('please refill form')
      console.log('error: abeg boss enter the correct thing na');
      // this.onSubmitError;
      this.postError =true;
      this.postSuccess=false;
      this.postErrorMessage = "Please fix the above error(s)";
    }

}

}
