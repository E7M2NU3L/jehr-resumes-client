"use client"

import Image from 'next/image'
import React from 'react'
import {motion} from 'framer-motion'
import { Button } from '../ui/button'

const Hero = () => {
  return (
    <>
        <section className='min-h-[90vh] flex justify-center items-center'>
     <main className="flex group flex-col lg:flex-row justify-between mx-[2rem] items-center relative p-4 max-w-[90rem] lg:min-w-[90rem] gap-y-[4rem] md:gap-y-0 border-0 md:border hover:border hover:border-dark-5 rounded-lg transition-all ease-in-out duration-300">
        <motion.section
          initial={{ opacity: 0, x: -50 }} 
          animate={{ opacity: 1, x: 0 }} 
          transition={{ duration: 0.8 }}
          className="flex flex-col px-[2rem] md:px-0 max-w-xl p-4 lg:px-[2rem] group-hover:translate-y-4 transition-transform duration-200 ease-in-out"
        >
          <h1 className="text-md lg:text-lg font-semibold md:text-left text-center" style={{
            fontFamily: "Baskervville SC, serif"
          }}>
            Effortless Resume Creation
          </h1>
          <h4 className="text-2xl md:text-5xl lg:text-md font-extrabold text-center lg:text-left mb-4" style={{
            fontFamily: "Anton SC, serif"
          }}>
            Craft standout resumes from LinkedIn and GitHub profiles.
          </h4>
          <h4 className="text-md md:text-xl lg:text-md font-normal text-center lg:text-left mb-5" style={{
            fontFamily: "Baskervville SC, serif"
          }}>
            Seamlessly transform your LinkedIn and GitHub information into polished resumes. Choose from professional templates, use our built-in editor, and streamline your job search.
          </h4>
         <section className='flex items-center gap-x-3 justify-center md:justify-start'>
         <Button className="w-[30%]" style={{
            fontFamily: "Anton SC, sans-serif"
          }}>
            Get Started
          </Button>
          <Button variant={"link"}>
            Learn More
          </Button>
         </section>
        </motion.section>

       <motion.section className='flex items-center group-hover:-translate-x-4 transition-transform duration-200 ease-in-out'>
       <motion.section 
          initial={{ opacity: 0, scale: 0.8 }} 
          animate={{ opacity: 1, scale: 1 }} 
          transition={{ duration: 0.8 }}
          className="relative mt-8 lg:mt-0"
        >
          <img src={"/images/hero (2).png"} alt="hero-resume" className="relative z-10 w-[50vh] scale-125 md:scale-100" />
          <img src={"/images/hero (1).png"} alt="person-in-desk" className="absolute -top-32 -left-36 shadow-sm rounded-full w-[60vh] scale-125 md:scale-100 z-10" />
          <img src={"/images/hero (3).png"} alt="person-in-desk" className="absolute -bottom-32 -left-36 shadow-sm rounded-full w-[60vh] scale-110 md:scale-100 z-10" />
        </motion.section>

        <motion.section 
          initial={{ opacity: 0, scale: 0.8 }} 
          animate={{ opacity: 1, scale: 1 }} 
          transition={{ duration: 0.8 }}
          className="relative mt-8 lg:mt-0"
        >
          <Image src={"/images/hero (4).png"} alt="hero-resume" className="relative z-10" width={300} height={400} />
        </motion.section>
       </motion.section>
      </main>
     </section>
    </>
  )
}

export default Hero