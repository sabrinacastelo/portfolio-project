import { useState, useEffect } from 'react';
import './carousel.css';

const imageArray = [
  {
    image: 'https://st1.uvnimg.com/3d/28/5601ad8e4d32a7272e3b7a8d8110/churrasco-0522.jpg'
  },
  {
    image: 'https://www.sabornamesa.com.br/media/k2/items/cache/7b98703f48b0025160f2b9b5aad2a874_L.jpg'
  },
  {
    image: 'https://cdn.tasteatlas.com/images/dishes/3571507db7da42a49b116d559e68fb58.jpg'
  },
  {
    image: 'https://i.pinimg.com/originals/94/22/29/942229de217b408bc075c4f56d453830.jpg'
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
