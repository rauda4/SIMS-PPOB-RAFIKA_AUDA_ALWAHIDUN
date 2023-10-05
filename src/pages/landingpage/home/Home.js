import React from 'react';
import CardsService from '../../../components/Cards/CardsService';
import CardBanner from '../../../components/Cards/CardBanner';
import Navbar from '../../../components/Navbar/Navbar';

export default function Home() {
  return (
    <>
      <Navbar transparent />
      <CardsService />
      <CardBanner />
    </>
  );
}
