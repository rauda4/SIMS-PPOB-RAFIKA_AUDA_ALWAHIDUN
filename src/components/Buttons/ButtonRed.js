import React from 'react';

export default function ButtonRed({ onClick, title }) {
  return (
    <div>
      <button
        className='btn w-full bg-red-600 hover:bg-red-800 text-white rounded-md capitalize'
        onClick={onClick}>
        {title}
      </button>
    </div>
  );
}
