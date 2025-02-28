import React from 'react';

const WeatherDisplay = ({ weatherData }) => {
  if (!weatherData) return null;

  return (
    <div className="weather-details">
      <h2 className="text-center">Weather Details</h2>
      <table className="table">
        <thead>
          <tr>
            <th>Property</th>
            <th>Value</th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(weatherData).map(([key, value]) => (
            <tr key={key}>
              <td>{key}</td>
              <td>{typeof value === 'object' ? JSON.stringify(value) : value.toString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default WeatherDisplay;