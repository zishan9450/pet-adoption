import React from 'react';

const LikedCart = ({ likedPets, onUnlikeClick }) => {
  return (
    <div className="fixed bottom-0 right-0 m-4 bg-white rounded-md p-4 shadow-md">
      <h2 className="text-lg font-semibold mb-4">Liked Pets</h2>
      {likedPets.length === 0 ? (
        <p>No pets liked yet.</p>
      ) : (
        <ul>
          {likedPets.map((pet) => (
            <li key={pet.id} className="flex items-center mb-2">
              <span className="mr-2">{pet.name}</span>
              <button
                className="text-red-500 focus:outline-none"
                onClick={() => onUnlikeClick(pet.id)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default LikedCart;
