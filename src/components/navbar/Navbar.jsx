// import React from 'react'
import { BiPhoneCall, BiSolidSun } from 'react-icons/bi';
import { FaCaretDown } from 'react-icons/fa';

const Navbar = () => {
  return (
    <header className=" bg-navbar text-white border-b-[1px] border-primary/50">
      <nav className="container flex items-center justify-between h-[70px] py-2">
        {/* Logo section */}
        <div className=" text-2xl md:text-3xl text-white">
          <a href="#">
            COZ<span className=" inline-block font-bold text-primary">WEB</span>
          </a>
        </div>
        {/* Desktop menu section */}
        <div>
          <ul className=" flex  items-center gap-10">
            <li className=" group relative cursor-pointer">
              <a href="#" className=" flex items-center gap-[2px] h-[72px]">
                Home{' '}
                <span>
                  <FaCaretDown className=" transition-all duration-200 group-hover:rotate-180" />
                </span>
              </a>
              {/* Dropdown section */}
              <div className=" absolute -left-9 z-[99999] hidden w-[150px] bg-white shadow-md p-2 text-black rounded-md group-hover:block">
                <ul className=" space-y-3">
                  <li className=" p-2 hover:bg-violet-200"> Services</li>
                  <li className=" p-2 hover:bg-violet-200">About Us</li>
                  <li className=" p-2 hover:bg-violet-200">Privacy Policy</li>
                </ul>
              </div>
            </li>
            <li className=" group cursor-pointer">
              <a href="#" className=" flex items-center gap-[2px] h-[72px]">
                Services{' '}
                <span>
                  <FaCaretDown className=" transition-all duration-200 group-hover:rotate-180" />
                </span>
              </a>
              {/* Dropdown full width section */}
              <div className=" absolute left-0 z-[99999] hidden w-full rounded-b-3xl bg-white p-2 text-black shadow-md group-hover:block">
                <div className=" grid grid-cols-3 gap-5">
                  <div className=" overflow-hidden">
                    <img
                      src="https://picsum.photos/200"
                      alt="not found"
                      className=" max-h-[300px] w-full rounded-b-3xl object-fill"
                    />
                  </div>
                  <div className=" col-span-2">
                    <h1 className=" text-xl font-semibold pb-3">
                      Best Selling
                    </h1>
                    <p className=" text-sm text-slate-600">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Eius alias voluptates odit cumque quis aliquam nesciunt
                      delectus saepe! Accusamus impedit rem officia provident
                      fuga. Deleniti suscipit quos eveniet beatae accusamus?
                      <div className=" grid grid-cols-3 mt-4">
                        <div>
                          <h1 className=" pb-1 text-xl font-semibold">
                            Development
                          </h1>
                          <ul className=" space-y-2">
                            <li className=" cursor-pointer text-black/80 hover:text-primary">
                              Web Development
                            </li>
                            <li className=" cursor-pointer text-black/80 hover:text-primary">
                              Mobile Development
                            </li>
                            <li className=" cursor-pointer text-black/80 hover:text-primary">
                              Software Development
                            </li>
                          </ul>
                        </div>
                        <div>
                          <h1 className=" pb-1 text-xl font-semibold">
                            Development
                          </h1>
                          <ul className=" space-y-2">
                            <li className=" cursor-pointer text-black/80 hover:text-primary">
                              Web Development
                            </li>
                            <li className=" cursor-pointer text-black/80 hover:text-primary">
                              Mobile Development
                            </li>
                            <li className=" cursor-pointer text-black/80 hover:text-primary">
                              Software Development
                            </li>
                          </ul>
                        </div>
                        <div>
                          <img
                            src="https://picsum.photos/180"
                            alt="not found"
                          />
                        </div>
                      </div>
                    </p>
                  </div>
                </div>
              </div>
            </li>
            <li>Contact Us</li>
            <li>
              <div className=" flex items-center gap-4">
                <div>
                  <BiPhoneCall className=" text-2xl h-[40px] w-[40px] rounded-md p-2 text-white bg-primary hover:bg-primary/90" />
                </div>
                <div>
                  <p>Call us on</p>
                  <p>
                    <a href="tel:+94712413634">+94 71-241-3634</a>
                  </p>
                </div>
              </div>
            </li>
            {/* Light and dark mode switcher */}
            <BiSolidSun className=" text-2xl" />
          </ul>
        </div>
        {/* Mobile menu section */}
      </nav>
    </header>
  );
};

export default Navbar;
