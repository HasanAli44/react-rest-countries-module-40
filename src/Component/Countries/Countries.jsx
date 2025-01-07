import { useEffect, useState } from "react";
import Country from "../Country/Country";
import "./countries.css";
const Countries = () => {
  const [countries, setCountries] = useState([]);

  const [visitedCountries, setVisitedCountries] = useState([]);

  const [visitedFlags, setVisitedFlags] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);

  const handleVisitedCountry = (country) => {
    console.log("add tis to your visited country");
    const newVisitedCountries = [...visitedCountries, country];
    setVisitedCountries(newVisitedCountries);
  };

  const handleVisitedFlags = (flag) => {
    const newVisitedFlags = [...visitedFlags, flag];
    setVisitedFlags(newVisitedFlags);
  };

  return (
    <div>
      <h2>Countries:{countries.length}</h2>
      {/*  */}
      <h4>Visited Countries:{visitedCountries.length}</h4>
      <ul>
        {visitedCountries.map((country) => (
          <li key={country.cca3}>{country.name.common}</li>
        ))}
      </ul>
      <div className="flags">
        {visitedFlags.map((flag, idx) => (
          <img src={flag} key={idx}></img>
        ))}
      </div>
      {/* display country */}
      <div className="countries">
        {countries.map((country) => (
          <Country
            key={countries.cca3}
            handleVisitedCountry={handleVisitedCountry}
            handleVisitedFlags={handleVisitedFlags}
            country={country}
          ></Country>
        ))}
      </div>
    </div>
  );
};

export default Countries;
