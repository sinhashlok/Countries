import React, { useEffect, useState } from "react";
import Box from "./Components/Box";
import CountryData from "./Components/CountryData";
import Heading from "./Components/Heading";
import Navbar from "./Components/Navbar";
import Search from "./Components/Search";

export default function App() {
  const [countryName, setCountryName] = useState("");
  const [countryData, setCountryData] = useState({
    officialName: "",
    currency: {
      currencyName: "",
      currencySymbol: "",
    },
    capital: "",
    continent: "",
    subregion: "",
    gMaps: "",
    population: "",
    languages: [],
    timezone: [],
    flag: "",
  });

  useEffect(() => {
    if (countryName !== "") {
      console.log("fetching");
      fetch(`https://restcountries.com/v3.1/name/${countryName}`)
        .then((results) => results.json())
        .then((data) => {
          setCountryData({
            officialName: data[0].name.official,
            currency: {
              currencyName:
                data[0].currencies[Object.keys(data[0].currencies)[0]].name,
              currencySymbol:
                data[0].currencies[Object.keys(data[0].currencies)[0]].symbol,
            },
            capital: data[0].capital,
            continent: data[0].continents,
            subregion: data[0].subregion,
            gMaps: data[0].maps.googleMaps,
            population: data[0].population,
            languages: Object.values(data[0].languages),
            timezone: Object.values(data[0].timezones),
            flag: data[0].flags.svg,
          });
        });
    }
  }, [countryName]);

  function handelSubmit(name) {
    setCountryName(name);
  }

  console.log(countryData);

  return (
    <div>
      <Navbar />
      <Box />
      <Heading />
      <Search submit={handelSubmit} />
      <CountryData
        flag={countryData.flag}
        officialName={countryData.officialName}
        gMaps={countryData.gMaps}
        capital={countryData.capital}
        continent={countryData.continent}
        subregion={countryData.subregion}
        timezone={countryData.timezone}
        population={countryData.population}
        languages={countryData.languages}
        currency={countryData.currency.currencyName}
      />
    </div>
  );
}
