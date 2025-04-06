import React from "react";
import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather />
        <footer>
          This project was coded by Sofia Soerensen,{" "}
          <a href="https://github.com/SofiaSoerensen/weather.react">
            is open-sourced on Github
          </a>{" "}
          and hosted on Netlify
        </footer>
      </div>
    </div>
  );
}
