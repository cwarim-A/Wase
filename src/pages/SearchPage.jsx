
import Navbar from '../components/Navbar'
import MainBackground from "../assets/Background-min.jpg"
import { CiSearch } from 'react-icons/ci'
import { MdOutlineLocationOn } from 'react-icons/md'
import { FaStar } from 'react-icons/fa'
import { IoLocationOutline } from 'react-icons/io5'
import { LuEye } from 'react-icons/lu'
import Footer from '../components/Footer'



const TopRatedProviders = [
    {
        id: 1,
        name: "David Adeyemi",
        job: "Expert Plumber",
        desc: "Specializing in leak repairs, installations, and bathroom renovations.",
        location: "Ikeja, Lagos",
        price: "₦5000",
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






const SearchPage = () => {
    const stars = Array(5).fill(0);
    return (
        <>
            <Navbar />
            <div className="h-[50vh] bg-cover bg-center bg-no-repeat relative " style={{ backgroundImage: `url(${MainBackground})` }}>
                <div className="absolute inset-0 bg-black/80"></div>
                <div className='relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-6'>
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
                </div>
            </div>
            <div className='flex items-center flex-col  px-5  md:flex-row md:px-10 gap-5 bg-[#F9FAFB]  py-10 '>
                <div className='bg-white shadow-lg h-auto w-full md:w-[30%] px-5 py-5 rounded-sm '>
                    <div className='flex justify-between '>
                        <span className='font-bold'>Filters</span>
                        <button className='text-blue-600 text-[14px]'>Reset All</button>
                    </div>
                    <div className='flex flex-col gap-3 py-10'>
                        <span className='font-bold'>Category</span>
                        <select name="categories" className=' border p-2 rounded-md outline-none'>
                            <option value="plumber">Plumber</option>
                            <option value="electrical-engineer"> Electrical Engineer</option>
                            <option value="fashion-designer">Fashion Designer</option>
                            <option value="teachers">Teachers</option>
                            <option value="beauty">Beauty</option>
                        </select>
                    </div>
                    <div className='flex flex-col gap-5'>
                        <span className='font-bold'>Location</span> 
                        <div className='flex flex-col gap-3'>
                            <span className='flex items-center gap-2'>
                                <input type="checkbox" name="lagos" />
                                <label>Lagos</label>
                            </span>
                            <span className='flex items-center gap-2'>
                                <input type="checkbox" name="abuja" />
                                <label>Abuja</label>
                            </span>
                            <span className='flex items-center gap-2'>
                                <input type="checkbox" name="port-harcourt" />
                                <label>Port Harcourt</label>
                            </span>
                            <span className='flex items-center gap-2'>
                                <input type="checkbox" name="ibadan" />
                                <label>Ibadan</label>
                            </span>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col w-full items-center justify-between'>
                    <div className='flex items-center justify-between w-full bg-white shadow-md rounded-md px-2 py-2'>
                        <p className='text-[12px]  md:text-[16px] text-gray-500'>Showing 6 results for "Plumber" in Lagos</p>
                        <div className='flex  items-center gap-2'>
                            <p className='text-[12px] md:text-[18px]'>Sort by:</p>
                            <select name="" className='border p-2' >
                                <option value="best-match">Best Match</option>
                                <option value="highest-rated">Highest rated</option>
                                <option value="lowest-price"> Lowest Price</option>
                                <option value="most-reviews">Most Reviews</option>
                            </select>
                        </div>
                    </div>
                    <div className='grid grid-cols-1 md:grid-cols-3 gap-10 py-10'>
                        {
                            TopRatedProviders.map((provider) => (
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
                </div>
            </div>
            <Footer />
        </>
    )
}

export default SearchPage