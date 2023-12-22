import React from "react";

export const Promote = () => {
  return (
    <div className="bg-[#D9E0EC]">
      <div className="max-w-[90%] md:max-w-[90%] mx-auto w-full">
        <div className="grid lg:grid-cols-2 py-12 lg:py-20">
          <div className="text-[#1D1D1D] text-xl text-center mb-4 lg:text-4xl font-bold lg:max-w-[400px] uppercase">
            The amazing NFT art of the world here
          </div>
          <div className="grid sm:grid-cols-2 gap-10">
            <div className="">
              <div className="mb-2 text-[20px] items-center font-semibold flex">
                <img src="/img/card-tick.png" className="w-[20px] mr-[10px]" />
                Fast Transaction
              </div>
              <p className="text-[#696969] pl-[30px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                etiam viverra tellus imperdiet.
              </p>
            </div>
            <div className="">
              <div className="mb-2 text-[20px] items-center font-semibold flex">
                <img src="/img/chart-tick.png" className="w-[20px] mr-[10px]" />
                Growth Transaction
              </div>
              <p className="text-[#696969] pl-[30px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                etiam viverra tellus imperdiet.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
