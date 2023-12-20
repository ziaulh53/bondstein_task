import React from "react";

export const Promote = () => {
  return (
    <div className="bg-[#D9E0EC]">
      <div className="max-w-[97%] md:max-w-[90%] mx-auto w-full">
        <div className="grid lg:grid-cols-2 py-28">
          <div className="text-[#1D1D1D] text-4xl font-bold max-w-[400px] uppercase">
            The amazing NFT art of the world here
          </div>
          <div className="grid lg:grid-cols-2 gap-10">
            <div className="flex">
              <div className="mr-2">
                <img src="/img/card-tick.png" className="w-[50px] mt-[3px]" />
              </div>
              <div>
                <div className="mb-2 text-[20px] font-semibold">
                  Fast Transaction
                </div>
                <p className="text-[#696969]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aliquam etiam viverra tellus imperdiet.
                </p>
              </div>
            </div>
            <div className="flex">
              <div className="mr-2">
                <img src="/img/chart-tick.png" className="w-[50px] mt-[3px]" />
              </div>
              <div>
                <div className="mb-2 text-[20px] font-semibold">
                  Growth Transaction
                </div>
                <p className="text-[#696969]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aliquam etiam viverra tellus imperdiet.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
