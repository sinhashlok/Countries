import React from "react";
import PlaceIcon from "@mui/icons-material/Place";
import CountryStats from "./CountryStats";
import CountryStatsArray from "./CountryStatsArray";

export default function CountryData(props) {
  return (
    <div className="countryData">
      <div className="basic-data">
        <img
          style={{ display: props.flag === "" ? "none" : "inline" }}
          src={`${props.flag}`}
          alt="flag-svg"
          className="flag"
        />
        <h1 className="countryName">
          {props.officialName}
          <a
            className="location"
            style={{ display: props.flag === "" ? "none" : "inline" }}
            href={`${props.gMaps}`}
            target="_blank"
            alt="gMap link"
          >
            <PlaceIcon />
          </a>
        </h1>
        <h3 className="capitalName">{props.capital}</h3>
      </div>

      <div className="stats">
        <div>
          <CountryStats statName="Continent" statValue={props.continent} />
          <CountryStats statName="Subregion" statValue={props.subregion} />
          <CountryStatsArray statName="TimeZone" statValue={props.timezone} />
        </div>
        <div>
          <CountryStats statName="Currency" statValue={props.currency} />
          <CountryStats statName="Population" statValue={props.population} />
          <CountryStatsArray statName="Languages" statValue={props.languages} />
        </div>
      </div>
    </div>
  );
}
