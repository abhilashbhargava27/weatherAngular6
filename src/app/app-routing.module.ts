import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SignUpComponent } from './components/sign-up/sign-up.component';
import { LoginComponent } from './components/login/login.component';
import { WeatherDataComponent } from './components/weather-data/weather-data.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

const routes: Routes = [
	{ path: '', component: SignUpComponent },
	{ path: 'login', component: LoginComponent },
	{ path: 'weather-data', component: WeatherDataComponent },
	{ path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
