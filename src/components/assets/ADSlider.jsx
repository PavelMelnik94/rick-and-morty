import React from 'react';
import Slider from "react-slick";

export default function ADSlider() {
    var settings = {
        dots: false,
        infinite: true,
        speed: 4400,
        slidesToShow: 5,
        slidesToScroll: 5,
        initialSlide: 0,
        autoplay: true,
        autoplaySpeed: 1000,
        pauseOnHover: true,
        arrows: false,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: false
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
      
      const placeholderImgUrl = 'https://via.placeholder.com/200x150?text=РЕКЛАМА'


    return (
        <div className='adslider-container p-3'>
        
        <Slider {...settings}>
          <div>
            <a href="#!"> <img src={placeholderImgUrl} alt="ADimage" /></a>
          </div>
          <div>
            <a href="#!"> <img src={placeholderImgUrl} alt="ADimage" /></a>
          </div>
          <div>
            <a href="#!"> <img src={placeholderImgUrl} alt="ADimage" /></a>
          </div>
          <div>
            <a href="#!"> <img src={placeholderImgUrl} alt="ADimage" /></a>
          </div>
          <div>
            <a href="#!"> <img src={placeholderImgUrl} alt="ADimage" /></a>
          </div>
          <div>
            <a href="#!"> <img src={placeholderImgUrl} alt="ADimage" /></a>
          </div>
          <div>
            <a href="#!"> <img src={placeholderImgUrl} alt="ADimage" /></a>
          </div>
          
          
        </Slider>
      </div>
    )
}
