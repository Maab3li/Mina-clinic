import d from '../Card_slider/data'
import React, { Component } from "react";
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "#831843" ,borderRadius:'30px'}}
        onClick={onClick}
      />
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "#831843" ,borderRadius:'30px'}}
        onClick={onClick}
      />
    );
  }
  


function Card_slider() {
    var settings = {
        dots: false,
        infinite: true,
        speed: 800,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide:0,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                  slidesToShow: 3,
                  slidesToScroll: 3,
                }
              },
            {
                breakpoint: 800,
                settings: {
                  slidesToShow: 3,
                  slidesToScroll: 3,
                }
              },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
              }
            },
            {
              breakpoint: 420,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
        };

    return (
    <div className="w3/4 m-auto">
                <div className="mt-5">
                    <Slider {...settings} className='mx-7 px-5 shadow-2xl flex justify-center items-center'>
                    {d.map((service) => (
                        <div className='bg-white h-[400px] text-black rounded-xl py-2 px-2'>
                            <p className='text-center text-lg text- pb-2 text-pink-900 font-bold'>{service.serviceName}</p>
                            <div className='flex jusify-center items-center'>
                                <img className='rounded-t-xl w-full h-60' src={service.serviceImage} alt = 'service image' />
                            </div>
                            <div className='h-40'>
                                <p className='h-full'>{service.serviceDescription}</p>
                            </div>
                               
                        </div>
                    ))}
                    </Slider>
                </div>
             </div>
    )
} 

export default Card_slider