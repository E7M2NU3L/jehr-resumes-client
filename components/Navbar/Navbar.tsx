import Image from 'next/image'
import React from 'react'
import Applogo from '../../public/images/app-logo.png'
import Link from 'next/link'
import { Button } from '../ui/button'

const Navbar = () => {
  return (
    <main className='flex justify-between items-center w-full h-[102px] bg-dark-1 px-4 py-1'>
        <div className='flex justify-center items-center gap-x-3'>
            <Image src={Applogo} alt='app-logo' className='w-14 h-14 rounded-full shadow-dark-2 shadow-lg hover:scale-105 hover:translate-x-1 hover:shadow-lg hover:shadow-dark-5 transition-all duration-300 ease-in-out'/>
            <h1 className='font-bold hover:translate-x-2 hover:scale-110 hover:mr-3 transition-all duration-300 ease-in-out'>
                JEHR-RESUMES
            </h1>
        </div>
        
        <ul className='flex justify-around items-center gap-x-[1.5rem]'> 
                <li className='hover:bg-dark-5 hover:text-dark-1 hover:px-3 hover:py-1 hover:scale-110 hover:translate-x-1 transition-all duration-300 ease-in-out hover:rounded-md hover:ml-2 hover:shadow-md hover:shadow-dark-3'>
                    <Link href="/api/v1/resumes" >
                        Resumes
                    </Link>
                </li>
                <li className='hover:bg-dark-5 hover:text-dark-1 hover:px-3 hover:py-1 hover:scale-110 hover:translate-x-1 transition-all duration-300 ease-in-out hover:rounded-md hover:ml-2 hover:shadow-md hover:shadow-dark-3'>
                    <Link href="/api/v1/cv" >
                        CV
                    </Link>
                </li>
                <li className='hover:bg-dark-5 hover:text-dark-1 hover:px-3 hover:py-1 hover:scale-110 hover:translate-x-1 transition-all duration-300 ease-in-out hover:rounded-md hover:ml-2 hover:shadow-md hover:shadow-dark-3'>
                    <Link href="/api/v1/jobs" >
                        Jobs
                    </Link>
                </li>
                <li className='hover:bg-dark-5 hover:text-dark-1 hover:px-3 hover:py-1 hover:scale-110 hover:translate-x-1 transition-all duration-300 ease-in-out hover:rounded-md hover:ml-2 hover:shadow-md hover:shadow-dark-3'>
                    <Link href="/api/v1/skills" >
                        Skills
                    </Link>
                </li>
        </ul>

        <div className='justify-center items-center flex gap-x-3'>
            <h1 className='hover:font-semibold transition-all duration-300 ease-in-out'>
                <Link href="/auth/sign-up">
                    Sign-up
                </Link>
            </h1>
            <Button className='bg-dark-5 hover:-translate-x-1 hover:scale-110 hover:mr-3 transition-all duration-300 ease-in-out'>
                <Link href="/auth/login">
                    Login
                </Link>
            </Button>
        </div>
    </main>
  )
}

export default Navbar