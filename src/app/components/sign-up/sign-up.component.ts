import { Component, OnInit, ViewChild } from '@angular/core';
import { userDetails } from '../../model/userDetails.model';
import { Router } from '@angular/router'

@Component({
  selector: 'sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})

export class SignUpComponent implements OnInit {
  
  userDetails : userDetails[];

  @ViewChild('userForm') form : any;

  constructor(private router:Router) { }

  ngOnInit() {
    this.userDetails = {
      name:'',
      email:'',
      password:''
    }
    var storedEmail = localStorage.getItem('email');
    var storedPassword = localStorage.getItem('password');

    if(storedEmail && storedPassword) {
      console.log("exists")
      this.router.navigateByUrl('weather-data');
    }
  }

  signupUser({ value, valid }: { value:userDetails, valid:boolean }) {
    if(!valid){
      console.log("form is not valid") //This will never be printed coz of validation at client end
    }else{
      var name = localStorage.getItem('name');
      var storedEmail = localStorage.getItem('email');
      var storedPassword = localStorage.getItem('password');

      if(name && storedEmail && storedPassword) {
        console.log("Details Exists")
        this.router.navigateByUrl('weather-data');
      }else {
        const name = value.name;
        const email = value.email;
        const password = value.password

        localStorage.setItem('name', name);
        localStorage.setItem('email', email);
        localStorage.setItem('password', password);
        this.router.navigateByUrl('weather-data');
      }
    }
      
  }
}
