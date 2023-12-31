import React from "react";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <div className="max-w-[90%] md:max-w-[90%] mx-auto">
      <div className="grid lg:grid-cols-6 py-12 lg:py-28 gap-5">
        <div className="col-span-2">
          <div className="mb-5">
            <Link to="/"><img src="/img/logo-2.png" className="w-[175px]" /></Link>
          </div>
          <p className="text-[#565656] mb-5">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus odit
            quas id, ex quam earum minus cupiditate. Asperiores saepe sit
            dignissimos possimus? Consectetur, id! Soluta est voluptate facilis
            autem perspiciatis.
          </p>
          <div className="flex items-center">
            <a href="#" className="mr-2">
              <img src="/img/facebook.png" className="w-[30px]" />
            </a>
            <a href="#" className="mr-2">
              <img src="/img/twitter.png" className="w-[30px]" />
            </a>
            <a href="#">
              <img src="/img/linkedin.png" className="w-[30px]" />
            </a>
          </div>
        </div>
        <div className="col-span-1">
          <div className="text-[18px] font-bold mb-5">Market Place</div>
          <div className="text-[#3D3D3D]">
            <ul>
              <li className="mb-3">
                <a href="#">All Nfts</a>
              </li>
              <li className="mb-3">
                <a href="#">New</a>
              </li>
              <li className="mb-3">
                <a href="#">Art</a>
              </li>
              <li className="mb-3">
                <a href="#">Sports</a>
              </li>
              <li className="mb-3">
                <a href="#">Utility</a>
              </li>
              <li className="mb-3">
                <a href="#">Music</a>
              </li>
              <li className="">
                <a href="#">Domain Name</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-span-1">
          <div className="text-[18px] font-bold mb-5">My Account</div>
          <div className="text-[#363639]">
            <ul>
              <li className="mb-3">
                <a href="#">Profile</a>
              </li>
              <li className="mb-3">
                <a href="#">Favourite</a>
              </li>
              <li className="mb-3">
                <a href="#">My Collection</a>
              </li>
              <li className="mb-3">
                <a href="#">Settings</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-span-2">
          <div className="text-[18px] font-bold mb-5">Stay The Loop</div>
          <p className="text-[#363639] mb-5">
            Join our mailing list to stay in the loop with our newest feature
            releases, NFT drops, and tips and tricks for navigating NFTs.
          </p>
          <div className="relative mb-6">
            <span className="absolute inset-y-0 right-0 flex items-center pr-2">
              <button className="bg-[#2639ED] text-white py-2 px-4 rounded-full">
                Subscribe
              </button>
            </span>
            <input
              type="text"
              placeholder="Enter Your Email"
              className="pr-12 pl-4 py-3 w-full rounded-3xl font-jakarta border-2 text-[14px] focus:outline-none text-[#9A9EA6] focus:border-gray-300"
            />
          </div>
        </div>
      </div>
      <div className="text-center text-[#A4A4A4] py-4 text-sm">
        Copyright &#169; {new Date().getFullYear()} Bondstein
      </div>
    </div>
  );
};
