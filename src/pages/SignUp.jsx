import React, { useState } from 'react'
import BackgroundImg from "../assets/styled-background-min.jpg"
import MainBackground from "../assets/Background-min.jpg"
import {Link, useNavigate} from "react-router-dom"
import { FiEyeOff } from 'react-icons/fi'
import { BsEye } from 'react-icons/bs'

const SignUp = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        email: "",
        fullname:"",
        password: "",
        role: "User",
    })
    const [showPassword, setShowPassword] = useState(false)
    const [loading,setLoading] = useState(false)

    const handleChange = (e) => {
        setFormData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value
        }))
        console.log(formData);
    }
    const handleRegistration = async (e)=>{
        e.preventDefault();
        setLoading(true)
        const res = await fetch("http://localhost:5000/api/auth/register",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(formData),
            credentials: "true"
        })

        const result = await res.json()
        console.log(result)

        if(res.ok){
            alert("User registered successfully")
            setFormData({
                email: "",
                fullname: "",
                password: "",
                role: "",
            })
            navigate("/login")
        }
    }

    return (
        <div className='flex justify-center items-center h-screen  ' style={{ backgroundImage: `url(${BackgroundImg})` }}>
            <div className='w-[400px] h-[95vh] overflow-y-auto bg-white shadow-md flex mt-5 rounded-md  '>
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
                {/* Form Div */}
                <div className='flex-1 '>
                    <div className=' flex flex-col px-7 py-5'>
                        <h1 className='text-xl md:text-3xl '>Wa<span className='text-logoBlue'>Ṣe</span></h1>
                        <span className='uppercase text-[6px] md:text-[8px] ml-[25px] w-[180px]'>Connecting you to trusted local skills</span>
                    </div>
                    <form className="flex flex-col justify-center items-center px-10">
                        <h1 className="text-2xl">Create an account</h1>

                        <div className="flex flex-col w-full gap-1 mt-5">
                            <label htmlFor="email" className="text-[14px]">Email</label>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="Enter your email"
                                className="rounded-xl py-2 px-3 bg-slate-200 w-full outline-none"
                            />
                        </div>

                        <div className="flex flex-col w-full gap-1 mt-5">
                            <label htmlFor="name" className="text-[14px]">Full Name</label>
                            <input
                                type="text"
                                name="fullname"
                                id="name"
                                value={formData.fullname}
                                onChange={handleChange}
                                placeholder="Enter your Full Name"
                                className="rounded-xl py-2 px-3 bg-slate-200 w-full outline-none text-black"
                            />
                        </div>

                        <div className="flex flex-col w-full gap-1 mt-5">
                            <label htmlFor="role" className="text-[14px]">Role</label>
                            <select
                                name="role"
                                id="role"
                                value={formData.role}
                                onChange={handleChange}
                                className="bg-slate-200 py-2 px-3 rounded-xl outline-none"
                            >
                                <option value="User">User</option>
                                <option value="Provider">Provider</option>
                            </select>
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

                        <button onClick={handleRegistration} disabled={loading}  className="bg-logoBlue text-white w-full mt-10 py-2 rounded-lg ">
                            {
                                loading ? "Loading...." : "Sign up"
                            }
                        </button>
                        <span className='text-[14px] mt-7'>Already have an account? <Link to="/login" className='text-logoBlue'>Sign In</Link></span>
                    </form>
                    
                </div>
            </div>
        </div>
    )
}

export default SignUp