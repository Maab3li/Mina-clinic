import { Route, Routes, BrowserRouter } from 'react-router-dom';
import ReactDOM from "react-dom/client";
import React from "react";
import './App.css';
import './style.css';
import Navbar from './Parts/Navbar';
import Home from './Pages/Home'
import Services from './Pages/Services';
import Appointment from './Pages/Appointment';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Footer from './Parts/Footer'

function App() {

  return (
    <div>
      <div>
        <BrowserRouter>
          <Navbar />
          <Home />
          <Services />
          <About />
          <Appointment />
          <Contact />
          <Footer />
        </BrowserRouter>
      </div>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

export default App


