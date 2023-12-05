import React,{useState} from 'react'
// import component 👇
import Drawer from 'react-modern-drawer'
import Logo from './../assets/DWClogo.svg'
//import styles 👇
import 'react-modern-drawer/dist/index.css'
import { IoReorderThreeOutline } from "react-icons/io5";

const MobileNavbar = () => {
  const [isOpen, setIsOpen] =useState(false)
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState)
}
  return (
    <div className="grid grid-cols-3 p-2">
      <div className='col-span-1'/>
     <div>
      <img src={Logo} className='max-h-[100px]'/>
     </div>
     <div className="flex justify-end items-center">
      <IoReorderThreeOutline size={40} onClick={toggleDrawer}/>
      <Drawer
                open={isOpen}
                onClose={toggleDrawer}
                direction='left'
                className='bla bla bla'
            >
                <div className='flex flex-col items-center justify-center text-center p-[30px] space-y-[10px]'>
                <a className="text-[16px] text-[#343d48] font-medium hover:text-[#EA3A60] px-[25px]">Services</a>
          <a className="text-[16px] text-[#343d48] font-medium hover:text-[#EA3A60]
          whitespace-nowrap px-[25px]">About Us</a>
          <a className="text-[16px] text-[#343d48] font-medium hover:text-[#EA3A60] px-[25px]">Portfolio</a>
          <a className="text-[16px] text-[#343d48] font-medium hover:text-[#EA3A60] px-[25px]">Library</a>
     </div>
      {/*contact us*/}
      <div className="flex items-center justify-center">
        <button className="border-[#EA3A60] 
        border-[2px] font-medium text-[16px] rounded-2xl text-[#EA3A60] 
        w-[150px] h-[70px] hover:bg-[#EA3A60] hover:text-white hover:border-0">
          Contact us
        </button>
                </div>
            </Drawer>
     </div>
    </div>
  )
}

export default MobileNavbar