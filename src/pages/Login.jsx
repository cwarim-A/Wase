import React, { useState } from 'react'
import BackgroundImg from "../assets/styled-background-min.jpg"
import MainBackground from "../assets/Background-min.jpg"
import { Link, useNavigate } from 'react-router-dom'
import { FiEyeOff } from 'react-icons/fi'
import { BsEye } from 'react-icons/bs'

const Login = () => {
    const navigate = useNavigate()
    const [formData, setFormData] = useState({
        email: "",
        password: ""
    })
    const [loading, setLoading] = useState(false)
    const [showPassword, setShowPassword] = useState(false)

    const handleChange = (e) => {

        setFormData((prevFormdata) => {
            return {
                ...prevFormdata,
                [e.target.name]: e.target.value
            }
        })

    }

    const handleLogin = async (e) => {
        e.preventDefault();
        setLoading(true)
        const res = await fetch("http://localhost:5000/api/auth/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        })

        const result = await res.json();
        console.log(result)

        setLoading(false)
        if (res.ok) {
            alert("Login successful")
            localStorage.setItem("token", result.token)
            setFormData({
                email: "",
                password: ""
            })
            navigate("/")
        } else {
            alert(result.msg)
        }
    }




    return (
        <div className='flex justify-center items-center h-[100vh]  ' style={{ backgroundImage: `url(${BackgroundImg})` }}>
            <div className='w-[400px] h-[80vh] bg-white shadow-md flex mt-20 rounded-md '>
                {/* Form Div */}
                <form className='flex-1 '>
                    <div className=' flex flex-col px-5 py-5'>
                        <h1 className='text-xl md:text-3xl '>Wa<span className='text-logoBlue'>Ṣe</span></h1>
                        <span className='uppercase text-[6px] md:text-[8px] ml-[25px] w-[180px]'>Connecting you to trusted local skills</span>
                    </div>
                    <div className='flex flex-col justify-center items-center mt-5 px-10'>
                        <h1 className='text-2xl'>Welcome back</h1>
                        <span className='text-[12px] py-1 text-gray-600'>Sign in with social account or enter your details</span>
                        <div className='flex flex-col w-full  gap-1 mt-5 '>
                            <label htmlFor='email' className='block  text-[14px]'>Email</label>
                            <input type="email" name="email" id="email" value={formData.email} placeholder='Enter your email' onChange={handleChange} className=' rounded-xl py-2 px-3 bg-slate-200 w-[100%] outline-none' />
                        </div>
                        <div className="flex flex-col w-full gap-1 mt-5">
                            <label htmlFor="password" className="text-[14px]">Password</label>
                            <div className='flex bg-slate-200 px-2 rounded-xl'>
                                <input
                                    type={showPassword ? "text" : "password"}
                                    name="password"
                                    id="password"
                                    value={formData.password}
                                    onChange={handleChange}
                                    placeholder="Enter your password"
                                    className="  py-2 px-3 bg-slate-200  w-full outline-none"
                                />
                                <button
                                    type='button'
                                    onClick={() => setShowPassword(!showPassword)}
                                    className='outline-none'>
                                    {showPassword ? (
                                        <FiEyeOff className="h-5 w-5" />
                                    ) : (
                                        <BsEye className="h-5 w-5" />
                                    )}
                                </button>
                            </div>
                        </div>
                        <div className='flex items-center justify-between w-full  text-[14px] py-2'>
                            <span className='flex items-center gap-2'>
                                <input type="checkbox" name="" id="remember" />
                                <label htmlFor='remember'>Remember me</label>
                            </span>
                            <span className='underline cursor-pointer'>
                                Forgot Password?
                            </span>
                        </div>
                        <button disabled={loading} type='submit' onClick={handleLogin} className='bg-logoBlue text-white w-full mt-5 py-2 rounded-md '>
                            {loading ? 'Logging in...' : 'Log In'}
                        </button>
                        <span className='text-[14px] mt-7'>Don't have an account? <Link to="/signup" className='text-logoBlue'>Sign Up</Link></span>
                    </div>

                </form>
                {/* Image Div */}
                {/* <div className='relative flex-1 bg-cover bg-center text-white  flex items-end' style={{ backgroundImage: `url(${MainBackground})` }}>
                    <div className='absolute inset-0 bg-black/40'></div>

                    <div className='absolute z-10 flex flex-col gap-2 px-10 py-10'>
                        <div className=' bg-white/60  backdrop-blur-lg py-1 w-[90%] px-5 rounded-2xl flex items-center gap-3 mb-3'>
                            <div className='flex -space-x-2'>
                                <img className="w-8 h-8 rounded-full border-2 border-white" src="https://i.ibb.co/svmVwSd7/plumber.png" alt="Traveler 1" />
                                <img className="w-8 h-8 rounded-full border-2 border-white" src="https://i.ibb.co/SD8KNFvR/expert-plumber.png" alt="Traveler 2" />
                                <img className="w-8 h-8 rounded-full border-2 border-white" src="https://i.ibb.co/KjcMFbSN/Fashion.png" alt="Traveler 3" />
                            </div>
                            <span className='text-[14px]'>Trusted by 500 Users</span>
                        </div>
                        <span className='text-3xl font-bold'>
                            Find Skilled Professionals in Nigeria
                        </span>
                        <span className='text-[12px]'>
                            Connect with trusted local service providers for all your needs  from home repairs to event planning.
                        </span>
                    </div>
                </div> */}
            </div>
        </div>
    )
}

export default Login