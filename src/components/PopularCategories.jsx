import React from 'react'
import Plumber from "../assets/plumber.jpg"
import Electrician from "../assets/electrician.jpg"
import Fashion from "../assets/Fashion.jpg"
import Teacher from "../assets/Teacher.jpg"
import MakeUp from "../assets/MakeUp.jpg"
import { div } from 'framer-motion/client'
import { LuArrowRight } from 'react-icons/lu'


const AvailableCategories = [
    {
        id:1,
        name:"Plumber",
        number: "100",
        image:Plumber
    },
    {
        id:2,
        name:"Electrical Engineer",
        number:"50",
        image:Electrician
    },
    {
        id:3,
        name:"Fashion Designer",
        number:"60",
        image: Fashion
    },
    {
        id:4,
        name:"Teachers",
        number:"100",
        image: Teacher
    },
    {
        id:5,
        name:"Beauty",
        number:"30",
        image:MakeUp
    }
]



const PopularCategories = () => {
  return (
      <section className='px-10 py-10 bg-[#F9FAFB]'>
        <div className='flex items-center justify-between'>
              <h1 className='text-2xl font-bold '>Popular Categories</h1>
              <div className='flex items-center gap-1'>
                <span>
                      View All
                </span>
                <LuArrowRight/>
              </div>
        </div>
        <div className='flex items-center justify-between flex-wrap md:flex-nowrap gap-5 '>
             {
                AvailableCategories.map((category)=>(
                    <div key={category.id} className='bg-white rounded-lg shadow-lg mt-5 flex flex-col gap-2 cursor-pointer hover:scale-110 transition-transform duration-300 ease-in-out '>
                        <img src={category.image} alt={category.name} className='bg-cover bg-center rounded-sm' />
                        <div className='flex flex-col justify-center items-center px-2 py-3'>
                            <span className='text-logoBlue'>{category.name}</span>
                            <span className='text-sm text-gray-400'>{category.number}+ providers</span>
                        </div>
                    </div>
                ))
             }
        </div>
    </section>
  )
}

export default PopularCategories