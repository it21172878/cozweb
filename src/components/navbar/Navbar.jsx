// import React from 'react'
import { BiPhoneCall, BiSolidSun } from 'react-icons/bi';

const Navbar = () => {
  return (
    <header className=" bg-navbar text-white">
      <nav className="container flex items-center justify-between h-[70px] py-2">
        {/* Logo section */}
        <div className=" text-2xl md:text-3xl text-white">
          <a href="#">
            COZ<span className=" inline-block font-bold text-primary">WEB</span>
          </a>
        </div>
        {/* Desktop menu section */}
        <div>
          <ul className=" flex gap-4 items-center">
            <li>Home</li>
            <li>Services</li>
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
