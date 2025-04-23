import React from 'react';




const handleSubmit = () => {
  if (pin === '8008') {
    setShowImage(true);
    setError('');
  } 
};

function PinInput({ onSubmit }) {
  const [pin, setPin] = useState('');
  const [showImage, setShowImage] = useState(false);
  
  return (
    <div className="flex flex-col items-center space-y-4">
      <input
        type="password"
        value={pin}
        onChange={onPinChange}
        placeholder=""
        className="border border-gray-300 rounded p-2 w-48 text-center"
      />
      <button
        onClick={onSubmit}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Submit
      </button>
    </div>
  );
}

export default PinInput; 