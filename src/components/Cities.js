import React, { useState, useEffect } from "react";
import indianCities from "./CitiesList";

const Cities = () => {
  const [search, setSearch] = useState("");
  const [cities, setCities] = useState([]);
  const [click, setClick] = useState();

  useEffect(() => {
    search &&
      setCities(
        indianCities.filter((city) =>
          city.toLowerCase().includes(search.trim().toLowerCase())
        )
      );
  }, [search]);

  function updateSearch(city) {
    setSearch(city);
    setClick(true);
  }
  return (
    <div>
      <form>
        <input
          type="text"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value)
            setClick(false)
          }}
        />{" "}
        <br />
        {!click && (
          <ul>
            {cities &&
              cities.map((city, index) => (
                <li onClick={() => updateSearch(city)} key={index}>
                  {city}
                </li>
              ))}
          </ul>
        )}
      </form>
    </div>
  );
};

export default Cities;
