import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Globals } from './globalVariable/globalVariable';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { WeatherDataComponent } from './components/weather-data/weather-data.component';
import { SplashScreenComponent } from './components/splash-screen/splash-screen.component';
import { SignInComponent } from './components/sign-in/sign-in.component';

@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent,
    NotFoundComponent,
    WeatherDataComponent,
    SplashScreenComponent,
    SignInComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ Globals ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
