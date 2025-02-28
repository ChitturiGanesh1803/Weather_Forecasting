import React from 'react';
import { useLocation } from 'react-router-dom';
import WeatherDisplay from '../components/WeatherDisplay';

const WeatherPage = () => {
  const location = useLocation();
  const { weatherData } = location.state || {}; // Get data from navigation state

  if (!weatherData) {
    return <h2>No weather data available. Please go back and search again.</h2>;
  }

  return (
    <div className="container">
      <h1>Weather Details</h1>
      <WeatherDisplay weatherData={weatherData} />
    </div>
  );
};

export default WeatherPage;
