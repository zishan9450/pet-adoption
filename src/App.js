import React, { useState } from 'react';
import Navbar from './components/Navbar';
import PetList from './components/PetList';
import SearchBar from './components/SearchBar';
import SortBar from './components/SortBar';

function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [sortOption, setSortOption] = useState('');

  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />
      <div className="container mx-auto p-8 flex justify-between">
        <SearchBar onSearch={setSearchQuery} />
        <SortBar onSort={setSortOption} />
        {/* <button onClick={handleAdoptClick} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Adopt
        </button> */}
      </div>
      <main className="container mx-auto p-8">
        <PetList searchQuery={searchQuery} sortOption={sortOption} />
      </main>
      {/* <AdoptionModal isOpen={isAdoptionModalOpen} onClose={handleCloseModal} onSubmit={handleAdoptionSubmit} /> */}
    </div>
  );
}

export default App;
