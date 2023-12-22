// import React from 'react'
// import Blog3 from '../../assets/blog3.jpg';

const SimpleBanner = () => {
  return (
    <>
      <div className=" bg-primary">
        <div data-aos="fade-up" className=" container py-8 md:py-12">
          <div className="grid grid-cols-1 items-center md:grid-cols-3 gap-4 md:gap-8">
            <div className=" p-2">
              <iframe
                className="aspect-video w-full"
                src="https://www.youtube.com/embed/m2LDJNfSiZY"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
            <div className=" flex flex-col items-center gap-4 text-center text-white dark:text-white md:col-span-2 md:items-start md:text-left">
              <h1 className=" text-3xl font-bold ">
                Market your next project with coz
              </h1>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Adipisci nam officiis repellendus tempora pariatur aspernatur
                quaerat numquam omnis, fugit sint amet quibusdam et harum ad.
                Enim eum tenetur magni accusamus.
              </p>
              <button className=" btn-primary !bg-white !text-black">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SimpleBanner;
