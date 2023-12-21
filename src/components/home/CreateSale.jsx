import React from "react";

export const CreateSale = () => {
  return (
    <div className="py-12 lg:py-28 grid lg:grid-cols-2 gap-10">
      <div className="grid grid-cols-2 gap-10">
        <div>
          <div className="mb-5 relative">
            <img src="/img/slider-1.png" className="w-full object-cover" />
            <img
              className="absolute -bottom-5 -right-5 w-[50px]"
              src="/img/person.png"
            />
          </div>
          <div className="float-right relative">
            <img src="/img/slider-3.png" className="w-[200px] object-cover" />
            <img
              className="absolute -bottom-5 -right-5 w-[50px]"
              src="/img/person.png"
            />
          </div>
        </div>
        <div className="my-auto">
          <div className="mb-5 relative">
            <img src="/img/slider-2.png" className="" />
            <img
              className="absolute -bottom-5 -right-5 w-[50px]"
              src="/img/person.png"
            />
          </div>
        </div>
      </div>
      <div className="my-auto">
        <div className="text-[#1D1D1D] text-2xl lg:text-4xl font-bold max-w-[400px] uppercase mb-4">
          Create and sell your nfts
        </div>
        <p className="mb-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
          laudantium, fuga molestias, veritatis earum quaerat sunt nam rerum
          cupiditate quisquam assumenda laboriosam et dolorum, atque nemo autem
          totam delectus? Obcaecati dolorum cupiditate molestiae impedit
          doloribus accusantium adipisci libero! Necessitatibus, totam.
        </p>
        <button className="bg-theme text-white py-3 px-5 rounded-full mb-3">
          Sign Up Now
        </button>
      </div>
    </div>
  );
};
