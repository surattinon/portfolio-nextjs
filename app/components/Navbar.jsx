import Link from 'next/link';
import React from 'react';

const Navbar = () => {
  return (
    <nav className = 'bg-black'>
      <div className = " flex flex-wrap items-center justify-between mx-auto py-4 px-8 ">
        <Link href = {"/"} className = "text-5xl text-white font-semibold">
          BASU
        </Link> 
        <div className = "menu hidden md:block md:w-auto" id = "navbar">
          <ul>
            <li>
              <Link href = {"about"} className = "block py-2 pl-3 pr-4 text-gray-200 sm:text-xl md:p-0 hover:text-white">About</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar
