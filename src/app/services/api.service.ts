import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class ApiService {
  readonly baseURL: String = 'https://restcountries.eu/rest/v2';
  
  constructor(private httpClient: HttpClient) { }

  getAllCountries(){
    return this.httpClient.get(`${this.baseURL}/all`);
  }

  getCountry(name: String) {
    return this.httpClient.get(`${this.baseURL}/name/${name}`);
  }
}
