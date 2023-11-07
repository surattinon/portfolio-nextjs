import Link from 'next/link';
import React from 'react';
import NavLink from './NavLink';

const navLink = [
  {
    title : "About",
    path : "#about",
    target : "",
  },
  {
    title : "Contact",
    path : "#contact",
    target : "",
  },
  {
    title : "Github",
    path : "https://github.com/surattinon",
    target : "_blank",
  },
]

const Navbar = () => {
  return (
    <nav className = 'bg-white fixed top-0 left-0 right-0 z-10 shadow-[0_20px_50px_rgba(0,_0,_0,_0.3)]'>
      <div className = "flex flex-wrap items-center justify-between mx-auto py-4 px-8 ">
        <Link href = {"/"} className = "text-2xl md:text-4xl text-black font-semibold">
          BASU
        </Link> 
        <div className = "menu hidden md:block md:w-auto" id = "navbar">
          <ul className = "flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
            {
              navLink.map((link, index) => (
                <li key = {index}>
                  <NavLink href = {link.path} target = {link.target} title={link.title} />
                </li>
              ))
            }
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar
