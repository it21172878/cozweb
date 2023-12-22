// import React from 'react'

import BlogCard from './BlogCard';
import img1 from '../../assets/blog1.jpg';
import img2 from '../../assets/blog2.jpg';
import img3 from '../../assets/blog3.jpg';

const Blogs = () => {
  return (
    <>
      <div className=" dark:bg-gray-900 dark:text-white">
        <section className=" container mb-10 py-8 ">
          <h1 className=" mb-8 border-l-8 py-2 pl-2 text-center text-3xl font-bold ">
            Latest blog posts
          </h1>
          <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
            <BlogCard img={img1} />
            <BlogCard img={img2} />
            <BlogCard img={img3} />
          </div>
        </section>
      </div>
    </>
  );
};

export default Blogs;
