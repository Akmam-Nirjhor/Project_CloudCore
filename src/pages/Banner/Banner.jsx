import React, { useEffect, useState } from "react";

import img1 from "../Banner/images/image1.jpg";
import img2 from "../Banner/images/img2.avif";
import img3 from "../Banner/images/img3.avif";
import img4 from "../Banner/images/img4.avif";

const images = [img1, img2, img3, img4];

const Banner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="sm:p-2  mb-20  ">
      <div className="w-full lg:h-[500px]  relative overflow-hidden rounded-xl  ">
        {images.map((img, index) => (
          <div
            key={index}
            className={`absolute transition-all duration-1000 ease-in-out w-full h-full ${
              index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          >
            <img
              src={img}
              alt={`slide-${index + 1}`}
              className="w-full h-full object-cover rounded-xl"
            />
          </div>
        ))}

        <div className="absolute left-5 right-5 bottom-5 flex justify-end space-x-3"></div>
      </div>
    </div>
  );
};

export default Banner;
