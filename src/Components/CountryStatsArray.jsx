import React from "react";

export default function CountryStatsArray(props) {
  const arr = props.statValue;
  return (
    <div
      className="stat"
      style={{ display: arr.length === 0 ? "none" : "inline" }}
    >
      <div className="statName">
        {props.statName}:{" "}
        {arr.map((d) => {
          return <li className="statValueArray">{d}</li>;
        })}
      </div>
    </div>
  );
}
