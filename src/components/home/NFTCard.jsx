import React from "react";
export const NFTCard = ({ data }) => {
  return (
    <div className="p-3 xl:p-10 flex flex-col justify-between w-full h-full text-white">
      <div>
        <h2 className="text-white xl:text-2xl font-bold mb-2">
          Abstr Gradient NFT
        </h2>
        <div className="flex items-center">
          <img src="/img/person.png" className="mr-4" />
          <h6>{data?.name}</h6>
        </div>
      </div>
      <div className="flex justify-between backdrop-blur-xl bg-white/20 p-3 rounded-2xl">
        <div>
          <p className="text-xs mb-2">Current Bid</p>
          <div className="flex items-center">
            <img src="/img/ethe.png" className="w-[10px] h-[20px] mr-2" />
            <p className="font-bold text-xs ">{data?.currentBid} ETH</p>
          </div>
        </div>
        <div>
          <p className="text-xs mb-2">Ends In</p>
          <p className="font-bold text-xs">{data?.remaining}</p>
        </div>
      </div>
    </div>
  );
};
