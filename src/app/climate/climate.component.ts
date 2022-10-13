import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-climate',
  templateUrl: './climate.component.html',
  styleUrls: ['./climate.component.css']
})

export class ClimateComponent implements OnInit {

  districts = ['Ariyalur', 'Chengalpattu', 'Chennai', 'Coimbatore', 'Cuddalore', 'Dharmapuri', 'Dindigul', 'Erode', 'Gobichettipalayam','Kallakurichi', 'Kanchipuram', 'Kanyakumari', 'Karur', 'Krishnagiri', 'Madurai', 'Nagapattinam', 'Namakkal', 'Nilgiris', 'Perambalur', 'Pudukkottai', 'Ramanathapuram', 'Ranipet', 'Salem', 'Sivaganga', 'Tenkasi', 'Thanjavur', 'Theni', 'Thoothukudi', 'Tiruchirappalli', 'Tirunelveli', 'Tirupathur', 'Tiruppur', 'Tiruvallur', 'Tiruvannamalai', 'Tiruvarur', 'Vellore', 'Viluppuram'];
  selected='Gobichettipalayam';
  info:any;
  main:any;
  keys:any;
  refresh=true;
  displayedColumns=['parameters','values'];
  constructor(private http: HttpClient) {
    this.get_report();
   }
  
  ngOnInit(): void {
    
  }
  get_report(){
    this.refresh=false;
    let _url = 'https://api.weatherapi.com/v1/current.json?key=5c7280c1bbc24cc4abd22813221310&q='+this.selected;
    this.http.get(_url).subscribe((res:any)=>{
      console.log(res);
      this.info ={
        'Feelslike (in Celsius)':res.current.feelslike_c,
        'Feelslike (in Fahrenheit)':res.current.feelslike_f,
        'Humidity':res.current.humidity,
        'Temperature (in Celsius)':res.current.temp_c,
        'Temperature (in Fahrenheit)':res.current.temp_f,
        'Wind gust (in kph)':res.current.gust_kph,
        'Wind gust (in mph)':res.current.gust_mph,
        'Precipitation (in inches)':res.current.precip_in,
        'Precipitation (in millimter)':res.current.precip_mm,
        'Pressure (in inches)':res.current.pressure_in,
        'Pressure (in millibar)':res.current.pressure_mb,
        'Wind degree':res.current.wind_degree,
        'Wind direction':res.current.wind_dir,
        'Wind Speed (in kph)':res.current.wind_kph,
        'Wind Speed (in mph)':res.current.wind_mph,
        'Ultra Violet':res.current.uv,
        'Viscosity (in Km)':res.current.vis_km,
        'Viscosity (in miles)':res.current.vis_miles,
      };
      this.keys = Object.keys(this.info);
      this.main = {
        location:res.location.name,
        icon:res.current.condition.icon,
        text:res.current.condition.text
      };
    });  
    this.refresh=true;
  }
}
