import React, { useState, useEffect } from 'react';
import { ApiResponse, CountryResponse } from './interfaces';

import './App.css';
import { ReactComponent as CovidLogo } from './covid19.svg';

import { formatDate } from './helpers/formatDate';
import { IpService, Covid19Service } from './services';
import { CovidInfoSection, CountrySelect } from './components';

export const App = () => {
  const [apiInfo, setApiInfo] = useState<Partial<ApiResponse>>({});
  const [countryInfo, setCountryInfo] = useState<Partial<CountryResponse>>({});

  const fetchCountry = (country: string) => 
    Covid19Service.country(country).subscribe(setCountryInfo);

  useEffect(() => {
    Covid19Service.api().subscribe(setApiInfo);
    IpService.country().subscribe(fetchCountry);
  }, []);

  return (
    <div className="App">
      <CovidLogo style={{ width: '120px'}}/>
      <h1>Surto de coronavírus Covid-19</h1>
      <p>Fontes de dados da API de <a href="https://github.com/mathdroid/covid-19-api">Muhammad Mustadi</a></p>

      <CovidInfoSection
          deaths={apiInfo.deaths?.value ?? 0}
          confirmed={apiInfo.confirmed?.value ?? 0}
          recovered={apiInfo.recovered?.value ?? 0}>
        <div>Casos Globais</div>
        <div style={{color: '#4caf50'}}>
          Última atualização: {formatDate(apiInfo.lastUpdate)}
        </div>
      </CovidInfoSection>

      <CovidInfoSection
          deaths={countryInfo.deaths?.value ?? 0}
          confirmed={countryInfo.confirmed?.value ?? 0}
          recovered={countryInfo.recovered?.value ?? 0}>
        <CountrySelect onChange={fetchCountry} selected="Brazil" />
        <span style={{color: '#4caf50'}}>
          Última atualização: {formatDate(countryInfo.lastUpdate)}
        </span>
      </CovidInfoSection>
    </div>
  );
};
