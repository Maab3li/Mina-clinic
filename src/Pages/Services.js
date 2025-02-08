import Card_slider from '../Components/Card_slider/Card_slider'
import { NavHashLink as Link } from 'react-router-hash-link'
import { useRef } from 'react'

function Services() {

    return (
        <div id="services" class ='section'>
            <div className='pt-16'>
             <div className="font-bold text-3xl text-center text-gray-900">Our Services</div>
             <Card_slider />
             <div className='text-xl text-center text-gray-900 font-bold lg:mt-12 mt-24 py-2 bg-pink-200 '>
                If you want to be up for an appointment, please fill up the appointment form by clicking <Link to ='#appointment' smooth className='text-pink-700 font-bold'>here</Link>.
             </div>
             </div>
        </div>     
    )
}

export default Services