import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WReportService {

  constructor(private http : HttpClient) { }
  get_report(region: string){
    return this.http.get('https://api.weatherapi.com/v1/current.json?key=5c7280c1bbc24cc4abd22813221310&q='+region);
  }
}

