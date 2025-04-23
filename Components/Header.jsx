import React from 'react';

function Header({ touristName, showImage }) {
  return (
    <header className="text-center mb-6">
      <h1 className="text-2xl font-bold text-blue-600">
head      </h1>
      {!showImage && <h2 className="text-xl text-gray-700">Open Flight Centre Vault</h2>}
    </header>
  );
}

export default Header; 