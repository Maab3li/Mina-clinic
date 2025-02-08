import clinicImage from '../assets/Northshore_dental-5-1-1.jpg'
import '../App.css';
import { useRef } from 'react';
function About() {
  const aboutRef = useRef()

return (
  <div id='about' class ='section'>
    <div className='pt-10'>
    <div className='text-gray-900 text-3xl font-bold text-center pt-8'>About us</div>
    <div className='flex justify-center items-center pt-2'>
      <img className='w-full md:w-3/4 md:h-60 lg:h-80 2xl:h-full' src={clinicImage} alt='clinic image' />
    </div>
    <div className='px-2 md:px-28 lg:px-32 xl:px-40 text-xl py-2'>
      Mina hospital is a modern hospital located in Sudan, specialized in teeth cure.
      We use Modern techniques for teeth treatment , including <span className='font-bold'>Laser Dentistry</span>,<span className='font-bold'> Digital X-Ray </span>, <span className='font-bold'>Intraoral Cameras</span> and <span className='font-bold'>Invisalign</span>.
    </div>
    </div>
  </div>
)
}

export default About