import React from 'react'
import HeroSection from './HeroSection'
import HowItWorks from './HowItWorks'
import PopularCategories from './PopularCategories'
import TopProviders from './TopProviders'
import TestimonialSlider from './TestimonialSlider'
import ActionPage from './ActionPage'
import Footer from "./Footer"

const Homepage = () => {
  return (
    <>
    <HeroSection/>
    <HowItWorks/>
    <PopularCategories/>
    <TopProviders/>
    <TestimonialSlider/>
    <ActionPage/>
    <Footer/>
    </>
  )
}

export default Homepage