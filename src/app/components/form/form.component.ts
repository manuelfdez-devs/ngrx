import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Store } from '@ngrx/store';
import { Country } from 'src/app/core/models/country.model';
import { CountryState } from 'src/app/core/store';
import * as countryActions from '../../core/store/country/actions/country.actions';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  countryForm: FormGroup;
  constructor(private fb: FormBuilder, private store: Store<CountryState>) {}

  ngOnInit(): void {
    this.initForm();
  }

  private initForm(): void {
    this.countryForm = this.fb.group({
      name: new FormControl('', [Validators.required, Validators.minLength(3)]),
      area: new FormControl('', [Validators.required]),
    });
  }
  saveCountry() {
    const newCountry: Country = {
      name: this.countryForm.get('name').value,
      area: this.countryForm.get('area').value,
    };

    this.store.dispatch(countryActions.addCountry({ country: newCountry }));
    this.countryForm.reset();
  }
}
