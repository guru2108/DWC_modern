import React from 'react'
import ReactPlayer from 'react-player'
import { FaLanguage } from "react-icons/fa";
import { FaExternalLinkAlt } from "react-icons/fa";
import { DiTerminalBadge } from "react-icons/di";
import service4 from './../assets/page 4.pdf'
import service6 from './../assets/page 6.pdf'
const Video = () => {
  return (
    <div className="mt-[80px] w-screen"> 
    <h2 className="flex items-center text-center justify-center text-[14px] text-[#EA3A60]"
    style={{letterSpacing:"2px"}}>WHAT WE OFFER</h2>
    <h1 className="text-[20px] mt-[10px] md:text-[32px] lg:text-[36px] flex items-center text-center justify-center"
    style={{letterSpacing:"0.5px"}}>Business goals achieved with design</h1>
    <div className="flex flex-col lg:flex-row items-center justify-center text-center mt-[30px]">
    
    <div className='md:hidden'>
    <ReactPlayer url='https://www.youtube.com/watch?v=VPK4TnujDy4' width={350} height={350} />
    </div>
   <div className="hidden md:inline">
   <ReactPlayer url='https://www.youtube.com/watch?v=VPK4TnujDy4' height={410} />
   </div>
    <div className='mt-[20px] lg:mt-[0px] flex flex-col space-y-[10px]'>
      <div className="py-[20px] md:py-[0px]">
    <div className="flex flex-col p-[20px] bg-white rounded-md shadow-lg md:ml-[60px]">

<div className="justify-center flex  items-center">
<div className="rounded-xl shadow-xl w-[60px] h-[50px] justify-center flex items-center text-center text-white bg-red-500">
  <FaLanguage size={50}/>
  </div>
</div>

<a href={service4} target="_blank" className='flex items-center text-center hover:text-[#EA3A60]'>
<h1 className="flex text-center justify-center mt-[15px] text-[18px] font-bold">Translation service</h1>
<FaExternalLinkAlt size={18} className="mt-[15px] ml-[3px]"/>
</a>
<div className="text-[15px] font-medium flex text-left justify-start mt-[5px]" style={{lineHeight:1.7}}>
  Professionally translate your work <br/> in more than 65 language<br/> combinations.
</div> 
</div>
</div>

<div className="flex flex-col p-[20px] bg-white rounded-md shadow-lg md:ml-[60px]">

<div className="justify-center flex  items-center">
   <div className="rounded-xl shadow-xl w-[60px] h-[50px] justify-center flex items-center text-center text-white bg-purple-500">
  <DiTerminalBadge size={60}/>
  </div>
</div>
<a href={service6} target="_blank" className='flex items-center text-center hover:text-[#EA3A60]'>
<h1 className="flex text-center justify-center mt-[15px] text-[18px] font-bold">Automation service</h1>
<FaExternalLinkAlt size={18} className="mt-[15px] ml-[3px]"/>
</a>
<div className="text-[15px] font-medium flex text-left justify-start mt-[5px]" style={{lineHeight:1.7}}>
  Automate the workflow of<br/> your software with our Devops<br/>Engineers.
</div> 
</div>
    </div>


    </div>
    </div>
  )
}

export default Video