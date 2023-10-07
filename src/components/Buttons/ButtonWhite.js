import React from 'react';

export default function ButtonWhite({ onClick, title }) {
  return (
    <div>
      <button
        className='btn w-full bg-white border border-red-600 hover:text-white hover:bg-red-800 text-red-600 rounded-md capitalize'
        onClick={onClick}>
        {title}
      </button>
    </div>
  );
}
