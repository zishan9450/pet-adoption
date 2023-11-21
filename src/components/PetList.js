import React from 'react';
import PetCard from './PetCard';

const petsData = [
  {
    id: 1,
    name: 'Dog',
    description: 'A loyal and friendly pet.',
    image: 'https://i.pinimg.com/564x/44/48/e7/4448e7efc90286a8dff112211dea9750.jpg', // Provide the actual path to the dog image
    age: 2, // Age of the pet
    isLiked: false,
  },
  {
    id: 2,
    name: 'Cat',
    description: 'A loyal and friendly pet.',
    image: 'https://i.pinimg.com/564x/62/a7/db/62a7db679779ae5dac8bca58a49a1103.jpg', // Provide the actual path to the cat image
    age: 3, // Age of the pet
    isLiked: false,
  },
  {
    id: 3,
    name: 'Rabbit',
    description: 'A loyal and friendly pet.',
    image: 'https://i.pinimg.com/564x/21/ab/5c/21ab5cf1257e55f36be7ce3b2c57e102.jpg', // Provide the actual path to the cat image
    age: 6, // Age of the pet
    isLiked: false,
  },
  {
    id: 4,
    name: 'Dog',
    description: 'A loyal and friendly pet.',
    image: 'https://i.pinimg.com/564x/24/bc/1b/24bc1b4f7fe377849b845c3182f47b4c.jpg', // Provide the actual path to the cat image
    age: 8, // Age of the pet
    isLiked: false,
  },
  {
    id: 5,
    name: 'Cat',
    description: 'A loyal and friendly pet.',
    image: 'https://i.pinimg.com/564x/87/e2/f0/87e2f0e3ab3a2f719da1ee3db638d71e.jpg', // Provide the actual path to the cat image
    age: 9, // Age of the pet
    isLiked: false,
  },
  {
    id: 6,
    name: 'Dog',
    description: 'A loyal and friendly pet.',
    image: 'https://i.pinimg.com/564x/f8/c3/d6/f8c3d601c98516d70f4514fec0a765c4.jpg', // Provide the actual path to the cat image
    age: 5, // Age of the pet
    isLiked: false,
  },
  {
    id: 7,
    name: 'Dog',
    description: 'A loyal and friendly pet.',
    image: 'https://i.pinimg.com/564x/78/0d/ee/780dee648db29c0cff66f23e7f67b68a.jpg', // Provide the actual path to the cat image
    age: 10, // Age of the pet
    isLiked: false,
  },
  {
    id: 8,
    name: 'Cat',
    description: 'A loyal and friendly pet.',
    image: 'https://i.pinimg.com/564x/14/f1/93/14f19348ec6fb9af42ec317620ec7384.jpg', // Provide the actual path to the cat image
    age: 4, // Age of the pet
    isLiked: false,
  },
  {
    id: 9,
    name: 'Rabbit',
    description: 'A loyal and friendly pet.',
    image: 'https://i.pinimg.com/564x/8b/74/bf/8b74bfb7205ce5a667d738249c78fb5c.jpg', // Provide the actual path to the cat image
    age: 4, // Age of the pet
    isLiked: false,
  },
  {
    id: 10,
    name: 'Cat',
    description: 'A loyal and friendly pet.',
    image: 'https://i.pinimg.com/564x/06/9f/b4/069fb4480463c5e90e01635ef3637ede.jpg', // Provide the actual path to the cat image
    age: 10, // Age of the pet
    isLiked: false,
  },
  {
    id: 11,
    name: 'Rabbit',
    description: 'A loyal and friendly pet.',
    image: 'https://i.pinimg.com/736x/30/40/19/304019cee3ab9f139b8c4a91ef4ddc55.jpg', // Provide the actual path to the cat image
    age: 7, // Age of the pet
    isLiked: false,
  },
  {
    id: 12,
    name: 'Dog',
    description: 'A loyal and friendly pet.',
    image: 'https://i.pinimg.com/564x/d4/51/49/d45149b753143e3d187c7e8a6cec901e.jpg', // Provide the actual path to the cat image
    age: 5, // Age of the pet
    isLiked: false,
  },
  
  // Add more pet objects as needed
];

const PetList = ({ searchQuery, sortOption }) => {
  const filteredPets = petsData
    .filter((pet) => pet.name.toLowerCase().includes(searchQuery.toLowerCase()))
    .filter((pet) => {
      if (sortOption === 'young') {
        return pet.age >= 1 && pet.age <= 6;
      } else if (sortOption === 'adult') {
        return pet.age >= 7;
      }
      return true; // Display all pets if no specific sort option is selected
    });

  const petCards = filteredPets.map((pet) => (
    <PetCard key={pet.id} pet={pet} />
  ));

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
      {petCards}
    </div>
  );
};


export default PetList;
