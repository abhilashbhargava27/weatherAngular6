import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { UserSignInDetails } from '../../model/userSignInDetails.model';
import { Router } from '@angular/router';
import { Globals } from '../../globalVariable/globalVariable';

@Component({
  selector: 'sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
	
	userSignInDetails : UserSignInDetails;
	signInError: boolean = false;
	@ViewChild('userForm') form : any;

  constructor(private router:Router, private elementRef: ElementRef, private globals: Globals) {
  	this.elementRef = elementRef;
  }

  ngOnInit() {
    //console.log(this.globals.userSignedIn,'this.globals.userSignedIn----')
  	this.userSignInDetails = {
      email : '',
      password : ''
    }
  }
  signUnPage() {
  	this.router.navigateByUrl('signup');
  }
  signinUser({ value, valid } : { value:UserSignInDetails, valid:boolean }) {
  	
  	var storedEmail = localStorage.getItem('email');
  	var storedPassword = localStorage.getItem('password');

  	if((value.email == storedEmail) && (value.password == storedPassword)) {
  		this.signInError = false;
      this.globals.userSignedIn = true;
      this.router.navigateByUrl('weather-data');
  	}else{
  		this.signInError = true;
  	}
  }
}
