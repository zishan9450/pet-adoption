// Navbar.js

import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-blue-300 p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Left side - Logo and text "Furry Friends" */}
        <div className="flex items-center">
          {/* Replace the image path with your actual logo */}
          <img src="/logo.png" alt="Furry Friends Logo" className="h-8 w-8 mr-2" />
          <a href="#" onClick={() => window.location.reload()} className="text-white text-lg font-bold cursor-pointer">
            Furry Friends
          </a>
        </div>

        {/* Right side - Pet Adoption Store */}
        <div>
          <span className="text-white text-lg font-bold">Pet Adoption Store</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
