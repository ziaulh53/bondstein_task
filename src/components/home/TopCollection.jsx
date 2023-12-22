import React from "react";

export const TopCollection = () => {
  return (
    <div className="py-12 lg:py-20 grid md:grid-cols-2 xl:grid-cols-3 gap-10">
      <div>
        <img src="/img/view-card.png" className="w-full h-[300px] md:h-auto object-cover rounded-3xl mb-3" />
        <div className="flex justify-between">
          <div className="flex">
            <img src="/img/person.png" className="mr-2 w-[50px]" />
            <div className="flex flex-col justify-between">
              <h6 className="text-[20px] font-bold">The Futr Abstr</h6>
              <small className="text-[#363639]">10 in stock</small>
            </div>
          </div>
          <div>
            <small className="text-[#363639] mb-3">Highest Bid</small>
            <div className="flex">
              <img
                src="/img/ethe-black.png"
                className="w-[10px] h-[20px] mr-2"
              />
              <p className="text-[16px] text-[#3A3A3A] font-bold">0.25 ETH</p>
            </div>
          </div>
        </div>
      </div>
      <div className=" flex flex-wrap md:flex-col justify-between">
        {new Array(3).fill(null).map((_, idx) => (
          <div className="flex items-center mb-3" key={idx}>
            <img src={`/img/view-card-${idx + 1}.png`} className="mr-5" />
            <div>
              <h6 className="text-[20px] font-bold mb-3">The Futr Abstr</h6>
              <div className="flex items-center flex-wrap mb-3">
                <img src="/img/person.png" className="w-[25px] mr-3" />
                <div className="flex items-center border-2 px-2 py-1 mr-3 border-[#00AC4F] text-[#00AC4F] rounded-md">
                  <img
                    src="/img/ethe-green.png"
                    className="w-[10px] h-[15px] mr-2"
                  />
                  <p className="text-xs">0.25 ETH</p>
                </div>
                <p className="text-[#363639] text-center text-sm">1 of 8</p>
              </div>
              <div>
                <button className="border-theme border-2 py-2 px-3 rounded-3xl text-sm text-theme hover:text-white hover:bg-theme transition-colors duration-300">
                  Place a Bid
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="">
        <h4 className="uppercase font-[1000] text-base text-[20px] mb-2">
          Top Collections Over
        </h4>
        <p className="text-[#3D00B7] text-[18px] font-semibold mb-4">
          Last 7 Days
        </p>
        <div className="xl:flex xl:flex-col xl:h-[80%] justify-between">
          {sevenDays.map((item) => (
            <div className="flex items-center mb-3" key={item?.id}>
              <span className="text-lg font-bold mr-5">{item?.id}</span>
              <div className="mr-3 relative">
                <img src={`/img/head-${item?.id}.png`} className="w-[60px]" />
                {item?.verified && (
                  <img
                    src="/img/verify.png"
                    className="absolute w-[20px] top-0 -right-2"
                  />
                )}
              </div>
              <div className="w-full flex items-center justify-between">
                <div>
                  <p>{item?.name}</p>
                  <div className="flex items-center">
                    <img
                      src="/img/ethe-black.png"
                      className="w-[10px] h-[15px] mr-2"
                    />
                    <small className="text[#363639]">{item?.eth}</small>
                  </div>
                </div>
                <div
                  className={`${
                    item?.increased ? "text-[#14C8B0]" : "text-[#FF002E]"
                  }`}
                >
                  {item?.percentage}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const sevenDays = [
  {
    id: 1,
    name: "CryptoFunks",
    eth: "19,769.39",
    verified: true,
    percentage: "+26.52%",
    increased: true,
  },
  {
    id: 2,
    name: "Cryptix",
    eth: "2,769.39",
    percentage: "+10.52%",
    increased: false,
  },
  {
    id: 3,
    name: "Frenswere",
    eth: "9,232.39",
    percentage: "+2.52%",
    increased: true,
  },
  {
    id: 4,
    name: "PrunkArt",
    eth: "3,769.39",
    verified: true,
    percentage: "+1.52%",
    increased: true,
  },
  {
    id: 5,
    name: "Art Crypto",
    eth: "10,769.39",
    percentage: "+2.52%",
    increased: false,
  },
];
