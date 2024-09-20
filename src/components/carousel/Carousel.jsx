import { useState, useEffect } from 'react';
import './carousel.css';

const imageArray = [
  {
    image: 'https://picsum.photos/id/1/2500/2500'
  },
  {
    image: 'https://picsum.photos/id/10/2500/1667'
  },
  {
    image: 'https://picsum.photos/id/1000/2500/2500'
  },
  {
    image: 'https://picsum.photos/id/1003/1181/1772'
  }
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoplay, ] = useState(true);
// setAutoplay
  useEffect(() => {
    let timer;
    if (autoplay) {
      timer = setInterval(() => {
        nextSlide();
      }, 3000);
    }
    return () => clearInterval(timer);
  }, [currentIndex, autoplay]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === imageArray.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? imageArray.length - 1 : prevIndex - 1
    );
  };

//   const toggleAutoplay = () => {
//     setAutoplay(!autoplay);
//   };

  return (
    <div className="carousels">
      <div className="carousels-slides" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {imageArray.map((item, index) => (
          <div className="carousels-slide" key={index}>
            <img src={item.image} alt={item.title} />
            <div className="carousels-caption">
              {/* <h3>{item.title}</h3>
              <p>{item.time}</p> */}
            </div>
          </div>
        ))}
      </div>

      <button className="carousels-control left" onClick={prevSlide}>
        &#10094;
      </button>
      <button className="carousels-control right" onClick={nextSlide}>
        &#10095;
      </button>

      {/* <div className="autoplay-toggle">
        <label>
          <input type="checkbox" checked={autoplay} onChange={toggleAutoplay} />
          Autoplay
        </label>
      </div> */}
    </div>
  );
};

export default Carousel;
