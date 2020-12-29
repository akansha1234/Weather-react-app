import React from "react";
export default function Weather({ weather }) {
  return (
    <div>
      {typeof weather.main != "undefined" ? (
        <div>
          <div className="location-box">
            <div className="location">
              {weather.name}, {weather.sys.country}
            </div>
          </div>
          <div className="weather-box">
            <div className="weather">{weather.weather[0].main}</div>
            <div className="temp">
              {Math.round(weather.main.temp)}°c
              <div className="min-max">
                Max:{weather.main.temp_max}
                <hr />
                Min:{weather.main.temp_min}
              </div>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
