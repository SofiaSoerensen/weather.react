import React, { useState } from "react";
import axios from "axios";

export default function Search() {
  let [city, setCity] = useState("");
  let [showData, setshowData] = useState(false);
  let [temperature, setTemperature] = useState(null);
  let [description, setDescription] = useState(null);
  let [humidity, setHumidity] = useState(null);
  let [wind, setWind] = useState(null);
  let [icon, setIcon] = useState(null);

  function handleSubmit(event) {
    event.preventDefault();
    getCityData();
    setshowData(true);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  function handleResponse(response) {
    setTemperature(response.data.temperature.current);
    setDescription(response.data.condition.description);
    setHumidity(response.data.temperature.humidity);
    setWind(response.data.wind.speed);
    setIcon(response.data.condition.icon_url);
  }

  function getCityData() {
    console.log("getCityData");
    let apiKey = "2008d7d14b59443btfdod2382a33e32f";
    let units = "metric";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=${units}`;

    axios.get(apiUrl).then(handleResponse);
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className="Searchbar">
        <input type="search" onChange={updateCity} />
        <input type="submit" value="Search" />
      </form>
      <div style={{ display: showData ? "block" : "none" }}>
        <ul>
          <li>Temperature: {Math.round(temperature)}℃</li>
          <li>Description: {description}</li>
          <li>Humidity: {humidity}%</li>
          <li>Wind: {wind}km/h</li>
          <li>{icon && <img src={icon} />}</li>
        </ul>
      </div>
    </div>
  );
}
