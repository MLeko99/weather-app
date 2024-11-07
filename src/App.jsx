import "./App.css";
import React from "react";
import Weather from "./components/Weather";

const App = () => {
  return (
    <div className="app-wrapper">
      <h1>Weather App</h1>
      <Weather />
    </div>
  );
};

export default App;
