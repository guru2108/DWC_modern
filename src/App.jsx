import { useState } from 'react'
import {Navbar,Banner,Services, Clients, Reviews, Video,Publications,Team} from './components/exports'
import ScrollToTop from 'react-scroll-up'
import { FaArrowCircleUp } from "react-icons/fa";
function App() {

  return (
    <div className=' overflow-x-hidden overflow-y-hidden'>
     <Navbar/>
     <ScrollToTop showUnder={160}>
  <span>
    <FaArrowCircleUp className='text-red-500 bg-white' size={40}/>
  </span>
</ScrollToTop>
     <Banner/>
     <Services/>
     <Video/>
     <Clients/>
     <Team/>
     <Reviews/>
    </div>
  )
}

export default App
