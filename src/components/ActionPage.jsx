import React from 'react'
import { CiSearch, CiUser } from 'react-icons/ci'

const ActionPage = () => {
    return (
        <section className='bg-logoBlue flex flex-col items-center  py-10 '>
            <h1 className='  text-2xl md:text-5xl font-bold text-white'>Ready to Get {""}
             <span className='relative inline-block'>
                Started?
                <div className="absolute -bottom-2 left-0 right-0 h-1 bg-yellow-400 rounded-full"></div>
            </span>
             </h1>
            <span className='text-[#c8e0fa] text-[14px] md:text-[18px] px-5 md:px-0 py-10'>Join thousands of Nigerians who are finding reliable services or growing their business through <span className='text-yellow-400'>Wase.</span></span>
            <div className='flex gap-5 md:gap-3 items-center flex-col md:flex-row w-[70%] px-5 md:w-[40%] md:px-0 text-white'>
                <button className='flex items-center  justify-center gap-3 bg-buttonBlue px-5 py-4 w-full shadow-lg rounded-md'>
                    <CiSearch className='text-2xl' />
                    Find Service
                </button>
                <button className='flex items-center justify-center gap-3 bg-yellow-400 px-5 py-4  w-full shadow-lg rounded-md'>
                    <CiUser className='text-2xl' />
                    Become a provider
                </button>
            </div>
        </section>
    )
}

export default ActionPage