import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import PropertyList from '../components/PropertyList';
import BestSellerList from '../components/BestSellerList';
const Home = () => {
  return (
    <div className='Home'>
      <header><Header /></header>
      <main>
        <Hero />
        <div className='property'>
          <PropertyList />
        </div>
        <BestSellerList />
      </main>
      <footer><Footer /></footer>
    </div>
  )
}

export default Home;