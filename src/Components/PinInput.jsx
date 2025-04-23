import React from 'react';

function PinInput({ pin, onPinChange, onSubmit }) {
  return (
    <div className="flex flex-col items-center space-y-4">
      <input
        type="password"
        value={pin}
        onChange={onPinChange}
        placeholder="Enter PIN"
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