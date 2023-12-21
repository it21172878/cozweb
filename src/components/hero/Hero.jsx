// import React from 'react'
import HeroImg from '../../assets/undraw_real_time_sync_re_nky7.svg';

const Hero = () => {
  return (
    <div className=" h-[650px] md:h-[500px] bg-gradient-to-r from-violet-950 to-violet-900 pt-20">
      <section className=" container flex flex-col items-center justify-between">
        <div className=" grid grid-cols-1 md:grid-cols-2  items-center gap-8 text-white">
          {/* hero text container */}
          <div className=" flex flex-col items-center gap-4 text-center md:items-start md:text-left">
            <h1 className=" text-4xl">
              We Build Apps That Get Trending On Appworld
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Doloribus, rerum doloremque dolorum tempore vitae deserunt fuga
              tempora hic neque possimus id repellat corrupti pariatur dolor
              temporibus atque inventore rem laborum?
            </p>
            <div className=" space-x-4">
              <button className=" btn-primary">Get Started</button>
              <button className=" btn-outline">Login</button>
            </div>
          </div>
          {/* hero image container */}
          <div className=" mx-auto max-w-xs p-4">
            <img src={HeroImg} alt="Not Found" className="" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
