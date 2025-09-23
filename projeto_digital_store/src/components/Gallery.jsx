import { useState } from "react";
import PropTypes from "prop-types";
import ArrowLeft from "../assets/arrow-left.svg";
import ArrowRight from "../assets/arrow-right.svg";

export default function Gallery({
  className = "",
  width = "100%",
  height = "500px",
  radius = "0px",
  showThumbs,
  images = [],
}) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goPrev = () => {
    if (currentIndex > 0) setCurrentIndex(currentIndex - 1);
  };

  const goNext = () => {
    if (currentIndex < images.length - 1) setCurrentIndex(currentIndex + 1);
  };

  return (
    <div
      className={`relative overflow-hidden ${className}`}
      style={{ width, height }}
    >
      {/* Slide principal */}
      <div
        className="w-full h-full flex transition-transform duration-500"
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
        }}
      >
        {images.map((img, idx) => (
          <img
            key={idx}
            src={img.src}
            alt={`gallery-${idx}`}
            className="object-cover flex-shrink-0"
            style={{
              width,
              height,
              rotate: radius,
              padding: '20px'
            }}
          />
        ))}
      </div>

      {/* Botão esquerda */}
      <button
        onClick={goPrev}
        disabled={currentIndex === 0}
        className={`absolute left-2 top-1/2 -translate-y-1/2 p-2 bg-white/60 rounded-full disabled:opacity-40`}
      >
        <img src={ArrowLeft} alt="left" />
      </button>

      {/* Botão direita */}
      <button
        onClick={goNext}
        disabled={currentIndex === images.length - 1}
        className={`absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-white/60 rounded-full disabled:opacity-40`}
      >
        <img src={ArrowRight} alt="right" />
      </button>

      {/* Thumbnails opcionais */}
      {showThumbs && (
        <div className="flex gap-2 justify-center mt-4 absolute bottom-2 left-1/2 -translate-x-1/2 bg-white/70 p-2 rounded-xl">
          {images.map((img, idx) => (
            <img
              key={idx}
              src={img.src}
              alt={`thumb-${idx}`}
              onClick={() => setCurrentIndex(idx)}
              className="cursor-pointer object-cover"
              style={{
                width: "117px",
                height: "95px",
                borderRadius: radius,
                border:
                  currentIndex === idx ? "2px solid var(--color-primary)" : "2px solid transparent",
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
}

Gallery.propTypes = {
  className: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  radius: PropTypes.string,
  showThumbs: PropTypes.bool,
  images: PropTypes.arrayOf(
    PropTypes.shape({
      src: PropTypes.string.isRequired,
    })
  ).isRequired,
};
