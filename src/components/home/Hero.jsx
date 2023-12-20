import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import { EffectCards } from "swiper/modules";
import { NFTCard } from "./NFTCard";
export const Hero = () => {
  return (
    <div className="h-[500px] py-10">
      <div className="flex justify-between items-center">
        <div className="w-1/2">
          <h1 className="font-[1000] text-[#1D1D1D] uppercase text-4xl max-w-[450px] mb-4">
            Discover, and collect Digital Art NFTs
          </h1>
          <p className="text-[#565656] text-base max-w-[400px] mb-4">
            Digital marketplace for crypto collectibles and non-fungible tokens
            (NFTs). Buy, Sell, and discover exclusive digital assets.
          </p>
          <button className="bg-theme text-white py-3 px-5 rounded-full mb-3">
            Explore Now
          </button>
          <div className="flex">
            <div className="mr-5">
              <h2 className="text-3xl font-bold text-[#1D1D1D]">98K+</h2>
              <small className="text[#565656]">Artwork</small>
            </div>
            <div className="mr-5">
              <h2 className="text-3xl font-bold text-[#1D1D1D]">12K+</h2>
              <small className="text[#565656]">Auction</small>
            </div>
            <div className="mr-5">
              <h2 className="text-3xl font-bold text-[#1D1D1D]">15K+</h2>
              <small className="text[#565656]">Artist</small>
            </div>
          </div>
        </div>
        <div className="mx-auto">
          <Swiper
            effect={"cards"}
            grabCursor={true}
            loop={true}
            modules={[EffectCards]}
            className="w-[350px]"
          >
            {cardData?.map((data) => (
              <SwiperSlide
                key={data.id}
                style={{ background: `url('${data?.bgUrl}')` }}
                className="w-full h-[400px]"
              >
                <NFTCard data={data} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

const cardData = [
  {
    id: 1,
    name: "Arkhan17",
    currentBid: "0.25",
    remaining: "12h 43m 42s",
    bgUrl: "/img/slider-1.png",
  },
  {
    id: 2,
    name: "Harry780",
    currentBid: "0.15",
    remaining: "14h 37m 05s",
    bgUrl: "/img/slider-2.png",
  },
  {
    id: 3,
    name: "Lucy002",
    currentBid: "0.08",
    remaining: "15h 13m 58s",
    bgUrl: "/img/slider-3.png",
  },
];
