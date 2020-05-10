import React, { useEffect, useState, ChangeEvent } from 'react';

import { flags } from '.';
import { Covid19Service } from '../services';
import { CountriesResponse } from '../interfaces';


export const CountrySelect = ({ selected = '', onChange = console.log }) => {
  const [value, setValue] = useState(selected);
  const [countries, setCountries] = useState<CountriesResponse>({countries: []});

  useEffect(() => {
    Covid19Service.countries().subscribe(setCountries);
  }, []);

  const handleChange = ({target: {value: countryName}}: ChangeEvent<HTMLSelectElement>) => {
    setValue(countryName);
    const country = countries.countries.find(({ name }) => name === countryName);
    onChange(country?.iso2);
  }

  return (
    <div>
      <select
        value={value}
        onChange={handleChange}
        style={{width: '100px'}}>
        {countries.countries.map(({name}) => 
        <option key={name} value={name}>
          {flags[name as keyof typeof flags]}
          &nbsp;
          {name}
        </option>)}
      </select>
    </div>
  );
};
