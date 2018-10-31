import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  countries: Array<object> = [];

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.getAllCountries();
  }

  getAllCountries() {
    this.apiService.getAllCountries().subscribe((data: Array<object>) => {
      this.countries = data;
    });
  }
}
