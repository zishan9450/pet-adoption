import React from 'react';
import { useForm } from 'react-hook-form';
// import { Button } from '@heroicons/react/solid';

const AdoptionForm = ({ onClose, onSubmit }) => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const password = watch('password', '');

  const submitForm = (data) => {
    onSubmit(data);
    onClose();
  };

  return (
    <form onSubmit={handleSubmit(submitForm)} className="w-full max-w-md">
      <div className="flex flex-col gap-y-4">
        <div className="flex flex-row gap-x-4">
          <input
            type="text"
            placeholder="First Name"
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
            {...register('firstName', { required: true })}
          />
          <input
            type="text"
            placeholder="Last Name"
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
            {...register('lastName', { required: true })}
          />
        </div>
        <div className="flex flex-row gap-x-4">
          <input
            type="email"
            placeholder="Email Address"
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
            {...register('email', { required: true, pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i })}
          />
          <input
            type="text"
            placeholder="Phone Number"
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
            {...register('phoneNumber')}
          />
        </div>
        <div className="flex flex-row gap-x-4">
          <input
            type="text"
            placeholder="Address"
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
            {...register('address')}
          />
          <input
            type="text"
            placeholder="City"
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
            {...register('city')}
          />
        </div>
        <div className="flex flex-row gap-x-4">
          <input
            type="text"
            placeholder="State"
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
            {...register('state')}
          />
          <input
            type="number"
            placeholder="Zip Code"
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
            {...register('zipCode')}
          />
        </div>
        <div className="flex flex-row gap-x-4">
          <input
            type="password"
            placeholder="Password"
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
            {...register('password', { required: true, minLength: 6 })}
          />
          <input
            type="password"
            placeholder="Confirm Password"
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
            {...register('confirmPassword', { required: true, validate: (value) => value === password })}
          />
        </div>
        <button type="submit" className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Submit
        </button>
      </div>
    </form>
  );
};

export default AdoptionForm;
