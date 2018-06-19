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

  get currentUser() {
  	return JSON.stringify(this.model);
  } 
}
