import React from "react";
import Indicators from "./Indicators";
import Slide from "./Slide";

const Carousel = () => {
  return (
    <div>
      <div className="carousel">
        <Slide />
        <Indicators />
      </div>
    </div>
  );
};

export default Carousel;
