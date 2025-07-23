import { AnimatePresence, motion } from "framer-motion"
import { useEffect, useRef, useState } from "react"
import { GiHamburgerMenu } from "react-icons/gi"
import { IoMdClose } from "react-icons/io"
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md"
import { Link } from "react-router-dom"


const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  const [showDropdown, setShowDropdown] = useState(false)
  const [showMenu, setShowMenu] = useState(false)
  const hideTimeout = useRef(null);
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.addEventListener("scroll", handleScroll)
  }, [])

  const handleMouseLeave = () => {
    hideTimeout.current = setTimeout(() => {
      setShowDropdown(false);
    }, 3000);
  };


  return (
    <div className={` flex items-center justify-between px-5 md:px-10 py-5 fixed top-0 left-0 right-0  z-50 bg-transparent   ${scrolled ? "bg-white    shadow text-black" : "bg-black/5 text-white"
      }`}>
      {/* Logo */}
      <Link to="/">
        <div className=' flex flex-col'>
          <h1 className='text-xl md:text-3xl '>Wa<span className='text-logoBlue'>Ṣe</span></h1>
          <span className='uppercase text-[6px] md:text-[8px] ml-[25px] w-[180px]'>Connecting you to trusted local skills</span>
        </div>
      </Link>
      {/* NavLinks */}
      <ul className='hidden relative md:flex gap-5 text-sm'>
        <li><Link href="/find-services">Find Services</Link> </li>
        <li
          onMouseEnter={() => setShowDropdown(true)}
          onMouseLeave={handleMouseLeave}
          className=" relative cursor-pointer flex items-center gap-1">
          <span className="flex gap-1 items-center">
            Category {showDropdown ? <MdKeyboardArrowUp className="text-xl" /> : <MdKeyboardArrowDown className="text-xl" />}
          </span>
          {showDropdown && (
            <ul className="absolute top-full left-0 mt-2 bg-white text-black shadow-md rounded-md py-2 w-40 z-50">
              <li className="px-4 py-2 hover:bg-gray-100 border-b">
                <Link to="/categories/tech">Tech</Link>
              </li>
              <li className="px-4 py-2 hover:bg-gray-100 border-b">
                <Link to="/categories/fashion">Fashion</Link>
              </li>
              <li className="px-4 py-2 hover:bg-gray-100 border-b">
                <Link to="/categories/plumbing">Plumbing</Link>
              </li>
              <li className="px-4 py-2 hover:bg-gray-100">
                <Link to="/categories/beauty">Beauty</Link>
              </li>
            </ul>
          )}
        </li>
        <li><Link to="/offer-service">Offer Services</Link></li>
      </ul>

      {/* Login/Signup */}
      <div className='hidden md:flex gap-5'>
        <Link to="/login"><button className='text-[16px] px-5 py-2 '>Login</button></Link>
        <Link to="/signup"><button className='bg-buttonBlue px-2 py-2 text-white text-[16px] rounded-lg'>Register</button></Link>
      </div>
      <div className="block md:hidden relative">
        <GiHamburgerMenu className=" text-3xl" onClick={() => setShowMenu(true)} />
        <AnimatePresence>
          {
            showMenu && (
              <motion.div
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -50, opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="fixed top-0 left-0 w-full h-[50%] bg-white text-black backdrop-blur-lg z-50 flex flex-col px-6 py-6 shadow-md transition-all duration-300 ease-in-out">
                <div className="flex justify-end">
                  <IoMdClose className="text-3xl cursor-pointer" onClick={() => setShowMenu(false)} />
                </div>
                <ul className="flex flex-col gap-5">
                  <li><a href="/find-services">Find Services</a> </li>
                  <li
                    onClick={() => setShowDropdown((prev) => !prev)}

                    className="flex flex-col  gap-1">
                    <span className="flex gap-1 items-center">
                      Category {showDropdown ? <MdKeyboardArrowUp className="text-xl" /> : <MdKeyboardArrowDown className="text-xl" />}
                    </span>
                    <div>
                      {showDropdown && (
                        <ul className="mt-2  text-black  rounded-md py-2 w-full">
                          <li className="px-4 py-2 hover:bg-gray-100 ">
                            <Link to="/categories/tech" onClick={() => setShowMenu(false)}>Tech</Link>
                          </li>
                          <li className="px-4 py-2 hover:bg-gray-100">
                            <Link to="/categories/fashion" onClick={() => setShowMenu(false)}>Fashion</Link>
                          </li>
                          <li className="px-4 py-2 hover:bg-gray-100">
                            <Link to="/categories/plumbing" onClick={() => setShowMenu(false)}>Plumbing</Link>
                          </li>
                          <li className="px-4 py-2 hover:bg-gray-100">
                            <Link to="/categories/beauty" onClick={() => setShowMenu(false)}>Beauty</Link>
                          </li>
                        </ul>
                      )}
                    </div>
                  </li>
                  <li><a href="/offer-service">Offer Services</a></li>
                </ul>
              </motion.div>
            )
          }
        </AnimatePresence>
      </div>
    </div>
  )
}

export default Navbar