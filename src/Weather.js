//import React from "react";
import axios from "axios";

export default function Weather(props) {
  function handleResponse(response) {
    alert(
      `The Weather in ${props.city} is ${response.data.temperature.current}℃`
    );
  }
  let apiKey = "2008d7d14b59443btfdod2382a33e32f";
  let units = "metric";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${props.city}&key=${apiKey}&units=${units}`;

  axios.get(apiUrl).then(handleResponse);
}
