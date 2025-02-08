import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useRef } from 'react'


function Contact() {
    const contactRef = useRef()

    return(
        <div id='contact' class ='section'>
            <div className='pt-10'>
            <div className="text-3xl text-gray-900 text-center font-bold pt-8">
                Contact
            </div>
            
            <div className='grid grid-cols-1 grid-rows-2 pt-6 md:pt-10 '>
                <div className='col-span-1 text-center text-xl pb-2'>
                    If you have any questions which you need to clarify ,  please contact us by clicking the following link :
                </div>
                <div className='col-span-1 text-center'>
                    <a className=' text-sky-600 hover:text-sky-300 text-2xl font-bold' href='mailto:m@gmail.com' target='m@gmail.com'>Mina-Clinic</a>
                </div>
            </div>
            <div className='md:pt-10 lg:pt-20'>
            <div class="relative justify-center items-center">
                <div class="absolute inset-0 flex items-center justify-center">
                    <div class="w-80 md:w-1/2 border-b border-gray-300"></div>
                </div>
                <div class="relative flex justify-center">
                    <span class="bg-white px-4 text-l text-gray-900 font-bold">Or</span>
                </div>
            </div>
            </div>
            <div className='grid grid-cols-4 gap-1 justify-center items-center gap-5 py-16 md:py-20 lg:pt-30 '>
                <div className='col-start-1 col-end-3 md:col-start-2 md:col-end-2 text-center text-xl text-gray-900'>
                <FontAwesomeIcon className='pr-2' icon= {faPhone} /><span className=''>Make a direct call:</span> 
                </div>
                <span className='font-bold col-start-3 col-end-5 md:col-start-3 md:col-end-3 text-center'>+249 000000000</span>
            </div>
            </div>

        </div>
        
    )
}

export default Contact