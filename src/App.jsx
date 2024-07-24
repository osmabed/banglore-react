import './App.css';

import React, { useState } from 'react'; // Import useState
function App() {
  const [fname, setFname] = useState('');
  const [area, setArea] = useState('');
  const [location, setLocation] = useState('');
  const [bathroom, setBathroom] = useState('');


  const handleFnameChange = (e) => {
    setFname(e.target.value);
  };

  const handleAreaChange = (e) => {
    setArea(e.target.value);
  };

  const handleLocationChange = (e) => {
    setLocation(e.target.value);
  };

  const handleBathroomChange = (e) => {
    setBathroom(e.target.value);
  };

  return (
    <>
      <h2>Predict your house price</h2>
      <div className="input-group">
        <form action="/action_page.php">
          <div>
            <label htmlFor="fname">Enter No Of Bhk</label>
            <input
              type="text"
              id="fname"
              name="fname"
              value={fname}
              onChange={handleFnameChange}
              placeholder="Enter a number"
            />
          </div>

          <div>
            <label htmlFor="area">Enter Area</label>
            <input
              type="number"
              id="area"
              name="area"
              value={area}
              onChange={handleAreaChange}
              placeholder="Enter the area"
            />
          </div>

          <div>
            <label htmlFor="location">Enter Location</label>
            <input
              type="string"
              id="location"
              name="location"
              value={location}
              onChange={handleLocationChange}
              placeholder="Enter the location"
            />
          </div>

          <div>
            <label htmlFor="bathroom">Enter no of bathrooms</label>
            <input
              type="number"
              id="bathroom"
              name="bathroom"
              value={bathroom}
              onChange={handleBathroomChange}
              placeholder="Enter the no of bathrooms"
            />
          </div>


          <div>
            <input type="submit" value="Submit" />
          </div>
        </form>
      </div>
    </>
  );
}

export default App;