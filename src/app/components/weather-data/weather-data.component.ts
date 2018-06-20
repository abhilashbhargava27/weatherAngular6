import { Component, OnInit, ElementRef, Inject } from '@angular/core';

declare var google: any;

@Component({
  selector: 'weather-data',
  templateUrl: './weather-data.component.html',
  styleUrls: ['./weather-data.component.scss']
})
export class WeatherDataComponent implements OnInit {
  //elementRef: ElementRef;

  constructor(private elementRef: ElementRef) { 
    this.elementRef = elementRef;
  }

  ngOnInit() {
    google.maps.event.addDomListener(window, 'load', function() {
      console.log(this.elementRef.nativeElement.select('#txtPlaces'))
      var places = new google.maps.places.Autocomplete(this.elementRef.nativeElement.select('#txtPlaces'));
      console.log(places,"places");
      google.maps.event.addListener(places, 'place_changed', function() {
        console.log(places.getPlace());
        var place = places.getPlace();
        var address = place.formatted_address;
        var value = address.split(",");
        //count = value.length;
        //country = value[count - 1];
        //state = value[count - 2];
        //city = value[count - 3];
        //var z = state.split(" ");
        //document.querySelector("#selCountry").text = country;
        //var i = z.length;
        //document.querySelector("#pstate").value = z[1];
        //if (i > 2)
        //    document.querySelector("#pzcode").value = z[2];
        //document.querySelector("#pCity").value = city;
        //var latitude = place.geometry.location.lat();
        //var longitude = place.geometry.location.lng();
        //var mesg = address;
        //document.querySelector("#txtPlaces").value = mesg;
        //var lati = latitude;
        //document.querySelector("#plati").value = lati;
        //var longi = longitude;
        //document.querySelector("#plongi").value = longi;
      });
    });
  }
  gettingJSON() {
    //$.getJSON("http://api.openweathermap.org/data/2.5/weather?q=London&APPID=43b9e8c04ab96f4ecce7d6d1fd45b859", function(json) {
        //console.log(json)
    //})
  }

  //var x = document.querySelector("#geolocation");

  getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(this.showPosition);
    } else {
        //x.value = "Geolocation is not supported by this browser.";
    }
  }

  showPosition(position) {
    //x.value = "Latitude: " + position.coords.latitude +
        "<br>Longitude: " + position.coords.longitude;

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
                console.log(results,"result of geocoder")
            } else {
                console.log('No results found');
            }
        } else {
            console.log('Geocoder failed due to: ' + status);
        }
    });
  }
}
