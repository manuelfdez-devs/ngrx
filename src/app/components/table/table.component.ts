import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Country } from 'src/app/core/models/country.model';
import { AppStateWithCountry, CountryState } from 'src/app/core/store';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit {
  countries: Country[];
  constructor(private store: Store<AppStateWithCountry>) {}

  ngOnInit(): void {
    this.store.select('country').subscribe((res) => {
      console.log('country from store', res);
      this.countries = [...res.country];
    });
  }
}
