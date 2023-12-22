import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import { EffectCards } from "swiper/modules";
import { NFTCard } from "./NFTCard";
export const Hero = () => {
  return (
    <div className="lg:h-[500px] py-12">
      <div className="lg:flex justify-center lg:justify-between items-center">
        <div className="w-full lg:w-1/2">
          <div className="font-[1000] text-[#1D1D1D] text-center md:!text-left uppercase text-2xl lg:text-4xl mb-4">
            Discover, and collect Digital Art NFTs
          </div>
          <p className="text-[#565656] text-center md:!text-left text-sm lg:text-base  mb-4">
            Digital marketplace for crypto collectibles and non-fungible tokens
            (NFTs). Buy, Sell, and discover exclusive digital assets.
          </p>
          <div className="text-center lg:!text-left">
            <button className="bg-theme border-2 border-theme hover:bg-white hover:!text-theme transition-colors duration-200 text-white py-2 px-3 lg:py-3 lg:px-5 rounded-full mb-3">
              Explore Now
            </button>
          </div>
          <div className="flex justify-center lg:justify-normal">
            <div className="mr-5">
              <h2 className="text-2xl lg:text-3xl font-bold text-[#1D1D1D]">
                98K+
              </h2>
              <small className="text[#565656]">Artwork</small>
            </div>
            <div className="mr-5">
              <h2 className="text-2xl lg:text-3xl font-bold text-[#1D1D1D]">
                12K+
              </h2>
              <small className="text[#565656]">Auction</small>
            </div>
            <div className="mr-5">
              <h2 className="text-2xl lg:text-3xl font-bold text-[#1D1D1D]">
                15K+
              </h2>
              <small className="text[#565656]">Artist</small>
            </div>
          </div>
        </div>
        <div className="mx-auto hidden lg:block">
          <Swiper
            effect={"cards"}
            grabCursor={true}
            loop={true}
            modules={[EffectCards]}
            allowSlideNext={false}
            className="w-[250px] xl:w-[350px]"
          >
            {cardData?.map((data) => (
              <SwiperSlide
                key={data.id}
                style={{ background: `url('${data?.bgUrl}')` }}
                className="w-full h-[200px] lg:h-[400px]"
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
