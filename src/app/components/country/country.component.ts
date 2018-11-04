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
  constructor(private apiService: ApiService, private route: ActivatedRoute, private location: Location) {}

  ngOnInit() {
    this.name = this.route.snapshot.paramMap.get('name');
    this.getCountry();
  }

  getCountry() {
    this.apiService.getCountry(this.name).subscribe((data: Array<object>) => {
      this.country = data[0];
      console.log(data[0]);
    });
  }

  goBack() {
    this.location.back();
  }
}
