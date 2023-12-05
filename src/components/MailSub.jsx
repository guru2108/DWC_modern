import React from 'react'

const MailSub = () => {
  return (
    <div className="mt-[20px] w-screen flex items-center justify-center text-center">
    <div className='flex flex-col  items-center justify-center bg-[#EA3A60] rounded-lg px-[30px] py-[60px] text-white md:w-[60%]'>
        <h1 className="text-[30px] font-bold p-[10px]">Subscribe to our newsletter</h1>
        <h2 className='p-[10px] text-[20px]'>Feel free to subscribe to our newsletter to get all <br/> the latest updates about our company</h2>
        <div className="mt-[10px] flex bg-white py-[20px] px-[30px] md:w-[40%] space-x-[10px] rounded-md justify-between shadow-md">
          <input className="outline-none cursor-pointer text-black w-[80%]" placeholder="Enter your email id"/>
          <button className="bg-[#EA3A60] rounded-lg shadow-lg p-[10px] text-[14px] flex text-center justify-end">Subscribe</button>
        </div>
    </div>
    </div>
  )
}

export default MailSub