import { Component, OnInit } from '@angular/core';
import { ApiService } from './services/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title: String = 'countries-app';
  data: Array<object> = [];

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.getAllCountries();
  }

  public getAllCountries() {
    this.apiService.getAllCountries().subscribe((data: Array<object>) => {
      this.data = data;
      console.log(data);
    });
  }
}
