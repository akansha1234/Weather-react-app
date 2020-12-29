import React, { useState } from "react";
import "./styles.css";
import Search from "./Search";
import Weather from "./Weather";
export default function App() {
  const [weather, setWeather] = useState([]);
  const [value, setValue] = useState("");
  const handleChange = (e) => {
    const value = e.target.value;
    setValue(value);
  };

  const search = (evt) => {
    if (evt.key === "Enter") {
      fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${value}&units=metric&APPID=d41202837f6625fe9bafb21ea8487fae`
      )
        .then((res) => res.json())
        .then((result) => {
          setWeather(result);
          setValue("");
          // console.log(result);
        });
    }
  };

  return (
    <div className="App">
      <Weather weather={weather} />
      <Search value={value} onChange={handleChange} onKeyPress={search} />
    </div>
  );
}
