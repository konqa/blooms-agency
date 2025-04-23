import React, { useState, useEffect } from 'react';
import Header from './Components/Header';
import PinInput from './Components/PinInput';
import ButterflyGardenImage from './Components/ButterflyGardenImage';
import './App.css';

function App() {
  const [pin, setPin] = useState('');
  const [showImage, setShowImage] = useState(false);
  const [error, setError] = useState('');
  const [touristName, setTouristName] = useState('');

  useEffect(() => {
    if (showImage) {
      setTouristName('John');
    } else {
      setTouristName('');
    }
  }, [showImage]);

  const handlePinChange = (e) => {
    setPin(e.target.value);
    setError('');
  };

  const handleSubmit = () => {
    if (pin === '8008') {
      setShowImage(true);
      setError('');
    } else {
      setShowImage(false);
      setError('Incorrect PIN');
    }
  };

  return (
    <div className="text-center p-6 bg-white rounded-lg shadow-md">
      <Header touristName={touristName} showImage={showImage} />
      {!showImage && <PinInput pin={pin} handlePinChange={handlePinChange} onSubmit={handleSubmit} />}
      {error && <p className="text-red-500 mt-4">{error}</p>}
      {showImage && <ButterflyGardenImage />}
    </div>
  );
}

export default App;