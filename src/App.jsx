import { useState } from 'react'
import {Navbar,Banner,Services, Clients, Reviews, Video,Publications,Team, MailSub, LibrarySub, Footer} from './components/exports'
import ScrollToTop from 'react-scroll-up'
import { IoMdArrowRoundUp } from "react-icons/io";


function App() {

  return (
    <div className='main overflow-x-hidden overflow-y-hidden'>
     <Navbar/>
     <ScrollToTop showUnder={160} duration={250}>
  <span className="rounded-2xl bg-[#EA3A60] border-[2px] border-white flex p-[2px] text-center items-center justify-center">
    <IoMdArrowRoundUp className='text-white outline-none' size={25}/>
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
