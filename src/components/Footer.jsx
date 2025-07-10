import React from 'react'
import { CiTwitter } from 'react-icons/ci'
import { FaInstagram } from 'react-icons/fa'
import { FiLinkedin } from 'react-icons/fi'
import { SlSocialFacebook } from 'react-icons/sl'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <section className='bg-gradient-to-b from-[#1f2937] to-[#111827] px-5 md:px-10 py-5'>
      <div className='flex flex-col  justify-between md:flex-row '>
        <div className=' w-full md:w-[20%]'>
          <div className=' flex flex-col'>
            <h1 className='text-xl md:text-3xl text-white '>Wa<span className='text-logoBlue'>Ṣe</span></h1>
            <span className='uppercase text-[6px] md:text-[8px] ml-[25px] w-[180px] text-white'>Connecting you to trusted local skills</span>
          </div>
          <p className="text-gray-300 text-[12px] pt-5">
            Connecting skilled service providers with customers across
            Nigeria. Find reliable local services or offer your skills.
          </p>
          <div className='flex gap-3 text-2xl text-gray-300 mb-5 mt-5 md:mb-0  '>
            <SlSocialFacebook className='hover:text-white' />
            <CiTwitter className='hover:text-white' />
            <FaInstagram className='hover:text-white' />
            <FiLinkedin className='hover:text-white' />
          </div>
        </div>
        <div className='text-white mb-5 md:mb-0'>
          <h1 className='py-3'>Quick Links</h1>
          <div className='flex flex-col gap-2 text-[14px] text-gray-300'>
            <Link className='hover:text-white'>Home</Link>
            <Link className='hover:text-white'>Find Services</Link>
            <Link className='hover:text-white'>Become a Provider</Link>
            <Link className='hover:text-white'>About Us</Link>
          </div>
        </div>
        <div className='text-white mb-5 md:mb-0'>
          <h1 className='py-3'>Categories</h1>
          <div className='flex flex-col gap-2 text-[14px] text-gray-300'>
            <Link className='hover:text-white'>Plumber</Link>
            <Link className='hover:text-white'>Electrical Engineer</Link>
            <Link className='hover:text-white'>Fashion Designer</Link>
            <Link className='hover:text-white'>Teachers</Link>
            <Link className='hover:text-white'>Beauty</Link>
          </div>
        </div>
        <div className='text-white mb-5 md:mb-0'>
          <h3 className="py-3">Contact</h3>
          <ul className="space-y-3">
            <li className="text-gray-300 text-sm">
              Email: info@skillconnect.ng
            </li>
            <li className="text-gray-300 text-sm">
              Phone: +234 800 123 4567
            </li>
            <li className="text-gray-300 text-sm">Lagos, Nigeria</li>
          </ul>
        </div>
      </div>
      <div className="mt-12 pt-8 border-t border-gray-700">
        <div className="flex flex-col sm:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2023 SkillConnect Nigeria. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 sm:mt-0">
            <Link
              href="#"
              className="text-gray-400 hover:text-white transition-colors text-sm"
            >
              Privacy Policy
            </Link>
            <Link
              href="#"
              className="text-gray-400 hover:text-white transition-colors text-sm"
            >
              Terms of Service
            </Link>
            <Link
              href="#"
              className="text-gray-400 hover:text-white transition-colors text-sm"
            >
              Help Center
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Footer