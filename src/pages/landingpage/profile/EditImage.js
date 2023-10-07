import React from 'react';
import { BiPencil } from 'react-icons/bi';

export default function EditImage({ onChange }) {
  return (
    <>
      <div className='absolute -mt-5 ml-16 border border-red-200 rounded-full'>
        <input
          type='file'
          onChange={onChange}
          accept='.png, .jpeg'
          id='files'
          className='hidden'
        />
        <label htmlFor='files'>
          <BiPencil className='w-6 h-6 p-1' />
        </label>
      </div>
    </>
  );
}
