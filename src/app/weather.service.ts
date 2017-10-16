import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class WeatherService {
  weather = { 
    name: '', 
    humidity: 0, 
    temp: 0, 
    temp_max: 0,
    temp_min: 0,
    status: ''
  };
  constructor(private _http: Http) { }

  getWeatherAt(city,callback){
    // let api_key = "&appid=563c9a5e2de6a19691c0a7434a513e56"
    // let url = 'htttp://api.openweathermap.org/data/2.5/weather?q=' + city + ',US&appid=563c9a5e2de6a19691c0a7434a513e56'
    // console.log(url)
    this._http.get(`http://api.openweathermap.org/data/2.5/weather?q=${city},US&appid=563c9a5e2de6a19691c0a7434a513e56`).subscribe(
      (response) => {
        // this.weather = response.json()
        console.log(response.json())
        this.weather.name = response.json().name;
        this.weather.humidity = response.json().main.humidity;
        this.weather.temp = Math.trunc((response.json().main.temp) * (9 / 5) - 459.67);//response.json().main.temp;//Math.trunc((response.json().main.temp)*(9/5) - 459.67)
        this.weather.temp_max = Math.trunc((response.json().main.temp_max) * (9 / 5) - 459.67);
        this.weather.temp_min = Math.trunc((response.json().main.temp_min) * (9 / 5) - 459.67);
        this.weather.status = response.json().weather[0].description;
        callback(this.weather);
      },
      (error) => {
        console.log(error);
        callback(error);
      }
    )
  }

}
