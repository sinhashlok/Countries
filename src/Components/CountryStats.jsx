import React from "react";

export default function CountryStats(props) {
  return (
    <div
      className="stat"
      style={{ display: props.statValue === "" ? "none" : "inline" }}
    >
      <div className="statName">
        {props.statName}: <span className="statValue">{props.statValue}</span>
      </div>
    </div>
  );
}
