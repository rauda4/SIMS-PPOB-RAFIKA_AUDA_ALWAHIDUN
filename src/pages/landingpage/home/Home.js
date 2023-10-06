import React from 'react';
import CardsService from '../../../components/Cards/CardsService';
import CardBanner from '../../../components/Cards/CardBanner';
import Navbar from '../../../components/Navbar/Navbar';
import Headers from '../../../components/Headers/Headers';

export default function Home() {
  return (
    <>
      <Navbar transparent />
      <Headers />
      <CardsService />
      <CardBanner />
    </>
  );
}
