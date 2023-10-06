import React, { useEffect, useState } from 'react';
import Headers from '../../../components/Headers/Headers';
import Navbar from '../../../components/Navbar/Navbar';
import { useDispatch, useSelector } from 'react-redux';
import { getHistoryOrder } from '../../../feature/transaction/TransactionSlice';

export default function Transaction() {
  const dispatch = useDispatch();
  const [limit, setLimit] = useState(5);
  const historyOrder = useSelector((state) => state.transaction.historyOrder);
  useEffect(() => {
    dispatch(getHistoryOrder(limit));
  }, [dispatch, limit]);

  return (
    <>
      <Navbar transparent />
      <Headers />
      <div className='2xl:px-56 sm:px-20'>
        <div className='sm:text-left text-center font-bold text-xl'>
          Semua transaksi
        </div>
        {historyOrder.map((item) => (
          <div
            className='flex justify-between border py-4 rounded-md mt-5'
            key={item.invoice_number}>
            <div className='ml-5'>
              {item.transaction_type === 'TOPUP' ? (
                <div className='font-bold text-emerald-400'>
                  +
                  {item.total_amount.toLocaleString('id-ID', {
                    style: 'currency',
                    currency: 'IDR',
                    maximumFractionDigits: 0,
                    minimumFractionDigits: 0
                  })}
                </div>
              ) : (
                <div className='font-bold text-red-600'>
                  -
                  {item.total_amount.toLocaleString('id-ID', {
                    style: 'currency',
                    currency: 'IDR',
                    maximumFractionDigits: 0,
                    minimumFractionDigits: 0
                  })}
                </div>
              )}
              <div className='text-sm mt-2'>{item.created_on}</div>
            </div>
            <div className='mr-5 capitalize'>{item.description}</div>
          </div>
        ))}
        <div
          className='text-center py-10 cursor-pointer text-red-600 font-semibold'
          onClick={() => setLimit(limit + 5)}>
          Show More
        </div>
      </div>
    </>
  );
}
