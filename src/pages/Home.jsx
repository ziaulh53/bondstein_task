import React from "react";
import { Collections, CreateSale, Discover, Hero, Promote, TopCollection } from "../components/home";

export const Home = () => {
  return (
    <div>
      <div className="max-w-[90%] md:max-w-[90%] mx-auto">
        <Hero />
      </div>
      <Promote />
      <div className="max-w-[90%] md:max-w-[90%] mx-auto">
        <TopCollection/>
      </div>
      <Collections/>
      <div className="max-w-[90%] md:max-w-[90%] mx-auto">
        <CreateSale/>
      </div>
      <Discover/>
    </div>
  );
};

