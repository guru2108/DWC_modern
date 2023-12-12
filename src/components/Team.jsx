import React from 'react'
import CEO from './../assets/CEO.png'
import { SocialIcon } from 'react-social-icons'
import achievement1 from './../assets/achievements/achievements1.jpeg'
import achievement2 from './../assets/achievements/achievements2.jpeg'
import achievement3 from './../assets/achievements/achievements3.jpeg'
import achievement5 from './../assets/achievements/achievements5.jpeg'
import achievement6 from './../assets/achievements/achievements6.jpeg'
import achievement7 from './../assets/achievements/achievements7.jpeg'
import ISO from './../assets/ISO.41f6c0d6.png'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
const Team = () => {
  return (
    <>
    <div className="mt-[80px] w-screen" id="aboutus"> 
    <h2 className="flex items-center text-center justify-center text-[14px] text-[#EA3A60]"
    style={{letterSpacing:"2px"}}>WHO WE ARE</h2>
    <h1 className="text-[20px] mt-[10px] md:text-[32px] lg:text-[36px] flex items-center text-center justify-center"
    style={{letterSpacing:"0.5px"}}>Meet our CEO</h1>
    <div className="flex items-center justify-center text-center w-screen">
      <div className="flex flex-col items-center text-center bg-white rounded-lg shadow-lg justify-center mt-[20px] p-[20px]">
        <img src={CEO} className='shadow-md flex max-h-[300px]'/>
        <div className="mt-[10px] font-bold" style={{letterSpacing:1.2}}>Gurusubash Kanagarajan</div>
        <div className="flex items-center justify-center mt-[10px]">
         <SocialIcon url="https://www.linkedin.com/in/gurusubash-kanagarajan-24083241/"/>
        </div>
     </div>
    </div>
    </div>
    <div className="mt-[80px] w-screen"> 
    <h1 className="text-[20px] mt-[10px] md:text-[32px] lg:text-[36px] flex items-center text-center justify-center"
    style={{letterSpacing:"0.5px"}}>Accredition and Awards</h1>

<div className='md:grid grid-cols-3 mt-[20px]'>
           <div className=" col-span-1"/>
               <div className=' '>

            <Carousel className='md:inline ' autoFocus={true} showThumbs= {false} >
                <div>
                    <img src={achievement3} />
                   
                </div>
                <div>
                    <img src={achievement2} />
                    
                </div>
                <div className="">
                    <img src={achievement1} />
                    
                </div>
                <div>
                    <img src={achievement5} className='flex max-h-[450px]' />
                   
                </div>
                <div>
                    <img src={achievement6} className=" flex max-h-[450px]" />
                    
                </div>
            </Carousel>
               </div>
               <div className="col-span-1"/>
           </div>
  <div className="w-screen flex items-center justify-center mt-[20px]">
    <img src={ISO} className="max-h-[600px]"/>
  </div>
        </div>
    </>
  )
}

export default Team