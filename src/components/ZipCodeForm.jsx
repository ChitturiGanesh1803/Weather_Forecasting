import React, { useState } from 'react';

const ZipCodeForm = ({ onSubmit }) => {
  const [zipCode, setZipCode] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(zipCode);
  };

  return (
    <form className="search-form" onSubmit={handleSubmit}>
      <h4>Search with your Zipcode</h4>
      <div className="form-group">
        <label htmlFor="zipCode">Zipcode:</label>
        <input 
          type="text" 
          className="form-control" 
          id="zipCode" 
          placeholder="Enter Zipcode..." 
          value={zipCode}
          onChange={(e) => setZipCode(e.target.value)}
          required
        />
      </div>
      
      <button type="submit" className="btn btn-primary search-button">
        Search Weather
      </button>
    </form>
  );
};

export default ZipCodeForm;