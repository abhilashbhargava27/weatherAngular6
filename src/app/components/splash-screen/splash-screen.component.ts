import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'splash-screen',
  templateUrl: './splash-screen.component.html',
  styleUrls: ['./splash-screen.component.scss']
})
export class SplashScreenComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  	setTimeout((router: Router) => {
        this.router.navigateByUrl('signup');
    }, 5000);
  }
  signUpPage() {
  	this.router.navigateByUrl('signup');
  }
}
