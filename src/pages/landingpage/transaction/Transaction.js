import React from 'react';
import Headers from '../../../components/Headers/Headers';
import Navbar from '../../../components/Navbar/Navbar';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { paymentOrder } from '../../../feature/transaction/TransactionSlice';
import ButtonRed from '../../../components/Buttons/ButtonRed';

export default function Transaction() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const order = localStorage.getItem('order');
  const orders = JSON.parse(order);

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      service_code: orders.serviceCode
    };
    dispatch(paymentOrder(data));
    navigate('/transaction-history');
  };

  return (
    <>
      <Navbar transparent />
      <Headers />
      <div className='2xl:px-56 px-5 sm:px-20'>
        <div className='text-xl'>Pembayaran</div>
        <div className='flex gap-5 mt-5'>
          <img
            src={orders.image}
            alt='order'
          />
          <div className='flex items-center font-bold'>
            {orders.serviceName}
          </div>
        </div>
        <div className='card w-full h-12 rounded-md mt-4 bg-white border border-1 border-gray-300 mb-5'>
          <div className='card-body'>
            <p className='absolute -mt-5'>
              {orders.amount.toLocaleString('id-ID', {
                style: 'currency',
                currency: 'IDR',
                maximumFractionDigits: 0,
                minimumFractionDigits: 0
              })}
            </p>
          </div>
        </div>
        <ButtonRed
          title='Bayar'
          onClick={handleSubmit}
        />
      </div>
    </>
  );
}
