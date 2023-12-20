import React from "react";
import { Footer } from "./Footer";

export const PrivateLayout = ({ children }) => {
  return (
    <div>
      <div>{children}</div>
      <Footer />
    </div>
  );
};
