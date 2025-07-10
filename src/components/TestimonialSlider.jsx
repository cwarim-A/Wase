import React, { useEffect, useState } from 'react';
import { FaStar } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

import Customer1 from "../assets/customer1.jpg";
import Customer2 from "../assets/customer2.jpg";
import Customer3 from "../assets/customer3.jpg";
import { GrFormNext, GrFormPrevious } from 'react-icons/gr';

const Testimonials = [
    {
        id: 1,
        name: "Chioma Okafor",
        img: Customer1,
        comment: "Wase made it so easy to find a reliable plumber in my area. The booking process was smooth and the service was excellent!",
        role: "Customer",
        rating: 5
    },
    {
        id: 2,
        name: "Amina Ibrahim",
        img: Customer2,
        comment: "I needed a caterer for a family event with just 2 days notice. Wase helped me find the perfect match who delivered beyond expectations!",
        role: "Customer",
        rating: 4
    },
    {
        id: 3,
        name: "Emeka Nwosu",
        img: Customer3,
        comment: "Since joining Wase, my client base has grown by over 60%. The platform is intuitive and helps me manage my business better.",
        role: "Electrician",
        rating: 5
    }
];

const TestimonialSlider = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const total = Testimonials.length;

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev === total - 1 ? 0 : prev + 1));
        }, 5000);

        return () => clearInterval(interval);
    }, [total]);

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev === 0 ? total - 1 : prev - 1));
    };

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev === total - 1 ? 0 : prev + 1));
    };

    return (
        <section className="py-16 text-center relative px-10 bg-[#F9FAFB]">
            <h2 className="text-2xl md:text-3xl font-bold mb-10">What People Are Saying</h2>

            <div className="flex items-center justify-between">
                <button
                    onClick={prevSlide}
                    className="w-5 h-5 md:w-10 md:h-10 flex items-center justify-center bg-gray-100 rounded-full shadow hover:bg-gray-200"
                >
                    <GrFormPrevious className='text-xl md:text-2xl' />
                </button>

                <div className="relative w-full max-w-xl h-[350px] mx-auto">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={Testimonials[currentIndex].id}
                            initial={{ opacity: 0, x: 40 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -40 }}
                            transition={{ duration: 0.6 }}
                            className="absolute inset-0 bg-white p-8 rounded-lg shadow-lg flex flex-col items-center justify-center"
                        >
                            <img
                                src={Testimonials[currentIndex].img}
                                alt={Testimonials[currentIndex].name}
                                className="w-24 h-24 rounded-full object-cover mb-4"
                            />
                            <div className="flex justify-center gap-1 text-yellow-400 mb-3">
                                {Array.from({ length: Testimonials[currentIndex].rating }).map((_, i) => (
                                    <FaStar key={i} />
                                ))}
                            </div>
                            <p className="text-gray-600 italic mb-4">
                                "{Testimonials[currentIndex].comment}"
                            </p>
                            <h4 className="font-semibold text-lg">{Testimonials[currentIndex].name}</h4>
                            <span className="text-blue-600 text-sm">{Testimonials[currentIndex].role}</span>
                        </motion.div>
                    </AnimatePresence>
                </div>

                <button
                    onClick={nextSlide}
                    className="w-5 h-5 md:w-10 md:h-10 flex items-center justify-center bg-gray-100 rounded-full shadow hover:bg-gray-200"
                >
                    <GrFormNext className='text-xl md:text-2xl' />
                </button>
            </div>

            {/* Dots */}
            <div className="flex justify-center gap-2 mt-6">
                {Testimonials.map((_, index) => (
                    <span
                        key={index}
                        onClick={() => setCurrentIndex(index)}
                        className={`w-3 h-3 rounded-full cursor-pointer ${index === currentIndex ? 'bg-logoBlue' : 'bg-gray-300'}`}
                    ></span>
                ))}
            </div>
        </section>
    );
};

export default TestimonialSlider;
