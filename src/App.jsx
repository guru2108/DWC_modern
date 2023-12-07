import { useState } from 'react'
import {Navbar,Banner,Services, Clients, Reviews, Video,Publications,Team, MailSub, LibrarySub, Footer} from './components/exports'
import ScrollToTop from 'react-scroll-up'
import { FaArrowCircleUp } from "react-icons/fa";


function App() {

  return (
    <div className='main overflow-x-hidden overflow-y-hidden'>
     <Navbar/>
     <ScrollToTop showUnder={160} duration={250}>
  <span className="fast">
    <FaArrowCircleUp className='text-yellow-600 md:text-blue-600' size={35}/>
  </span>
</ScrollToTop>

     <Banner/>
     <Services/>
     <Video/>

     <Team/>
     <Clients/>
     <Reviews/>
     <LibrarySub/>
     <MailSub/>
     <Footer/>
    </div>
  )
}

export default App
