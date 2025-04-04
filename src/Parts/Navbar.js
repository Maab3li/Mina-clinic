import logo from '../assets/logo.png'
import {React, useEffect, useState } from "react";
import { NavHashLink as Link  } from "react-router-hash-link";
import Hamburger from 'hamburger-react'
import '../App.css'

function Navbar() {

    const [activeSection, setActiveSection] = useState('#home');

    const sections = document.querySelectorAll('.section')

    useEffect(() => {
        let currentSection = ''
        let sec1 = 'about'
        let sec2 = 'contact'
    
        window.addEventListener('scroll', () => {
            sections.forEach(section => {
                if(window.scrollY >= 0 && (window.scrollY < section.clientHeight-200) ) {
                    currentSection = 'home';
                    setActiveSection(`#${currentSection}`);
                }
                else if(( window.scrollY >= section.offsetTop-150)) {
                    currentSection = section.id;
                    setActiveSection(`#${currentSection}`);
                }
                else if(window.scrollY > sec1.offsetTop && window.scrollY < sec2.offsetTop) {
                    currentSection = 'appointment';
                    setActiveSection(`#${currentSection}`);
                }
                
            })
            })
        },[window.scrollY])
    
        

    const activeStyle = {color: "#FFF",background:'rgb(68, 63, 63)'}
    
    const [isOpen, setIsOpen] = useState(false)
   
  return (
    <nav className="bg-pink-200 sticky top-0 right-0 z-9999 mt-0" style={{zIndex:'9999'}}>
        <ul className="flex md:hidden">
            <div className="md:px-4 md:py-2 ml-[45%] ">
                <img src={logo} alt="tooth icon image" className="w-10 h-10 " />
            </div>
            <div className="md:hidden ml-auto ">
                <div className=''>
                <Hamburger toggled={isOpen} toggle={setIsOpen} color="#FFF" label="Show menu" />
                </div>
            </div>
        </ul>
        <ul className=  {`${isOpen ? 'block' : 'hidden'} text-center md:flex py-2 md:ml-auto `}>
            <li className="md:mr-auto md:ml-2">
            <img src={logo} alt="tooth icon image" className="w-10 h-10 hidden md:block" />
            </li>
            <li class='nav' className="px-4 py-2 text-pink-400 font-bold">
                <Link to='#home' smooth className='pt-1 pb-2 px-2 rounded-2xl'style={activeSection === ("#home")? activeStyle: {}}>Home</Link>
            </li>
            <li class='nav' className="px-4 py-2 text-pink-400 font-bold">
                <Link to='#services' smooth className='pt-1 pb-2 px-2 rounded-2xl' style={activeSection === ("#services")? activeStyle: {}} >Services</Link>
            </li>
            <li class='nav' className="px-4 py-2 text-pink-400 font-bold">
                <Link to='#about' smooth className='pt-1 pb-2 px-2 rounded-2xl' style={activeSection === ("#about")? activeStyle: {}}>About</Link>
            </li>
            <li class='nav' className="px-4 py-2 text-pink-400 font-bold">
                <Link to='#appointment' smooth className='pt-1 pb-2 px-2 rounded-2xl'style={activeSection === ("#appointment")? activeStyle: {}}>Appointment</Link>
            </li>
            <li class='nav' className="px-4 py-2 text-pink-400 font-bold">
                <Link to='#contact' smooth className='pt-1 pb-2 px-2 rounded-2xl' style={activeSection === ("#contact")? activeStyle: {}}>Contact</Link>
            </li>
        </ul>
    </nav>
  )
};

export default Navbar;