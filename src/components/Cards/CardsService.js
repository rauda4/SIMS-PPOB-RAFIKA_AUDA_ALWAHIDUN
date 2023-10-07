import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getService } from '../../feature/service/ServiceSlice';

export default function CardsService() {
  const dispatch = useDispatch();
  const [order, setOrder] = useState('');
  const service = useSelector((state) => state.service.service);
  localStorage.setItem('order', JSON.stringify(order));

  useEffect(() => {
    dispatch(getService());
  }, [dispatch]);

  return (
    <section className='2xl:px-52 lg:px-20 md:px-20 sm:px-24 px-5'>
      <div className='grid 2xl:gap-8 lg:gap-24 md:gap-20 sm:gap-28 gap-4 2xl:grid-cols-7 lg:grid-cols-5 md:grid-cols-3 grid-cols-2 justify-center'>
        {service.map((item) => (
          <div
            className='card w-44 bg-slate-100 cursor-pointer'
            key={item.service_code}
            onClick={() =>
              setOrder({
                serviceName: item.service_name,
                serviceCode: item.service_code,
                image: item.service_icon,
                amount: item.service_tariff
              })
            }>
            <a href={`/transaction/${item.service_code}`}>
              <figure>
                <img
                  src={item.service_icon}
                  alt='Shoes'
                />
              </figure>
              <div className='flex justify-center'>
                <h2 className='card-title text-sm text-center'>
                  {item.service_name}
                </h2>
              </div>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
