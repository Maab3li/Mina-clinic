import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import '../App.css'
import slideImages from './Slider/data/images'
import './Slider.module.css'

const responsiveSettings = [
  {
      breakpoint: 800,
      settings: {
          slidesToShow: 1,
          slidesToScroll: 1
      }
  },
  {
      breakpoint: 500,
      settings: {
          slidesToShow: 1,
          slidesToScroll: 1
      }
  },
  {
    breakpoint: 200,
    settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
    }
}
];

export default function Slider() {
    
    return (
      <div className=' min-h-4xl justify-center md:pt-4 ' style={{width:'100%', margin:'0 auto',zIndex:'1'}}>
        <Slide easing="ease" autoplay slidesToScroll={2} slidesToShow={2} indicators={false} responsive={responsiveSettings} duration={2000} transitionDuration={2000} arrows={false} defaultIndex={0} canSwipe={false} style={{margin:'0 auto',zIndex:'1'}}>
          {slideImages.map((slide, index) => {
            return (
              <div  key={slide} className="flex justify-center items-center">
                <div className="h-96 md:w-1/2 flex justify-center items-center">
                    <img src={slideImages[index]} alt="im" className="w-full h-96" />             
                 </div>
              </div>
            );
          })}
        </Slide>
      </div>
    );
  }