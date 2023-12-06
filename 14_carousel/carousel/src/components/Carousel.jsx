import Indicators from "./Indicators";
import Slide from "./Slide";

import { useState } from "react";

const Carousel = ({ imageUrls }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [manualChange, setManualChange] = useState(false);
  return (
    <div>
      <div className="carousel">
        {imageUrls.map((url, index) => (
          <Slide key={index} url={url} isActive={activeIndex === index} />
        ))}
        <Indicators activeIndex={activeIndex} length={imageUrls.length} />
        <button>Anterior</button>
        <button>Próximo</button>
      </div>
    </div>
  );
};

export default Carousel;
