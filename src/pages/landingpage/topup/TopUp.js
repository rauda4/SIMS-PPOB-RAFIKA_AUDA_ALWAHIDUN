import React, { useState } from 'react';
import Headers from '../../../components/Headers/Headers';
import Navbar from '../../../components/Navbar/Navbar';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getTopUp } from '../../../feature/transaction/TransactionSlice';

export default function TopUp() {
  const [price, setPrice] = useState();
  const [inputePrice, setInputePrice] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const listPrice = [
    {
      id: '1',
      price: 10000
    },
    {
      id: '2',
      price: 20000
    },
    {
      id: '3',
      price: 50000
    },
    {
      id: '4',
      price: 100000
    },
    {
      id: '5',
      price: 250000
    },
    {
      id: '6',
      price: 500000
    }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      top_up_amount: inputePrice || price
    };
    dispatch(getTopUp(data));
    navigate('/transaction-history');
  };
  return (
    <>
      <Navbar transparent />
      <Headers />

      <div className='2xl:px-56 sm:px-20'>
        {/* tittle */}
        <div className='sm:text-left text-center'>Silahkan masukkan</div>
        <div className='text-3xl capitalize font-bold sm:text-left text-center'>
          Nominal Top Up
        </div>
        <div className='grid sm:grid-cols-2 gap-10 justify-center mt-10'>
          <form onSubmit={handleSubmit}>
            <div className='form-control'>
              <label className='label'></label>
              <input
                type='number'
                placeholder='masukkan nominal Top Up'
                name='inputePrice'
                value={inputePrice}
                onChange={(e) => setInputePrice(e.target.value)}
                className='input input-bordered outline-none [&::-webkit-inner-spin-button]:appearance-none'
              />
            </div>
            <div className='form-control mt-4'>
              <button className='btn bg-stone-400 hover:bg-stone-600 text-white rounded-md'>
                Top Up
              </button>
            </div>
          </form>

          {/* price list */}
          <div className='grid 2xl:grid-cols-3 grid-cols-2'>
            {listPrice.map((item) => (
              <button
                className='card 2xl:w-56 w-44 h-12 rounded-md mt-4 cursor-pointer hover:bg-stone-400 focus:bg-stone-400 bg-white border border-1 border-gray-300'
                onClick={() => setPrice(item.price)}
                key={item.id}>
                <div className='card-body'>
                  <p className='absolute -mt-5'>
                    {(item.price || 0).toLocaleString('id-ID', {
                      style: 'currency',
                      currency: 'IDR'
                    })}
                  </p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
