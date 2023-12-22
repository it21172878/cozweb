// import React from 'react'

import BannerDetails from './components/bannerDetails/BannerDetails';
import Hero from './components/hero/Hero';
import Navbar from './components/navbar/Navbar';
import OverviewCounter from './components/overview-counter/OverviewCounter';
import Blog2 from './assets/blog2.jpg';
import Blog1 from './assets/blog1.jpg';
import SimpleBanner from './components/simpleBanner/SimpleBanner';

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <OverviewCounter />
      <BannerDetails img={Blog1} />
      <BannerDetails reverse={true} img={Blog2} />
      <SimpleBanner />
    </>
  );
};

export default App;
