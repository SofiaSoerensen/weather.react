import React from "react";
import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="New York" />
        <footer>
          This project was coded by Sofia Soerensen,{" "}
          <a
            href="https://github.com/SofiaSoerensen/weather.react"
            target="blank"
            rel="noopener noreferrer"
          >
            is open-sourced on Github
          </a>{" "}
          and hosted on{" "}
          <a
            href="https://vejrappreact.netlify.app/"
            target="blank"
            rel="noopener noreferrer"
          >
            Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}
