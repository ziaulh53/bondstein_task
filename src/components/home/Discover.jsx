import React from "react";

export const Discover = () => {
  return (
    <div className="bg-gradient-to-b from-[#D9E0EC] to-gray-100">
      <div className="max-w-[90%] md:max-w-[90%] mx-auto w-full py-12 lg:py-20">
        <div className="text-[#1D1D1D] text-2xl lg:text-4xl font-bold uppercase mb-5">
          Discover more nfts
        </div>
        <div className="flex flex-wrap items-center justify-between mb-5 gap-y-10">
          <div className="flex flex-wrap">
            <button className="mr-3 text-sm rounded-full bg-theme text-white border-theme px-3 py-2">
              All Cateogries
            </button>
            <button className="mr-3 text-sm rounded-full bg-[#DCDCDC] hover:bg-theme hover:text-white px-3 py-1 transition-colors duration-200">
              Art
            </button>
            <button className="mr-3 text-sm rounded-full bg-[#DCDCDC] hover:bg-theme hover:text-white px-3 py-1 transition-colors duration-200">
              Celebrities
            </button>
            <button className="mr-3 text-sm rounded-full bg-[#DCDCDC] hover:bg-theme hover:text-white px-3 py-1 transition-colors duration-200">
              Gaming
            </button>
            <button className="mr-3 text-sm rounded-full bg-[#DCDCDC] hover:bg-theme hover:text-white px-3 py-1 transition-colors duration-200">
              Sport
            </button>
            <button className="mr-3 text-sm rounded-full bg-[#DCDCDC] hover:bg-theme hover:text-white px-3 py-1 transition-colors duration-200">
              Music
            </button>
            <button className="text-sm rounded-full bg-[#DCDCDC] hover:bg-theme hover:text-white px-3 py-1 transition-colors duration-200">
              Crypto
            </button>
          </div>
          <div className="flex items-center rounded-full bg-[#DCDCDC] px-3 py-1 transition-colors duration-200">
            <img src="/img/filter.png" className="w-[20px] h-[15px] mr-2" />
            All Filters
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-5">
          {new Array(16).fill(null).map((_, idx) => (
            <div className="bg-white p-3 rounded-3xl" key={idx}>
              <div className="relative mb-5">
                <img src="/img/slider-1.png" />
                <div className="absolute flex -bottom-4 left-5">
                  <img src="/img/person.png" />
                  <img src="/img/person-1.png" className="-ml-3" />
                  <img src="/img/person-1.png" className="-ml-3" />
                  <img src="/img/person-1.png" className="-ml-3" />
                </div>
              </div>
              <h4 className="text-[18px] font-bold mb-4">ArtCrypto</h4>
              <div className="flex justify-between items-center mb-4">
                <div className="flex items-center">
                  <img src="/img/ethe-green.png" className="h-[20px] mr-3" />
                  <p className="text-[#00AC4F] font-bold">0.25 ETH</p>
                </div>
                <div className="text-[#838383]">1 of 321</div>
              </div>
              <div className="flex justify-between items-center">
                <div>3h 50m 2s left</div>
                <button>Place a Bid</button>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center">
          <button className="border-theme border-2 py-2 px-3 rounded-3xl text-sm text-theme hover:text-white hover:bg-theme transition-colors duration-300">
            More NFTs
          </button>
        </div>
      </div>
    </div>
  );
};
