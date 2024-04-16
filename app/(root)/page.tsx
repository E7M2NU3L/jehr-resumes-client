import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'
import MainImage from '../../public/images/hero-logo-main.png';
import PersonImage from '../../public/images/Hero-image1.png';
import SideImage from '../../public/images/main-bg-hero.png';

const Home = () => {
  return (
    <>
      <main className='flex justify-around items-center min-h-[90vh] min-w-screen w-full bg-gradient-to-tr from-[#C1D3FE] to-[#D7E3FC] relative'>
        <section className='flex flex-col max-w-[30vh] gap-y-[1rem] z-100'>
          <h1 className='text-3xl font-semibold'>
          Crafting Your Career Story: Elevate Your Resume with <span className='text-[#496BD6] font-bold'>JEHR-RESUMES</span>
          </h1>
          <h4 className='text-md font-normal'>
          Harnessing Data from LinkedIn, Portfolio, and GitHub URLs to Generate Customized Resumes and CVs. Let Automation Redefine Your Professional Profile!
          </h4>
          <Button className='bg-[#121D53] text-[#CEDDFE] rounded-lg w-[40%]'>
            Explore
          </Button>
        </section>

        <section className='relative'>
          <Image src={MainImage} alt='hero-resume' className='relative z-10' />
          <Image src={PersonImage}alt='person-in-desk' className='absolute -top-[7rem] -left-[7rem] shadow-sm rounded-full z-10' />
        </section>
      </main>
      <Image src={SideImage} alt='SideImage' className='absolute inset-0 -z-10 right-0 bottom-0 w-full max-h-[90vh]' />

      <section className='absolute backdrop:blur-lg bottom-0 w-full min-h-[7vh] bg-[#D7E3FC] flex justify-center items-center'>
        <h1 className='text-xl text=[#121D53] text-center'>
        Build your own grabbing resumes today!!
        </h1>
      </section>

      <section className=''>
        <h1 className='text-center flex justify-center items-center h-full w-full text-[#121D53] text-3xl'>
            Offered Features
        </h1>

        <div className='flex justify-around items-centerw-[80%] mx-auto'>
          <div className="bg-[#B6CCFE] px-[2rem] py-[1rem]">
            <h1 className='text-[2xl] text-[#121D53] font-semibold'>
            Tailored Resumes & CVs
            </h1>
            <p className='text-[#121D53] font-normal'>
            Craft personalized resumes and CVs effortlessly by leveraging your GitHub, LinkedIn, and portfolio URLs. Let your profile data speak for you.
            </p>
            <Button className='bg-[#121D53] text-[#CEDDFE]'>
            Create Your Profile
            </Button>
          </div>
          <div className="bg-[#121D53] px-[2rem] py-[1rem]">
            <h1 className='text-[2xl] text-[#CEDDFE] font-semibold'>
            Job Search Simplified
            </h1>
            <p className='text-[#CEDDFE] font-normal'>
            Explore a multitude of job opportunities aggregated from various platforms. Find your dream job with ease and precision.
            </p>
            <Button className='bg-[#CEDDFE] text-[#121D53]'>
            Discover Jobs
            </Button>
          </div>
          <div className="bg-[#B6CCFE] px-[2rem] py-[1rem]">
            <h1 className='text-[2xl] text-[#121D53] font-semibold'>
            Skill Growth & Development
            </h1>
            <p className='text-[#121D53] font-normal'>
            Empower your career with curated courses sourced from leading platforms. Enhance your skills and stay ahead in your professional journey.
            </p>
            <Button className='bg-[#121D53] text-[#CEDDFE]'>
            Explore Courses
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home