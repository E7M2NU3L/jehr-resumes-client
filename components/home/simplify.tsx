import React from 'react'
import { Badge } from '../ui/badge'
import { Button } from '../ui/button'
import { CgArrowBottomRightO } from 'react-icons/cg'
import { GiCubeforce } from 'react-icons/gi'

const Simplify = () => {
  return (
    <div className='min-h-screen max-w-7xl mx-auto'>
        <section className='flex justify-between items-center py-[3.5rem] flex-col md:flex-row'>
            <main className=' max-w-2xl'>
                <Badge className='bg-dark-5 text-dark-4 font-bold mb-3' style={{
                    fontFamily: "Baskervville SC, serif"
                }}>
                    Made Easy
                </Badge>
                <h1 className='text-2xl md:text-5xl font-bold text-dark-5' style={{
                    fontFamily: "Anton SC, sans-serif"
                }}>
                Unlock Your Resume's Full Potential
                </h1>
            </main>
            <main className='max-w-2xl'>
                <h1 className='text-lg font-medium text-black' style={{
                    fontFamily: "BAskervville SC, serif"
                }}>
                Our resume designer application automatically scrapes user information from LinkedIn and GitHub, allowing you to effortlessly create or edit your resume. With our inbuilt editor, you can customize your resume to showcase your skills and experience. Additionally, our platform offers CV creation, job search, and application functionalities to help you land your dream job.
                </h1>
            </main>
        </section>
        <section className='flex justify-around items-start gap-x-[1rem] md:flex-row flex-col pt-[3rem]'>
            <main className='max-w-xl'>
                <GiCubeforce className='text-3xl font-bold' />
                <h1 className='text-2xl font-bold md:text-4xl text-dark-5 py-[1.5rem]' style={{
                    fontFamily: "Anton SC, sans-serif"
                }}>
                Scrape LinkedIn and GitHub Data
                </h1>
                <h1 className='text-lg pb-[3.5rem] pt-2 font-bold text-black' style={{
                    fontFamily: "BAskervville SC, serif"
                }}>
                Easily import your professional information from LinkedIn and GitHub to create a comprehensive resume.
                </h1>
                <section className='flex justify-start items-center gap-x-3 pt-[1rem]'>
                    <Button className='' variant={"primary"}>
                        Learn More
                    </Button>
                    <Button variant={"link"} className='flex items-center gap-x-3'>
                        View pricing <CgArrowBottomRightO /> 
                    </Button>
                </section>
            </main>
            <main className='max-w-xl'>
                <GiCubeforce className='text-3xl font-bold' />
                <h1 className='text-2xl font-bold md:text-4xl text-dark-5 py-[1.5rem]' style={{
                    fontFamily: "Anton SC, sans-serif"
                }}>
                Inbuilt Editor for Customization
                </h1>
                <h1 className='text-lg pb-[3.5rem] pt-2 font-bold text-black' style={{
                    fontFamily: "BAskervville SC, serif"
                }}>
                Personalize your resume with our intuitive inbuilt editor, allowing you to tailor it to your specific needs.
                </h1>
            </main>
            <main className='max-w-xl'>
                <GiCubeforce className='text-3xl font-bold' />
                <h1 className='text-2xl font-bold md:text-4xl text-dark-5 py-[1.5rem]' style={{
                    fontFamily: "Anton SC, sans-serif"
                }}>
                Create Professional CVs with custom templates
                </h1>
                <h1 className='text-lg pb-[3.5rem] pt-2 font-bold text-black' style={{
                    fontFamily: "BAskervville SC, serif"
                }}>
                In addition to resumes, our platform supports the creation of professional CVs for a more comprehensive job application.
                </h1>
            </main>
        </section>
    </div>
  )
}

export default Simplify