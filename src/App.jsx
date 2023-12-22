// import React from 'react'

import BannerDetails from './components/bannerDetails/BannerDetails';
import Hero from './components/hero/Hero';
import Navbar from './components/navbar/Navbar';
import OverviewCounter from './components/overview-counter/OverviewCounter';
import Blog2 from './assets/blog2.jpg';
import Blog1 from './assets/blog1.jpg';
import SimpleBanner from './components/simpleBanner/SimpleBanner';
import Blogs from './components/blogs/Blogs';
import Footer from './components/footer/Footer';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const App = () => {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 500,
      easing: 'ease-in-sine',
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <div className=" dark:bg-slate-900 bg-white">
      <Navbar />
      <Hero />
      <OverviewCounter />
      <BannerDetails reverse={true} img={Blog1} />
      <BannerDetails img={Blog2} />
      <SimpleBanner />
      <Blogs />
      <Footer />
    </div>
  );
};

export default App;
