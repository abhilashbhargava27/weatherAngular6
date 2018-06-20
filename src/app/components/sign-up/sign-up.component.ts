import { Component, OnInit } from '@angular/core';
import { userDetails } from '../../model/userDetails.model';

@Component({
  selector: 'sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
	model = new userDetails('','') 

  constructor() { }

  ngOnInit() {
  }

  signupUser(event) {
    console.log("inside the signup functions")
    event.preventDefault();
    
    const target = event.target;

    var storedEmail = localStorage.getItem('email');
    var storedPassword = localStorage.getItem('password');

    if(storedEmail && storedPassword) {
      console.log("Username and password exists")
    }else {
      const email = target.querySelector('#email').value
      const password = target.querySelector('#password').value

      localStorage.setItem('email', email);
      localStorage.setItem('password', password);
    }
    
    //localStorage.clear();
    
  }
}
