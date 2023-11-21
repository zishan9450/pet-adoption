import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-blue-300 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <a href="#" onClick={() => window.location.reload()} className="text-white text-2xl font-bold cursor-pointer">
          Pet Adoption Store
        </a>
        {/* ... (other Navbar content) */}
      </div>
    </nav>
  );
};

export default Navbar;
