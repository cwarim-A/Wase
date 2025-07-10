import React from 'react'
import { FaCheckCircle, FaRegCalendarCheck, FaSearch } from 'react-icons/fa'

const HowItWorks = () => {
    return (
        <section className='py-20 px-10 '>
            <h1 className='font-bold text-3xl text-center'>How It Works</h1>
            <div className='flex flex-col md:flex-row items-center justify-between gap-5 mt-10'>
                <div className="flex flex-col gap-3 items-center justify-center text-center max-w-sm">
                    {/* Icon */}
                    <FaSearch className="bg-white text-logoBlue text-xl w-[50px] h-[50px] p-3 rounded-full shadow" />

                    <h2 className="text-xl font-semibold">Search</h2>

                    <span className=" text-sm">
                        Find the perfect service provider for your needs using our detailed search filters.
                    </span>
                </div>
                <div className="flex flex-col gap-3 items-center justify-center text-center max-w-sm">
                    <FaRegCalendarCheck className="bg-white text-logoBlue text-xl w-[50px] h-[50px] p-3 rounded-full shadow" />
                    <h2 className="text-xl font-semibold">Book a Provider</h2>
                    <span className='text-sm'>
                        Book your service with a few clicks and communicate directly with the provider.
                    </span>
                </div>
                <div className="flex flex-col gap-3 items-center justify-center text-center max-w-sm">
                    <FaCheckCircle className="bg-white text-logoBlue text-xl w-[50px] h-[50px] p-3 rounded-full shadow" />
                    <h2 className="text-xl font-semibold">Execute</h2>
                    <span className='text-sm'>
                        Enjoy quality service and leave a review to help others find great providers.
                    </span>
                </div>
            </div>
        </section>
    )
}

export default HowItWorks