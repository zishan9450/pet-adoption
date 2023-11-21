import React from 'react';

const SortBar = ({ onSort }) => {
  return (
    <div className="flex items-center bg-white rounded-full p-2 shadow-md mt-4">
      <button
        className="flex items-center focus:outline-none"
        onClick={() => onSort('young')}
      >
        <span className="mr-1">Young</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4 text-gray-600"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 5l-1-1m2 0a7 7 0 110 14 7 7 0 010-14z"
          />
        </svg>
      </button>
      <button
        className="flex items-center ml-4 focus:outline-none"
        onClick={() => onSort('adult')}
      >
        <span className="mr-1">Adult</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4 text-gray-600"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M16 5l-3 3-3-3M8 19h8"
          />
        </svg>
      </button>
    </div>
  );
};

export default SortBar;
