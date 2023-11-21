import React from 'react';

const SearchBar = ({ onSearch }) => {
  return (
    <div className="flex items-center bg-white rounded-full p-2 shadow-md">
      <input
        type="text"
        placeholder="Search pets..."
        className="w-full rounded-full py-2 px-4 focus:outline-none"
        onChange={(e) => onSearch(e.target.value)}
      />
      <span className="ml-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-gray-600"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M21 21l-5-5m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </span>
    </div>
  );
};

export default SearchBar;
