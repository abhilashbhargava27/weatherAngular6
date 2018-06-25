import { Component, OnInit, ElementRef, Inject, Input, ChangeDetectorRef  } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { Router } from '@angular/router'
import { Globals } from '../../globalVariable/globalVariable';

import { catchError, map, tap } from 'rxjs/operators';

declare var google: any;

@Component({
    selector: 'weather-data',
    templateUrl: './weather-data.component.html',
    styleUrls: ['./weather-data.component.scss']
})
export class WeatherDataComponent implements OnInit {
    
    userName : string;
    humidity : number  = 0;
    pressure : number = 0;
    temp : number = 0;
    temp_max : number = 0;
    temp_min : number = 0;
    city : string;
    weather : string;
    searchBoxVisibility : boolean = false;
    detailsFetched : boolean = false;
    weatherData : any = [];

    constructor(
        private cdr: ChangeDetectorRef, 
        private elementRef: ElementRef,
        private http: HttpClient,
        private router:Router,
        private globals: Globals
    ) {
        this.elementRef = elementRef;
    }

    ngOnInit() {
      this.userName = localStorage.getItem('name');
      this.weatherData = JSON.parse(localStorage.getItem("weatherReportDetail"));

      //var dataImage = localStorage.getItem('imgData');
      
      //var userImage = this.elementRef.nativeElement.querySelector('#userProfileImage');
      //userImage.src = "data:image/png;base64," + dataImage;
    }

    getWeatherData(city) {
      this.http.get("https://api.openweathermap.org/data/2.5/weather?q=" + city + "&APPID=43b9e8c04ab96f4ecce7d6d1fd45b859").
      subscribe((data) => {
        this.displayWeatherDetails(data);
      })
    }

    autocomplete() {
      var places = new google.maps.places.Autocomplete(this.elementRef.nativeElement.querySelector('#txtPlaces'));
      google.maps.event.addListener(places, 'place_changed', () => {
        if(places.getPlace().formatted_address){
          var address = places.getPlace().formatted_address;
          var value = address.split(",");
          var count = value.length;
          var city = value[count - 3];
          this.getWeatherData(city);
        }
      });
    }

    getLocation() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(this.showPosition.bind(this));
        } else {
            console.log("Geolocation is not supported by this browser.");
        }
    }

    showPosition(position) {
      var that = this;
      var geocoder = new google.maps.Geocoder;
      var latlng = {
        lat: parseFloat(position.coords.latitude),
        lng: parseFloat(position.coords.longitude)
      };
      geocoder.geocode({
        'location': latlng
      }, function(results, status) {
        if (status === 'OK') {
          if (results[0]) {
            that.displayAutoDetectWeather(results[0].formatted_address);
          } else {
              console.log('No results found');
          }
        } else {
          console.log('Geocoder failed due to: ' + status);
        }
      });
    }

    displayAutoDetectWeather(autoDetectArea) {
      var valueAutoComplete = autoDetectArea.split(",");
      var countAutoComplete = valueAutoComplete.length;
      var cityAutoComplete = valueAutoComplete[countAutoComplete - 3];
      this.getWeatherData(cityAutoComplete);
    }
    
    logout() {
      localStorage.removeItem("weatherReportDetail");
      this.globals.userSignedIn = false;
      this.router.navigateByUrl('/signin');
    }

    toggleHide() {
      this.searchBoxVisibility = !this.searchBoxVisibility;
    }
    getLocationWeather() {
      ( < any > window).googleMapsReady = this.autocomplete.bind(this);
      var script = document.createElement("script");
      script.type = "text/javascript";
      document.getElementsByTagName("head")[0].appendChild(script);
      script.src = "https://maps.googleapis.com/maps/api/js?key=AIzaSyD1VrN_wtyp9e4hfkhSI3pDYYr1hrI-AcA&sensor=false&libraries=places&callback=googleMapsReady";
      
      this.getLocation();
    }
    displayWeatherDetails(weatherDetails) {
      this.detailsFetched = true;
      this.weather = weatherDetails.weather[0].main;

      var weatherReportDetail = [{ 
        "name": weatherDetails.name,
        "humidity": weatherDetails.main.humidity,
        "pressure": weatherDetails.main.pressure,
        "temp": weatherDetails.main.temp - 273.15,
        "temp_max": weatherDetails.main.temp_max - 273.15,
        "temp_min": weatherDetails.main.temp_min - 273.15
      }];

      var stored = JSON.parse(localStorage.getItem("weatherReportDetail"));
      
      if(stored!=null) {
        var isPresent = false;
        for(var i = 0; i<stored.length; i++) {
          if(stored[i].name==weatherDetails.name) {
            isPresent = true;
            break;
          }
        }
        if(!isPresent) {
          stored.push({ 
            "name": weatherDetails.name,
            "humidity": weatherDetails.main.humidity,
            "pressure": weatherDetails.main.pressure,
            "temp": weatherDetails.main.temp - 273.15,
            "temp_max": weatherDetails.main.temp_max - 273.15,
            "temp_min": weatherDetails.main.temp_min - 273.15
          });  
          localStorage.setItem("weatherReportDetail", JSON.stringify(stored));
        }
      }else {
        localStorage.setItem("weatherReportDetail", JSON.stringify(weatherReportDetail));
      }

      var result = JSON.parse(localStorage.getItem("weatherReportDetail"));
      this.weatherData = result;
      
      //To detect changes
      this.cdr.detectChanges();
    }
}