// Footer.js
import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-blue-600 py-8 text-center text-white">
      <p>
        FurryFriends &copy; {currentYear}
      </p>
    </footer>
  );
};

export default Footer;
