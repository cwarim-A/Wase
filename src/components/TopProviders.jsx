import React, { useState } from 'react'

import { FaStar } from 'react-icons/fa'
import { IoLocationOutline } from 'react-icons/io5'
import { LuEye } from 'react-icons/lu'


const TopRatedProviders = [
    {
        id:1,
        name:"David Adeyemi",
        job:"Expert Plumber",
        desc:"Specializing in leak repairs, installations, and bathroom renovations.",
        location:"Ikeja, Lagos",
        price:"₦5000",
        reviews: 124,
        img: "https://i.ibb.co/SD8KNFvR/expert-plumber.png"
    },
    {
        id: 2,
        name: "Ngozi Okonkwo",
        job: "Event Planner",
        desc: "Creating memorable events from weddings to corporate gatherings.",
        location: "Victoria Island, Lagos",
        price: "₦50,000",
        reviews: 98,
        img: "https://i.ibb.co/W42Xffrn/event-planner.png"
    },
    {
        id: 3,
        name: "Ibrahim Musa",
        job: "Math Tutor",
        desc: "Experienced tutor specializing in WAEC, JAMB and university mathematics",
        location: "Abuja, FCT",
        price: "₦3,500/hr",
        reviews: 87,
        img: "https://i.ibb.co/YFsVDY9K/Tutor.png" 
    }
]

const TopProviders = () => {
    const stars = Array(5).fill(0);
  return (
    <section className='px-10 py-10'>
          <h1 className='text-2xl font-bold '>Top rated Providers</h1>
          <div className='flex items-center justify-between flex-wrap md:flex-nowrap gap-10 py-10'>
                {
                    TopRatedProviders.map((provider)=>(
                        <div key={provider.id} className='bg-white shadow-lg px-5 py-5 rounded-md hover:scale-110 transition-transform duration-200'>
                            <div className='flex items-center gap-5'>
                                <div className='relative'>
                                    <img src={provider.img} alt={provider.name} className=' w-[60px] h-[60px] rounded-full object-cover object-center ring-2' />
                                    <span className='absolute top-11 -right-1 w-[20px] h-[20px] bg-green-600 rounded-full '></span>
                                </div>
                                <div className='flex flex-col gap-1'>
                                    <span>{provider.name}</span>
                                    <span className='text-[14px] text-white text-center rounded-lg bg-logoBlue'>{provider.job}</span>
                                </div>
                            </div>
                            <div className='flex items-center gap-2 py-3 text-sm'>
                               <div className='flex '>
                                    {stars.map((_, index) => (
                                        <FaStar key={index} className='text-[#ffc107]' />
                                    ))}
                               </div>
                                <span className='text-[#c8c8c8]'>({provider.reviews}  reviews)</span>
                            </div>
                            <span className=''>{provider.desc}</span>
                            <div className='flex items-center justify-between py-3'>
                                <div className='flex items-center gap-2 text-[14px] text-[#7f8690]'>
                                    <IoLocationOutline className='text-[18px]' />
                                    <span>{provider.location}</span>
                                 </div>
                                 <div className='flex items-center gap-1'>
                                        from 
                                        <span>{provider.price}</span>
                                 </div>
                            </div>
                            <button className='w-full bg-logoBlue text-white flex items-center justify-center gap-3 py-2 rounded-md'>
                                <LuEye />
                                View Profile 
                            </button>
                        </div>
                    ))
                }
          </div>
    </section>
  )
}

export default TopProviders