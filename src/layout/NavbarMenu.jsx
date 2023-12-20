import React from "react";
import { Link } from "react-router-dom";

export const NavbarMenu = () => {
  return (
    <ul className="flex space-x-4 md:space-x-6 lg:space-x-8 font-ibm text-[#9A9EA6]">
      <li>
        <Link
          to="#"
          className="hover:text-gray-300 transition-colors delay-100 font-[400]"
        >
          Services
        </Link>
      </li>
      <li>
        <Link
          to="#"
          className="hover:text-gray-300 transition-colors delay-100 font-[400]"
        >
          Pricing
        </Link>
      </li>
      <li>
        <Link
          to="#"
          className="hover:text-gray-300 transition-colors delay-100 font-[400]"
        >
          Portfolio
        </Link>
      </li>
      <li>
        <Link
          to="#"
          className="hover:text-gray-300 transition-colors delay-100 font-[400]"
        >
          Contact Us
        </Link>
      </li>
      <li>
        <Link
          to="#"
          className="hover:text-gray-300 transition-colors delay-100 font-[400]"
        >
          About Us
        </Link>
      </li>
    </ul>
  );
};
