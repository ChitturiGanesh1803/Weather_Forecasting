

import React, { useState } from 'react';
import CoordinatesForm from './components/CoordinatesForm';
import ZipCodeForm from './components/ZipCodeForm';
import CityForm from './components/CityForm'; // ✅ Import CityForm
import WeatherDisplay from './components/WeatherDisplay';
import LoadingSpinner from './components/LoadingSpinner';
import ErrorMessage from './components/ErrorMessage';
import Footer from './components/Footer'; 

import { fetchWeatherByCoordinates, fetchWeatherByZipCode, fetchWeatherByCity } from './services/weatherService';
import './styles/App.css';

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const getWeatherClass = () => {
    if (!weatherData || !weatherData.weather || !weatherData.weather[0]) {
      return '';
    }
    
    const condition = weatherData.weather[0].main.toLowerCase();
    if (condition.includes('cloud')) {
      return 'weather-cloudy';
    } else if (condition.includes('rain')) {
      return 'weather-rainy';
    }
    return '';
  };

  const handleCoordinatesSubmit = async (latitude, longitude) => {
    setLoading(true);
    setError(null);

    try {
      const data = await fetchWeatherByCoordinates(latitude, longitude);
      setWeatherData(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleZipCodeSubmit = async (zipCode) => {
    setLoading(true);
    setError(null);

    try {
      const data = await fetchWeatherByZipCode(zipCode);
      setWeatherData(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleCitySubmit = async (cityName) => {
    setLoading(true);
    setError(null);

    try {
      const data = await fetchWeatherByCity(cityName);
      setWeatherData(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={`app-container ${getWeatherClass()}`}>
      <div className="container text-center">
        <h1>Welcome to the Weather App</h1>
      </div>
      
      <div className="container main-content">
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <CoordinatesForm onSubmit={handleCoordinatesSubmit} />
          </div>
        </div>

        <div className="row mt-4">
          <div className="col-md-6 offset-md-3">
            <ZipCodeForm onSubmit={handleZipCodeSubmit} />
          </div>
        </div>

        <div className="row mt-4">
          <div className="col-md-6 offset-md-3">
            <CityForm onSubmit={handleCitySubmit} /> {/* ✅ City search added */}
          </div>
        </div>
        
        {error && (
          <div className="row mt-4">
            <div className="col-md-6 offset-md-3">
              <ErrorMessage message={error} />
            </div>
          </div>
        )}
        
        {loading && (
          <div className="row mt-4">
            <div className="col-md-6 offset-md-3 text-center">
              <LoadingSpinner />
            </div>
          </div>
        )}
        
        {weatherData && !loading && (
          <div className="row mt-4">
            <div className="col-md-8 offset-md-2">
              <WeatherDisplay weatherData={weatherData} />
            </div>
          </div>
        )}
      </div>
      
      <Footer />
    </div>
  );
}

export default App;
