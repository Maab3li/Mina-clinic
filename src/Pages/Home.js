import { Slide } from 'react-slideshow-image';
import '../App.css';
import Slider from '../Components/Slider'
import check from '../assets/icons8-check-48.png'
import { useRef } from 'react';

function Home() {
    const homeRef = useRef()

return(
    <div id='home' className='section container place-content-center ml-0 md:ml-0 mt-5 max-w-full justify-center ' style={{width:'100%'}} >
        <div className='pt-14'>
        <h3 className='text-xl text-center font-bold justify-center antialiased text-gray-900'>Welcome to</h3>
        <h1 className='text-5xl text-center text-pink-900 font-bold font-lora subpixel-antialiased mt-0 md:mt-3'>
            Mina Clinic
        </h1>
        <div className='justify-center, mt-10' style={{marging:'0 auto'}}>
            <div className="flex grow justify-center text-xl text-center" style={{display:'block'}}>We present high-quality services with modern techniques to keep your teeth healthy
            <img src={check} alt='check icon image' style={{whiteSpace:'wrap',display:'inline', width:'40px', height:'30px'}} />
            .
            </div>
        </div>
        <div className='justify-center' style={{width:'100%', zIndex:'1'}}>
            <Slider />
        </div>
        </div>
    </div>
)
}

export default Home