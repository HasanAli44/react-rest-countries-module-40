import { useState } from "react";
import "./style.css";

const Country = ({ country, handleVisitedCountry, handleVisitedFlags }) => {
  const { name, flags, population, timezones } = country;

  const [visited, setVisited] = useState(false);

  const handleVisited = () => {
    setVisited(!visited);
  };

  return (
    <div className={`box  ${visited && "visited"}`}>
      <h3>Name:{name.common}</h3>
      <img src={flags.png} alt="" />
      <p>Population:{population}</p>
      <h6>Timezones :{timezones}</h6>
      <button
        onClick={() => handleVisitedCountry(country)}
        style={{ border: "solid 2px black" }}
      >
        Mark Visited
      </button>
      <br />
      <button
        onClick={() => handleVisitedFlags(country.flags.png)}
        style={{ border: "solid 2px black", marginTop: "10px" }}
      >
        Add Flags
      </button>
      <br />
      <button
        onClick={handleVisited}
        style={{
          border: "solid 2px black",
          marginRight: "10px",
          marginTop: "10px",
        }}
      >
        {visited ? "Visited" : "Going"}
      </button>
      {visited ? "I have visited this country" : "I want to visit"}
    </div>
  );
};

export default Country;
