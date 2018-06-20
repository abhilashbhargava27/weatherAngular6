import {
    Component,
    OnInit,
    ElementRef,
    Inject
} from '@angular/core';
import {
    HttpClient
} from '@angular/common/http';

import {
    catchError,
    map,
    tap
} from 'rxjs/operators';

declare var google: any;

@Component({
    selector: 'weather-data',
    templateUrl: './weather-data.component.html',
    styleUrls: ['./weather-data.component.scss']
})
export class WeatherDataComponent implements OnInit {

    constructor(private elementRef: ElementRef, private http: HttpClient) {
        this.elementRef = elementRef;
    }

    ngOnInit() {
        ( < any > window).googleMapsReady = this.autocomplete.bind(this);
        var script = document.createElement("script");
        script.type = "text/javascript";
        document.getElementsByTagName("head")[0].appendChild(script);
        script.src = "https://maps.googleapis.com/maps/api/js?key=AIzaSyD1VrN_wtyp9e4hfkhSI3pDYYr1hrI-AcA&sensor=false&libraries=places&callback=googleMapsReady";
        this.getLocation();
    }
    
    getWeatherData(city) {
        this.http.get("http://api.openweathermap.org/data/2.5/weather?q=" + city + "&APPID=43b9e8c04ab96f4ecce7d6d1fd45b859").
        subscribe((data) => console.log(data))
    }

    autocomplete() {

        var places = new google.maps.places.Autocomplete(this.elementRef.nativeElement.querySelector('#txtPlaces'));

        google.maps.event.addListener(places, 'place_changed', () => {
            console.log(places.getPlace());
            var address = places.getPlace().formatted_address;
            var value = address.split(",");
            var count = value.length;
            var city = value[count - 3];
            console.log(city, 'city');
            this.getWeatherData(city);
        });
    }

    gettingJSON() {
        //$.getJSON("http://api.openweathermap.org/data/2.5/weather?q=London&APPID=43b9e8c04ab96f4ecce7d6d1fd45b859", function(json) {
        //console.log(json)
        //})
    }

    getLocation() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(this.showPosition);
        } else {
            console.log("Geolocation is not supported by this browser.");
        }
    }

    showPosition(position) {

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
                    console.log(results, "result of geocoder")
                } else {
                    console.log('No results found');
                }
            } else {
                console.log('Geocoder failed due to: ' + status);
            }
        });

    }

}