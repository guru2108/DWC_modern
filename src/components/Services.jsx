import React from 'react'
import { VscTerminalUbuntu } from "react-icons/vsc";
import { MdOutlineSecurity } from "react-icons/md";
import { FaBookOpen } from "react-icons/fa";
import { TbBusinessplan } from "react-icons/tb";
import service1 from './../assets/Page 1.pdf';
import service2 from './../assets/Page 2.pdf'
import service3 from './../assets/Page 3.pdf'
const Services = () => {
  return (
    <div className="mt-[80px] w-screen" id="services"> 
        <h2 className="flex items-center text-center justify-center text-[14px] text-[#EA3A60]"
        style={{letterSpacing:"2px"}}>WHATS THE FUNCTION</h2>
        <h1 className="text-[20px] mt-[10px] md:text-[32px] lg:text-[36px] flex items-center text-center justify-center"
        style={{letterSpacing:"0.5px"}}>Here are the services we offer</h1>
        <div className='flex items-center text-center justify-center'>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-[60px]">
             {/* service1 .3*/}
             <div className="flex flex-col p-[40px]">

             <div className="justify-center flex lg:justify-start items-center">
                <div className="rounded-xl shadow-xl w-[70px] h-[70px] items-center justify-center flex text-center text-white bg-red-500 ">
               <VscTerminalUbuntu size={65}/>
               </div>
             </div>

             <a href={service1} target='_blank'><h1 className="flex text-left justify-start mt-[15px] text-[18px] font-bold text-[#0F2137] ">Software Development</h1></a>
             <div className="text-[15px] font-medium flex text-left justify-start mt-[15px]" style={{lineHeight:1.9}}>
               Get your software built in your desired <br/> way by the experts in the tech <br/> industry.
             </div> 
             </div>
                          {/* service1 */}
                          <div className="flex flex-col p-[40px]">

            <div className="justify-center flex lg:justify-start items-center">
            <div className="rounded-xl shadow-xl w-[70px] h-[70px] items-center justify-center flex text-center text-white bg-[#eb9737] ">
                    <MdOutlineSecurity size={65}/>
            </div>
            </div>

         <a href={service2} target='_blank'><h1 className="flex text-left justify-start mt-[15px] text-[18px] font-bold text-[#0F2137]">Cyber Security</h1></a>
         <div className="text-[15px] font-medium flex text-left justify-start mt-[15px]" style={{lineHeight:1.9}}>
          Secure your digital realm with our expert <br/>crafted cybersecurity solutions<br/> and technologies
        </div>
        </div>
            {/* service2 */}
        <div className="flex flex-col p-[40px]">

<div className="justify-center flex lg:justify-start items-center">
<div className="rounded-xl shadow-xl w-[70px] h-[70px] items-center text-center flex justify-center text-white bg-[#e537eb] ">
        <FaBookOpen size={65}/>
</div>
</div>

<a href={service3} target="_blank"><h1 className="flex text-left justify-start mt-[15px] text-[18px] font-bold text-[#0F2137]">Publishing Service</h1></a>
<div className="text-[15px] font-medium flex text-left justify-start mt-[15px]" style={{lineHeight:1.9}}>
 Need help with publishing your work ?<br/>Don't worry we have got<br/> you covered.
</div>
</div>

{/* Service 4 */}

<div className="flex flex-col p-[40px]">

<div className="justify-center flex lg:justify-start items-center">
<div className="rounded-xl shadow-xl w-[70px] h-[70px] items-center text-center flex justify-center text-white bg-[#3758eb] ">
        <TbBusinessplan size={65}/>
</div>
</div>

<h1 className="flex text-left justify-start mt-[15px] text-[18px] font-bold text-[#0F2137]">Market Research</h1>
<div className="text-[15px] font-medium flex text-left justify-start mt-[15px]" style={{lineHeight:1.9}}>
 Hard time understanding the market?<br/> get guidance from our expert<br/>business analysts.
</div>
</div>

            </div>
        </div>
    </div>
  )
}

export default Services