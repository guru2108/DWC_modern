import React from 'react'

const LibrarySub = () => {
   const plans=[{
    id:1,
    name:"Silver",
    for:"For small teams or office",
    contents:[
        "✅ 5 books for publishing",
        "✅ Blog support tools",
        "❌ Proof reading",
        "❌ Multiple device logins"
    ],
    price:"$15"
   },{
    id:2,
    name:"Gold",
    for:"For enterprise business",
    contents:[
        "✅ 10 books for publishing",
        "✅ Blog support tools",
        "✅ Proof reading",
        "❌ Multiple device logins"
    ],
    price:"$30"
   },{
    id:3,
    name:"Diamond",
    for:"For pro level publishers",
    contents:[
        "✅ 20 books for publishing",
        "✅ Blog support tools",
        "✅ Proof reading",
        "✅ Multiple device logins"
    ],
    price:"$50"
   }]
  return (
    <div className="mt-[80px] w-screen" id="subscription"> 
    <h1 className="flex items-center text-center justify-center text-[14px] text-[#EA3A60]"
    style={{letterSpacing:"2px"}}>DIGITAL LIBRARY</h1>
    <h2 className="text-[20px] mt-[10px] md:text-[32px] lg:text-[36px] flex items-center text-center justify-center"
    style={{letterSpacing:"0.5px"}}>Choose our pricing policy</h2>
    <div className="flex items-center justify-center w-screen">
        <div className="grid grid-cols-1 md:grid-cols-3 place-items-center">
            {
                plans.map((plan)=>{
                    return(
                        <div className="p-[10px] md:p-[30px]" key={plan.id}>
                          <div className='bg-white rounded-md border-neutral-300 flex flex-col p-[20px] w-[350px]' style={{borderWidth:"0.2px"}}>
                           <div className="flex justify-start items-start text-left text-[20px] font-bold">{plan.name}</div>
                           <div className="text-[#343D48] text-[15px] flex items-start justify-start text-left font-semibold mt-[7px]">{plan.for}</div>
                           <div className='flex flex-col items-start justify-start text-left'>
                           {
                            plan.contents.map((content)=>{
                                return(
                                   <div className="text-[#343D48] text-[15px] py-[10px]" key={content}>{content}</div> 
                                )
                            })
                           }
                           </div>
                           <div className='flex items-center justify-center text-center'>
                              <div className='text-[30px] font-extrabold'>
                                {plan.price}
                              </div>
                              <div className="text-[#343D48] text-[20px] items-center text-center
                              ">
                                /Monthly
                              </div>
                            </div>
                            <div className="mt-[10px] flex items-center justify-center text-center">
<a href="mailto:sales@digiworldcreative.com"><button className="rounded-lg shadow-lg p-[10px] bg-[#EA3A60] text-white">Get a Quote</button></a>
                            </div>
                          </div>
                        </div>
                    )
                })
            }
        </div>
    </div>
    </div>
  )
}

export default LibrarySub