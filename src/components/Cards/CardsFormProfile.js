import React from 'react';

export default function CardsFormProfile({ tittle, icon, name }) {
  return (
    <div>
      <div className='capitalize font-bold py-4'>{tittle}</div>
      <div className='flex gap-2 border border-stone-400 py-4 px-4 rounded-md font-semibold'>
        <div className='mt-1'>{icon}</div>
        <div className='item-center'>{name}</div>
      </div>
    </div>
  );
}
