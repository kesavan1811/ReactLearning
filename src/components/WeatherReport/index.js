import axios from "axios";
import React, { useState } from "react";

function Weather() {
  const [temprature, setTemprature] = useState("");
  const [city, setCity] = useState("Melbourne");
  const [country, setCountry] = useState("AU");
  const [desc, setDesc] = useState("");

  const getWeatherData = (city, country) => {
    axios({
      method: "GET",
      url: `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&APPID=988fe6cfe22d40986092aa971bf66834`
    })
      .then(res => {
        console.log(res.data.main.temp);
        // Kelvin to Fahrenheit
        setTemprature((res.data.main.temp - 273.15) * 1.8 + 32);
        setDesc(res.data.weather[0].main);
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <div style={{ marginLeft: "33%" }}>
      <div
        style={{
          height: "150px",
          width: "450px",
          backgroundColor: "#94e5ff",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "25px"
        }}
      >
        <br />
        {new Date().toLocaleString()}
        <br />
        {city} Weather
        <br />
        {Math.round(temprature * 100) / 100} ℉ - {desc}
        <br />
      </div>
      <input type="text" value={city} onChange={e => setCity(e.target.value)} />
      <input
        type="text"
        value={country}
        onChange={e => setCountry(e.target.value)}
      />
      <button
        onClick={() => {
          getWeatherData(city, country);
        }}
      >
        GET
      </button>
    </div>
  );
}

export default Weather;
