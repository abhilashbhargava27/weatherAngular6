import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { UserDetails } from '../../model/userDetails.model';
import { Router } from '@angular/router';

@Component({
  selector: 'sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})

export class SignUpComponent implements OnInit {
  
  userDetails : UserDetails;

  @ViewChild('userForm') form : any;

  constructor(private router:Router, private elementRef: ElementRef) { 
    this.elementRef = elementRef;
  }

  ngOnInit() {
    
    this.userDetails = {
      name : '',
      email : '',
      password : ''
    }

    var storedName = localStorage.getItem('name');
    var storedEmail = localStorage.getItem('email');
    var storedPassword = localStorage.getItem('password');

    if(storedName && storedEmail && storedPassword) {
      this.router.navigateByUrl('weather-data');
    }
  }

  signupUser({ value, valid } : { value:UserDetails, valid:boolean }) {
    if(!valid){
      console.log("form is not valid") //This will never be printed coz of validation at client end
    }else{
      var storedName = localStorage.getItem('name');
      var storedEmail = localStorage.getItem('email');
      var storedPassword = localStorage.getItem('password');

      if(storedName && storedEmail && storedPassword) {
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

  readURL(input) {
    
    this.elementRef.nativeElement.querySelector("#userImage").style.display = "block";
    
    var that = this;
    
    var imgObj = that.elementRef.nativeElement.querySelector('#uploadUserImage');

    if (imgObj.files && imgObj.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e:any) {
          var targetObj = e.target;
          that.elementRef.nativeElement.querySelector('#userImage').src =  targetObj.result;
        }.bind(this);

        reader.readAsDataURL(imgObj.files[0]);
    }

    var userProfileImage = this.elementRef.nativeElement.querySelector('#userImage');
    var imgData = this.getBase64Image(userProfileImage);

    localStorage.setItem("imgData", imgData);
  }

  getBase64Image(img) {
    
    var canvas = document.createElement("canvas");

    canvas.width = 300;
    canvas.height = 227;

    var ctx = canvas.getContext("2d");
    ctx.drawImage(img, 0, 0);

    var dataURL = canvas.toDataURL("image/png");
    
    return dataURL.replace(/^data:image\/(png|jpg);base64,/, "");
  }
}
