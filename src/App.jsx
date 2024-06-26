import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Spark from './components/Spark'
import Tbeam from './components/Tbeam'
import CArd from './components/CArd'
import Testimonials from './components/Testimonials'
import Masking from './components/Masking'
import ArrowImage from './components/ArrowImage'
import ThreeDCard from './components/ThreeDCard'
import BBeams from './components/BBeams'
import LocomotiveScroll from 'locomotive-scroll';

function App() {
  const locomotiveScroll = new LocomotiveScroll();
  return (
    <div className="w-full h-screen bg-black/[0.96] ">
      <Home />
      <Spark />
      <CArd />
      <Testimonials />
      <Masking />
      <ArrowImage />
      <ThreeDCard />
      <BBeams />
    </div>
  )
}

export default App