import React from 'react'
import Banner1 from './../assets/banner1.png'
const Banner = () => {
  return (
    <div className="">
    <div className="flex flex-col items-center text-center justify-center md:min-h-[90vh] mt-[30px]">
       <h1 className="text-[35px] md:text-[50px] lg:text-[66px] font-semibold mb-[25px] leading-tight">
           All your technology <br/>
           solution in one place
       </h1>
       <h3 className="text-[16px] md:text-[20px] lg:text-[30px] font-normal leading-snug">
        Get your IT solutions devised by experts following great principles
       </h3>
       <a href="/#services">
       <button className="bg-[#EA3A60] font-medium text-[16px] rounded-3xl text-white
        w-[150px] h-[50px] hover:border-0 mt-[20px]">
          Explore
        </button>
        </a>
    <div className="grid grid-cols-1 place-items-center mt-[40px]">
        <img src={Banner1} />
    </div>
    </div>
    </div>
  )
}

export default Banner