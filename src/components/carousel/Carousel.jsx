import { useState, useEffect } from 'react';
import './carousel.css';

const imageArray = [
  {
    image: 'https://picsum.photos/id/1/2500/2500',
    title: '學長歸來, MUST國際音樂創作營開箱文',
    time: '2019-10-26'
  },
  {
    image: 'https://picsum.photos/id/10/2500/1667',
    title: '學姊歸來,爽爽開學去',
    time: '2019-10-26'
  },
  {
    image: 'https://picsum.photos/id/1000/2500/2500',
    title: '學弟歸來,開心吃東西去',
    time: '2019-10-26'
  },
  {
    image: 'https://picsum.photos/id/1003/1181/1772',
    title: '老師歸來,悲傷挨罵去',
    time: '2019-10-26'
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
    <div className="carousel">
      <div className="carousel-slides" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {imageArray.map((item, index) => (
          <div className="carousel-slide" key={index}>
            <img src={item.image} alt={item.title} />
            <div className="carousel-caption">
              {/* <h3>{item.title}</h3>
              <p>{item.time}</p> */}
            </div>
          </div>
        ))}
      </div>

      <button className="carousel-control left" onClick={prevSlide}>
        &#10094;
      </button>
      <button className="carousel-control right" onClick={nextSlide}>
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
