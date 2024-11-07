import React from "react";

const WeatherCard = ({ weatherData }) => {
  return (
    <div className="weather-card">
      <p className="weather-name">{weatherData?.name}</p>
      <div className="weather-temp-wrapper">
        <p className="weather-temp">{Math.round(weatherData.main.temp)} °C</p>
        <p className="weather-desc">{weatherData?.weather[0]?.main}</p>
      </div>
      <div className="temp-max-min-wrapper">
        <p>Max: {Math.round(weatherData?.main?.temp_max)} °C</p>
        <p>Min: {Math.round(weatherData?.main?.temp_min)} °C</p>
      </div>
      <div>
        <img
          src={`https://openweathermap.org/img/wn/${weatherData?.weather[0]?.icon}@2x.png`}
          alt=""
        />
      </div>
      <div className="additional-info">
        <div>
          <p>{Math.round(weatherData?.main?.feels_like)} °C</p>
          <p>Feels like</p>
        </div>
        <div>
          <p>{weatherData?.main?.humidity} %</p>
          <p>Humidity</p>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;
