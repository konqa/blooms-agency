import React, { useState } from 'react';
import Header from './Components/Header';
import PinInput from './Components/PinInput';
import './App.css';

function App() {

  const [error, setError] = useState('');
  const [touristName, setTouristName] = useState('');

  return (
    <div className="text-center p-6 bg-white rounded-lg shadow-md">
      <Header touristName={touristName} showImage={showImage} />
      <PinInput pin={pin} onPinChange={handlePinChange} onSubmit={handleSubmit} />
    <p className="text-red-500 mt-4">{error}</p>
      {showImage && <ButterflyGardenImage />}
    </div>
  );
}

export default App;