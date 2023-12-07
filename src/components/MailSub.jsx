import React,{useState} from 'react'

const MailSub = () => {
    const[email,setEmail]=useState("")
    const notify=()=>{
        if(email.length==0 || !email.endsWith(".com")){
            alert("Please enter the correct email id before you hit the subscribe button")
        }
        else{
        alert("You have successfully subscribed to our newsletter");
        setEmail("")
    }
    }
  return (
    <div className="mt-[20px] w-screen flex items-center justify-center text-center pb-[20px]">
    <div className='flex flex-col  items-center justify-center bg-[#EA3A60] md:rounded-lg px-[30px] py-[60px] text-white md:w-[60%]'>
        <h1 className="text-[30px] font-bold p-[10px]" style={{letterSpacing:"5px"}}>Subscribe to our newsletter</h1>
        <h2 className='p-[10px] text-[20px] mt-[20px]' style={{lineHeight:1.2}}>Feel free to subscribe to our newsletter to get all <br/> the latest updates about our company</h2>
        <div className="mt-[10px] flex bg-white py-[20px] px-[30px] md:w-[40%] space-x-[10px] rounded-md justify-between shadow-md">
          <input className="outline-none cursor-pointer text-black w-[80%]" placeholder="Enter your email id" value={email} onChange={(e)=>setEmail(e.target.value)}/>
          <button className="bg-[#EA3A60] rounded-lg shadow-lg p-[10px] text-[14px] flex text-center justify-end" onClick={notify}>Subscribe</button>
        </div>
    </div>
    </div>
  )
}

export default MailSub