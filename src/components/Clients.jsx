import React from 'react'
import client11 from './../assets/clients/scansoms.jpg'
import  client2 from './../assets/clients/propertychronicle.jpg'
import client1 from './../assets/clients/el.gazette.png'
import client3 from './../assets/clients/ITBM-300x165.png'
import client4 from './../assets/clients/ScanSom-Publishers-Sweden-300x177.png'
import client5 from './../assets/clients/Pearsons-300x99.png'
import client6 from './../assets/clients/Help-for-writers.jpg'
import client7 from './../assets/clients/Agal.png'
import client8 from './../assets/clients/Gnosko.uk_-300x300.png'
import client9 from './../assets/clients/Bom-Bom-300x300.png'
import client10 from './../assets/clients/Thomson.jpeg'
import client12 from './../assets/clients/Cengage.667c1518.png'
const images=[{
    img:client1,
    
},
{
    img:client2
},
{
    img:client3
},
{
    img:client4
},
{
    img:client5
},
{
    img:client6
},

{
    img:client7
},


{
    img:client8
},
    {
    img:client9},
{
    img:client10
},
{
    img:client11
},{
    img:client12
}]
const Clients = () => {
  return (
    <div className="mt-[80px] w-screen"> 
    <h2 className="flex items-center text-center justify-center text-[14px] text-[#EA3A60]"
    style={{letterSpacing:"2px"}}>WHO DO WE WORK WITH</h2>
    <h1 className="text-[20px] mt-[10px] md:text-[32px] lg:text-[36px] flex items-center text-center justify-center"
    style={{letterSpacing:"0.5px"}}>Meet our clients</h1>
   <div className="flex flex-col p-[30px] bg-gradient-to-r from-purple-800 to-indigo-500 mt-[20px]">
      <h2 className="flex items-center text-center justify-center text-[14px] text-white" style={{letterSpacing:"2px"}}>Trusted by</h2>
      <div className="flex items-center text-center justify-center">
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 place-items-center">
           {
            images.map((image)=>{
                return(
                    <div>
                        <img src={image.img} className='flex max-h-[150px] p-3 bg-transparent items-center'/>
                    </div>
                )
            })
           }
      </div>
      </div>
   </div>
    </div>
  )
}


export default Clients