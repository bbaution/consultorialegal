import { useState, useEffect } from "react";

const Carousel = ({ images, interval = 2000 }) => {
  const [current, setCurrent] = useState(0);
  const length = images.length;

  // Autoplay con setInterval limpio
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % length);
    }, interval);
    return () => clearInterval(timer);
  }, [length, interval]);

  const nextSlide = () => {
    setCurrent((current + 1) % length);
  };

  const prevSlide = () => {
    setCurrent((current - 1 + length) % length);
  };

  if (!Array.isArray(images) || images.length === 0) return null;

  return (
    <div className="relative w-full md:w-400px  max-w-md mx-auto aspect-video h-[1000px] md:h-auto">
      <div className="overflow-hidden rounded-lg">
        {images.map((img, index) => (
          <div
            key={index}
            className={`transition-opacity duration-700 ${
              index === current ? "opacity-100" : "opacity-0 absolute inset-0"
            }`}
          >
            {index === current && (
              <img src={img} alt={`slide ${index}`} className="w-full h-auto object-cover" />
            )}
          </div>
        ))}
      </div>

      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-gray-700 bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-80"
      >
        &#10094;
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-gray-700 bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-80"
      >
        &#10095;
      </button>

      <div className="flex justify-center mt-2 space-x-2">
        {images.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`w-3 h-3 rounded-full ${
              idx === current ? "bg-gray-800" : "bg-gray-400"
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
