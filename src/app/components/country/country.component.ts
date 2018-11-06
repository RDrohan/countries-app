import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
})
export class CountryComponent implements OnInit {
  name: String = '';
  country: object = {};
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

  getLanguage(langCode: string) {
    switch(langCode) {
      case 'br':
        return 'Brazilian Portuguese';
      case 'de':
        return 'German';
      case 'es':
        return 'Spanish';
      case 'fa':
        return 'Farsi';
      case 'fr':
        return 'French';
      case 'hr':
        return 'Croatian';
      case 'it':
        return 'Croatian'
      case 'ja':
        return 'Japanese'
      case 'nl':
        return 'Dutch'
      case 'pt':
        return 'Portuguese'
      default:
        return 'English';
    }
  }
}