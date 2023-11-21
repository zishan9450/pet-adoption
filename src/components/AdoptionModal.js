import React from 'react';
import { XIcon } from '@heroicons/react/outline';
import AdoptionForm from './AdoptionForm';

const AdoptionModal = ({ isOpen, onClose, pet }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div className="bg-white p-8 max-w-md w-full rounded-md relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
        >
          <XIcon className="h-6 w-6" />
        </button>
        <AdoptionForm onClose={onClose} pet={pet} />
      </div>
    </div>
  );
};

export default AdoptionModal;
