import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { UserDetails } from '../../model/userDetails.model';
import { Router } from '@angular/router'

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
      console.log("exists")
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
        console.log("Details Exists")
        this.router.navigateByUrl('weather-data');
      }else {
        const name = value.name;
        const email = value.email;
        const password = value.password

        const bannerImage = this.elementRef.nativeElement.querySelector('#bannerImage');
        console.log(bannerImage.src)
        const imgData = this.getBase64Image(bannerImage);

        localStorage.setItem("imgData", imgData);
        localStorage.setItem('name', name);
        localStorage.setItem('email', email);
        localStorage.setItem('password', password);

        this.router.navigateByUrl('weather-data');
      }
    }
  }
  readURL(input) {
    console.log("inside readUrl")
    this.elementRef.nativeElement.querySelector("#bannerImage").style.display = "block";
    var that = this;
    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
            console.log(e)
            //that.elementRef.nativeElement.querySelector('#bannerImage').src =  e.target.result;
        }

        reader.readAsDataURL(input.files[0]);
    }
  }

  getBase64Image(img) {
    var canvas = document.createElement("canvas");
    canvas.width = img.width;
    canvas.height = img.height;

    var ctx = canvas.getContext("2d");
    ctx.drawImage(img, 0, 0);

    var dataURL = canvas.toDataURL("image/png");

    return dataURL.replace(/^data:image\/(png|jpg);base64,/, "");
  }
}
