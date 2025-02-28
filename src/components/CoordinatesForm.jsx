import React, { useState } from 'react';

const CoordinatesForm = ({ onSubmit }) => {
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(latitude, longitude);
  };

  return (
    <form className="search-form" onSubmit={handleSubmit}>
      <h4>Search with your Location</h4>
      <div className="form-group">
        <label htmlFor="lat">Latitude:</label>
        <input 
          type="text" 
          className="form-control" 
          id="lat" 
          placeholder="Enter latitude..." 
          value={latitude}
          onChange={(e) => setLatitude(e.target.value)}
          required
        />
      </div>
      
      <div className="form-group">
        <label htmlFor="lon">Longitude:</label>
        <input 
          type="text" 
          className="form-control" 
          id="lon" 
          placeholder="Enter longitude..." 
          value={longitude}
          onChange={(e) => setLongitude(e.target.value)}
          required
        />
      </div>
      
      <button type="submit" className="btn btn-primary search-button">
        Search Weather
      </button>
    </form>
  );
};

// ✅ Ensure default export is at the bottom, AFTER definition
export default CoordinatesForm;
