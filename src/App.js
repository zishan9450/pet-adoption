import React, { useState } from 'react';
import Navbar from './components/Navbar';
import PetList from './components/PetList';
import SearchBar from './components/SearchBar';
import SortBar from './components/SortBar';
import Footer from './components/Footer';

function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [sortOption, setSortOption] = useState('');

  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />
      <div className="container mx-auto p-8 flex justify-between">
        <SearchBar onSearch={setSearchQuery} />
        <SortBar onSort={setSortOption} />
      </div>
      <main className="container mx-auto p-8">
        <PetList searchQuery={searchQuery} sortOption={sortOption} />
      </main>
      <Footer/>
    </div>
  );
}

export default App;
