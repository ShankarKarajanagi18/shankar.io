import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { navLinks } from "../constants";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`w-full flex items-center py-4 fixed top-0 z-20 transition-all duration-300 ${
        scrolled ? "bg-primary shadow-lg" : "bg-transparent"
      }`}
    >
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto px-6'>
        {/* Logo/Name */}
        <Link
          to='/'
          className='flex items-center gap-2'
          onClick={() => {
            setActive("home");
            window.scrollTo(0, 0);
          }}
        >
          <p className='text-white text-[18px] font-bold cursor-pointer flex'>
            Shankar Karajanagi &nbsp;
            <span className='sm:block hidden'> | Portfolio</span>
          </p>
        </Link>

        {/* Desktop Navigation */}
        <ul className='list-none hidden lg:flex flex-row gap-8'>
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`${
                active === nav.title ? "text-white" : "text-secondary"
              } hover:text-white text-[16px] font-medium cursor-pointer transition-all duration-300`}
              onClick={() => setActive(nav.title)}
              style={{
                borderBottom: active === nav.title ? `3px solid ${nav.color}` : 'none',
                paddingBottom: '4px'
              }}
            >
              <a href={`#${nav.id}`} className='flex items-center gap-2'>
                <span style={{ color: nav.color }} className="text-xl">
                  {nav.icon}
                </span>
                {nav.title}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Toggle */}
        <div className='lg:hidden flex flex-1 justify-end items-center'>
          <div
            className='w-[28px] h-[28px] cursor-pointer flex flex-col justify-between'
            onClick={() => setToggle(!toggle)}
          >
            <div className={`w-full h-0.5 bg-white transition-all ${toggle ? 'rotate-45 translate-y-2' : ''}`}></div>
            <div className={`w-full h-0.5 bg-white transition-all ${toggle ? 'opacity-0' : ''}`}></div>
            <div className={`w-full h-0.5 bg-white transition-all ${toggle ? '-rotate-45 -translate-y-2' : ''}`}></div>
          </div>

          {/* Mobile Menu Dropdown */}
          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[200px] z-10 rounded-xl`}
          >
            <ul className='list-none flex justify-end items-start flex-1 flex-col gap-4'>
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`font-medium cursor-pointer text-[16px] ${
                    active === nav.title ? "text-white" : "text-secondary"
                  }`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(nav.title);
                  }}
                >
                  <a href={`#${nav.id}`} className='flex items-center gap-3'>
                    <span style={{ color: nav.color }} className="text-2xl">
                      {nav.icon}
                    </span>
                    <span className={active === nav.title ? 'text-white' : ''}>
                      {nav.title}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
