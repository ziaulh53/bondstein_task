import React, { useState } from "react";
import logo from "../assets/logo.png";
import searchIcon from "../assets/search-normal.svg";
import menuIcon from "../assets/menu.svg";
import closeIcon from "../assets/close.svg";
import { Link } from "react-router-dom";
import { Drawer } from "antd";
import { menu } from "./menu";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="bg-white w-full border-b">
      <div className="max-w-[90%] md:max-w-[90%] mx-auto text-white">
        <div className="flex items-center justify-between py-3 md:py-4 lg:py-5 min-h-[60px]">
          <div className="">
            <Link to="/">
              <img src="/img/logo-2.png" className="w-[165px] h-[35px]" />
              {/* <span className="font-[900] text-lg text-theme">NFTERS</span> */}
            </Link>
          </div>
          <ul className="hidden lg:flex space-x-4 md:space-x-6 lg:space-x-8 font-ibm text-[#000000] text-[16px]">
            {menu.map(({ label, path }, idx) => (
              <li key={idx}>
                <Link
                  to={path}
                  className="hover:text-gray-600 text-[16px] transition-colors delay-100 font-medium"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="hidden lg:flex items-center space-x-4">
            <div className="relative min-w-[300px]">
              <span className="absolute inset-y-0 right-0 flex items-center pr-4">
                <img src={searchIcon} className="w-[20px]" alt="search icon" />
              </span>
              <input
                type="text"
                placeholder="Search"
                className="pr-12 pl-4 py-2 w-full border-2 rounded-3xl text-[14px] focus:outline-none text-[#9A9EA6] focus:border-gray-300"
              />
            </div>

            <Link
              to="#"
              className="bg-theme hover:bg-white rounded-3xl font-[700] border-2 border-theme text-white hover:!text-theme text-[14px] px-4 py-2 hover:bg-opacity-90 transition-colors delay-100"
            >
              Upload
            </Link>
            <Link
              to="#"
              className="bg-white hover:!bg-theme hover:!text-white rounded-3xl font-[700] text-theme border-2 border-theme text-[14px] px-3 py-2 transition-colors delay-100"
            >
              Connect Wallet
            </Link>
          </div>
          <div className="lg:hidden">
            {isMenuOpen ? (
              <img
                src="/img/close.png"
                onClick={toggleMenu}
                className="w-[20px]"
                alt="menu icon"
              />
            ) : (
              <img
                src="/img/menu.png"
                onClick={toggleMenu}
                className="w-[30px]"
                alt="menu icon"
              />
            )}
            <Drawer
              rootClassName="top-[64px] outline-none"
              closeIcon={false}
              style={{ background: "#ffffff" }}
              open={isMenuOpen}
              onClose={() => setIsMenuOpen(false)}
              placement="right"
              width={280}
            >
              <div>
                <div className="relative mb-6">
                  <span className="absolute inset-y-0 left-0 flex items-center pl-4">
                    <img
                      src={searchIcon}
                      className="w-[20px]"
                      alt="search icon"
                    />
                  </span>
                  <input
                    type="text"
                    placeholder="Search"
                    className="pl-12 pr-4 py-2 w-full border rounded-3xl font-jakarta bg-[#F0F1F2] text-[14px] focus:outline-none text-[#9A9EA6] focus:border-gray-300"
                  />
                </div>

                <ul className="font-ibm text-[#9A9EA6]">
                  {menu.map(({ label, path }, idx) => (
                    <li key={idx} className="mb-5">
                      <Link
                        to={path}
                        className="hover:text-gray-300 transition-colors delay-100 font-[400]"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <Link to="#" className="!block w-full text-center mb-4">
                <div className="bg-theme w-full hover:bg-white rounded-3xl font-[700] border-2 border-theme text-white hover:!text-theme text-[14px] px-4 py-2 hover:bg-opacity-90 transition-colors delay-100">
                  Upload
                </div>
              </Link>
              <Link to="#" className="!block text-center">
                <div className="bg-white w-full hover:!bg-theme hover:!text-white rounded-3xl font-[700] text-theme border-2 border-theme text-[14px] px-3 py-2 transition-colors delay-100">
                  Connect Wallet
                </div>
              </Link>
            </Drawer>
          </div>
        </div>
      </div>
    </div>
  );
};
