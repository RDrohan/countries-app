import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
})
export class CountryComponent implements OnInit {
  name: String = '';
  country: object = {};
  panelOpenState = false;
  constructor(private apiService: ApiService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.name = this.route.snapshot.paramMap.get('name');
    this.getCountry();
  }

  getCountry() {
    this.apiService.getCountry(this.name).subscribe((data: Array<object>) => {
      let countryData = data[0];
      this.country = countryData;
      console.log(countryData);
    });
  }
}
