import React from "react";

export const Collections = () => {
  return (
    <div className="bg-gradient-to-b from-[#D9E0EC] to-gray-100">
      <div className="max-w-[90%] md:max-w-[90%] mx-auto w-full py-12 lg:py-20">
        <div className="text-[#1D1D1D] text-2xl lg:text-4xl font-bold uppercase mb-5">
          Collections Featured NFTS
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 items-baseline gap-10">
          {card?.map((item) => (
            <div key={item.id}>
              <div className="sm:flex mb-3">
                <div className="mr-0 sm:mr-3">
                  <img src={item?.view} className="w-full h-[300px] object-cover rounded-3xl sm:h-full mb-3 lg:mb-0" />
                </div>
                <div className="flex sm:flex-col sm:mt-0 gap-2 justify-between">
                  <div>
                    <img
                      src={item?.view1}
                      className="h-[100px] w-[150px]"
                    />
                  </div>
                  <div>
                    <img
                     src={item?.view2}
                      className="h-[100px] w-[150px]"
                    />
                  </div>
                  <div>
                    <img
                      src={item?.view3}
                      className="h-[100px] w-[150px]"
                    />
                  </div>
                </div>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Amazing Collection</h4>
                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <img src="/img/person.png" className="mr-3" />
                    <p> by Arkhan</p>
                  </div>
                  <div>
                    <button className="text-[#2639ED] border-2 border-[#2639ED] hover:bg-[#2639ED] hover:text-white transition-colors duration-200 py-1 px-3 rounded-full text-sm">
                      Total 54 items
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const card = [
  {
    id: '1',
    view: "/img/slider-3.png",
    view1: "/img/view-card-4.png",
    view2: "/img/view-card-5.png",
    view3: "/img/view-card-2.png",
  },
  {
    id: '2',
    view: "/img/slider-1.png",
    view1: "/img/view-card-5.png",
    view2: "/img/view-card-2.png",
    view3: "/img/view-card-4.png",
  },
  {
    id: '3',
    view: "/img/slider-2.png",
    view1: "/img/view-card-2.png",
    view2: "/img/view-card-4.png",
    view3: "/img/view-card-5.png",
  },
];
