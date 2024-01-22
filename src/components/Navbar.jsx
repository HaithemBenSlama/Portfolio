import React from "react";
import { Link } from "react-router-dom";
import { navLinks } from "../constants";
import { useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();
  const pathname = location.pathname;
  return (
    <nav className="flex flex-col items-center xl:justify-center gap-y-4 fixed h-max bottom-0 mt-auto xl:left-[2%] z-50 top-0 w-full xl:w-16 xl:max-w-md xl:h-screen ">
      <div className="flex w-full xl:flex-col items-center justify-between xl:justify-center gap-y-10 px-4 md:px-40 xl:px-0 h-[80px] xl:h-max py-8 bg-white/10 backdrop-blur-sm text-3xl xl:text-xl xl:rounded-full">
        {navLinks.map((link, index) => (
          <Link className={link.path === pathname ? 'bg-gray-100 p-3 rounded-full text-black-100' : 'relative flex items-center group hover:bg-slate-400 hover:rounded-full hover:p-3 transition-all duration-300'} to={link.path} key={index}>
            <div className="absolute pl-16 left-0 hidden xl:group-hover:flex">
            <div className="bg-white relative flex text-primary items-center p-[6px] rounded-sm">
            <div className="text-[16px] leading-none font-semibold capitalize ">
              {link.name}
            </div>

            <div className="border-solid border-r-white border-r-8 border-y-transparent border-y-[6px] border-l-0 absolute -left-2"></div>
            </div>
            </div>
            <div>
              <link.icon />
            </div>
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
