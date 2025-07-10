import { CiSearch, CiUser } from "react-icons/ci"
import BackgroundImage  from "../assets/bg-four.jpg"
import { MdOutlineLocationOn } from "react-icons/md"


const HeroSection = () => {
  return (
      <section
          className="h-screen bg-cover bg-center relative "
          style={{ backgroundImage: `url(${BackgroundImage})` }}
      >
          {/* Optional overlay for readability */}
          <div className="absolute inset-0 bg-black/80"></div>

          {/* Hero Content */}
          <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-6">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Find Skilled Professionals in Nigeria</h1>
              <p className="text-lg md:text-xl max-w-xl">
                  Connect with trusted local service providers for all your needs - from home repairs to event planning.
              </p>
              <div className="flex md:items-center  flex-col w-full px-2 pb-2 md:pb-0 md:flex-row  bg-white gap-2  md:w-[50%] text-black mt-5 rounded-lg ">
                  <div className="flex items-center ">
                      <CiSearch className=" text-3xl" />
                      <input type="text" name="skill" id="skill" placeholder="What service do you need? e.g Plumber" className="w-full outline-none px-2 py-2 md:py-4" />
                  </div>
                  <hr className="md:hidden block" />
                  <div className="flex items-center">
                      <MdOutlineLocationOn className=" text-3xl" />
                      <input type="text" name="location" placeholder="Where? e.g Lagos,Abuja,Ikeja" className="w-full outline-none px-2 py-2 md:py-4 " />
                  </div>
                  <hr className="md:hidden block" />
                  <button className="text-black bg-[#48d6d2] px-2 py-2 w-full rounded-lg md:w-[150px]">
                    Search
                  </button>
              </div>
              <button className="bg-[#ffc107] rounded-md text-white  flex items-center justify-center mt-7 px-5 py-3 gap-3 ">
                <CiUser className="text-xl " />
                Become a provider
              </button>
              
          </div>
          
          {/* Scroll */}
          <div className="absolute -bottom-2 md:bottom-8  left-[50%] md:left-1/2 transform -translate-x-1/2 animate-bounce z-10">
              <div className="w-6 h-10 border-2 border-white rounded-full flex items-start justify-center p-2">
                  <div className="w-1 h-2 bg-white animate-bounce rounded-full" />
              </div>
          </div>
      </section>
  )
}

export default HeroSection