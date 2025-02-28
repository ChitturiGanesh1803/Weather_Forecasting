import React, { useState } from 'react';

const CityForm = ({ onSubmit }) => {
  const [city, setCity] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(city);
  };

  return (
    <form className="search-form" onSubmit={handleSubmit}>
      <h4>Search Weather by City</h4>
      <div className="form-group">
        <label htmlFor="city">City Name:</label>
        <input
          type="text"
          className="form-control"
          id="city"
          placeholder="Enter city name..."
          value={city}
          onChange={(e) => setCity(e.target.value)}
          required
        />
      </div>
      <button type="submit" className="btn btn-primary search-button">
        Search Weather
      </button>
    </form>
  );
};

export default CityForm;
