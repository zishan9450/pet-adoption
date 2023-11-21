import React, { useState } from 'react';
import AdoptionModal from './AdoptionModal';

const PetCard = ({ pet }) => {
  const [isAdoptionModalOpen, setAdoptionModalOpen] = useState(false);

  const handleAdoptClick = () => {
    setAdoptionModalOpen(true);
  };

  const handleCloseAdoptionModal = () => {
    setAdoptionModalOpen(false);
  };

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg mx-4 my-4 ">
      <img className="w-full h-48 object-cover" src={pet.image} alt={pet.name} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{pet.name}</div>
        <p className="text-gray-700 text-base">{pet.description}</p>
      </div>
      <div className="px-6 py-4 flex justify-between">
        <button
          onClick={handleAdoptClick}
          className="border border-blue-300 text-blue-300 hover:bg-blue-300 hover:text-white font-bold py-2 px-4 rounded"
        >
          Adopt
        </button>
      </div>
      <AdoptionModal isOpen={isAdoptionModalOpen} onClose={handleCloseAdoptionModal} pet={pet} />
    </div>
  );
};

export default PetCard;
