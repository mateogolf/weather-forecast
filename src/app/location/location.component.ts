import { Component, OnInit} from '@angular/core';
import{WeatherService} from './../weather.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent implements OnInit {
  city;
  cityJSON;
  // cities = [
  //   {abrv:'dc',city:'Washington DC'},
  //   { abrv: 'seattle', city: 'Seattle, WA' },
  //   { abrv: 'sanjose', city: 'San Jose, CA' },
  //   { abrv: 'burbank', city: 'Burbank, CA' },
  //   { abrv: 'dc', city: 'Washington DC' },
  // ]
  constructor(private _service: WeatherService, private _route: ActivatedRoute) {
    this._route.paramMap.subscribe(params => {
      this.city = params.get('city');
      this._service.getWeatherAt(this.city, (weather) => {
        this.cityJSON = weather;
      })
    })
  }
  ngOnInit() {
  }

}
