import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { CountryState } from './core/store/country/reducers/country.reducers';
import * as countryActions from './core/store/country/actions/country.actions';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'ngrx';
  constructor(private store: Store<CountryState>) {}
  ngOnInit(): void {
    this.initValues();
  }
  initValues() {
    this.store.dispatch(countryActions.getCountry());
  }
}
