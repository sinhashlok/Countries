import React, { useState } from "react";

export default function Search(props) {
  const [search, setSearch] = useState("");

  // submits the country name to App (parent component)
  function handleSubmit(name) {
    console.log(`${name} submit`);
    props.submit(name);
  }

  // handles input changes
  function handleChange(event) {
    setSearch(event.target.value);
  }

  // called when any button pressed
  function handleKeyDown(event) {
    // if it is the button is  "ENTER", then only goes ahead
    if (event.key === "Enter") {
      // if input is empty, we do not submit the data
      if (search === "") {
        alert("Specify Country Name");
      } else {
        event.preventDefault();
        // we call the submit function
        handleSubmit(search);

        // erase the previous data
        setSearch("");
      }
    }
  }

  return (
    <form className="search-form">
      <input
        type="text"
        name="countryName"
        className="search-box"
        placeholder="search country name"
        value={search}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        autoComplete="off"
      />
    </form>
  );
}
