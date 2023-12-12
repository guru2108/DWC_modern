import React from 'react'
import Logo from './../assets/DWClogo.svg';
const Footer = () => {
  return (
    <div className=" flex flex-col items-center justify-center text-center py-[40px]">
       <img src={Logo} className='max-h-[100px] flex'/>
       <h1 className="text-[16px] text-black font-light">Copyright by Digiworld creative, 2023</h1>
    </div>
  )
}

export default Footer