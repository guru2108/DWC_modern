import React from 'react'
import Logo from './../assets/DWClogo.svg';
import MobileNavbar from './MobileNavbar';
const Navbar = () => {
  return (
    <>
    <nav className='lg:hidden'>
     <MobileNavbar/>
    </nav>
    <nav className="hidden lg:flex px-[300px] pt-[10px] justify-between w-screen scroll-smooth">
        {/* {image section} */}
        <div className="flex">
            <img src={Logo} alt="Digiworld Creative" className='h-[100px]'/>
        </div>
        {/* Options */}
        <div className="flex items-center text-center">
          <a href="/#services" className="text-[16px] text-[#343d48] font-medium hover:text-[#EA3A60] px-[25px]">Services</a>
          <a href="/#aboutus" className="text-[16px] text-[#343d48] font-medium hover:text-[#EA3A60]
          whitespace-nowrap px-[25px]">About Us</a>
          <a href="/#portfolio" className="text-[16px] text-[#343d48] font-medium hover:text-[#EA3A60] px-[25px]">Portfolio</a>
          <a href="/#subscription" className="text-[16px] text-[#343d48] font-medium hover:text-[#EA3A60] px-[25px]">Library</a>
     </div>
      {/*contact us*/}
      <div className="flex items-center justify-center">
        <a href="mailto:sales@digiworldcreative.com">
        <button className="border-[#EA3A60] 
        border-[2px] font-medium text-[16px] rounded-2xl text-[#EA3A60] 
        w-[170px] h-[70px] hover:bg-[#EA3A60] hover:text-white hover:border-0">
          Contact Us
        </button>
        </a>
      </div>
    </nav>
    </>
  )
}

export default Navbar