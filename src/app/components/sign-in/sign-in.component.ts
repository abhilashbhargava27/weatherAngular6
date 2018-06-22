import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { UserSignInDetails } from '../../model/userSignInDetails.model';
import { Router } from '@angular/router';

@Component({
  selector: 'sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
	
	userSignInDetails : UserSignInDetails;
	signInError: boolean = false;

	@ViewChild('userForm') form : any;

  constructor(private router:Router, private elementRef: ElementRef) {
  	this.elementRef = elementRef;
  }

  ngOnInit() {
  	this.userSignInDetails = {
      email : '',
      password : ''
    }
  }
  signinUser({ value, valid } : { value:UserSignInDetails, valid:boolean }) {
  	
  	var storedEmail = localStorage.getItem('email');
  	var storedPassword = localStorage.getItem('password');

  	if((value.email == storedEmail) && (value.password == storedPassword)) {
  		this.signInError = false;
  		this.router.navigateByUrl('weather-data');
  	}else{
  		this.signInError = true;
  	}
  }
}
