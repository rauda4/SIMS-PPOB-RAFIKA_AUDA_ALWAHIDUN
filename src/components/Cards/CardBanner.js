import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getBanner } from '../../feature/banner/BannerSlice';

export default function CardBanner() {
  const dispatch = useDispatch();
  const banner = useSelector((state) => state.banner.banner);

  useEffect(() => {
    dispatch(getBanner());
  }, [dispatch]);

  return (
    <section className='2xl:px-52 lg:px-20 md:px-20 sm:px-24 px-5 py-20'>
      <span className='font-semibold'>Temukan Promo Menarik</span>
      <div className='grid justify-center 2xl:grid-cols-5 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 2xl:gap-24 xl:gap-14 lg:gap-32 md:gap-20 gap-10 mt-10'>
        {banner.map((item) => (
          <div className='card w-64 bg-base-100 shadow-xl'>
            <figure>
              <img
                src={item.banner_image}
                style={{ height: 100, width: 250 }}
                alt='Shoes'
              />
            </figure>
          </div>
        ))}
      </div>
    </section>
  );
}
