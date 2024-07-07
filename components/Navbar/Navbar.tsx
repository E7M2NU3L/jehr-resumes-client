"use client"

import Image from 'next/image'
import React, { useState } from 'react'
import Link from 'next/link'
import { Button } from '../ui/button'
import {NavDrawer} from './navdrawer'
import { More } from './navmore'

const Navbar = () => {
    const [isLoggedin, setIsLoggedin] = useState<boolean>(false);

  return (
    <main className='flex justify-between items-center w-full h-[10vh] px-4 py-1 z-10'>
        <div className='flex justify-center items-center gap-x-1 hover:scale-105 hover:translate-x-1 transition-all duration-300 ease-in-out py-3'>
            <Link href={"/"}>
            <Image src={"/images/web-app-logo.png"} width={42} height={42} alt='app-logo' className=' rounded-full shadow-dark-2 shadow-lg  hover:shadow-lg hover:shadow-dark-5 transition-all duration-300 ease-in-out'/>
            <h1 className='font-normal hidden md:block text-lg' style={{
                fontFamily: "Anton SC, sans-serif",
            }}>
                Scrapo
            </h1>
            </Link>
        </div>
        
        <ul className='md:flex hidden justify-around items-center'> 
                <li className='text-dark-5 hover:shadow-md hover:shadow-dark-5 px-5 py-1 hover:border hover:border-dark-5 rounded-lg transition-all duration-200 ease-in-out' style={{
                    fontFamily: "Baskervville SC, serif",
                    fontWeight: 700,
                    fontSize: "1rem"
                }}>
                    <Link href="/resume-builder" >
                        Resume Builder
                    </Link>
                </li>
                <li className='text-dark-5 hover:shadow-md hover:shadow-dark-5 px-5 py-1 hover:border hover:border-dark-5 rounded-lg transition-all duration-200 ease-in-out' style={{
                    fontFamily: "Baskervville SC, serif",
                    fontWeight: 700,
                    fontSize: "1rem"
                }}>
                    <Link href="/templates" >
                        Templates
                    </Link>
                </li>
                <li className='text-dark-5 hover:shadow-md hover:shadow-dark-5 px-5 py-1 hover:border hover:border-dark-5 rounded-lg transition-all duration-200 ease-in-out' style={{
                    fontFamily: "Baskervville SC, serif",
                    fontWeight: 700,
                    fontSize: "1rem"
                }}>
                    <Link href="/jobs" >
                        Jobs
                    </Link>
                </li>
                <li className='text-dark-5 hover:shadow-md hover:shadow-dark-5 px-5 py-1 hover:border hover:border-dark-5 rounded-lg transition-all duration-200 ease-in-out' style={{
                    fontFamily: "Baskervville SC, serif",
                    fontWeight: 700,
                    fontSize: "1rem"
                }}>
                    <Link href={"/pricing"}>
                    pricing
                    </Link>
                </li>
        </ul>

        {isLoggedin ? (
            <>
                <div className='justify-center items-center hidden md:flex gap-x-3'>
                    <Button variant={"outline"}>
                        <Link href="/sign-up">
                            Sign-up
                        </Link>
                    </Button>
                    <Button className='' variant={"default"}>
                        <Link href={"/sign-in"}>
                            Login
                        </Link>
                    </Button>
                </div>
            </>
        ) : (
            <>
            <div className='justify-center items-center hidden md:flex gap-x-3'>
                <Button variant={"primary"}>
                    <Link href="/dash">
                        Dashboard
                    </Link>
                </Button>
                <Button variant={"destructive"}>
                    Logout
                </Button>
            </div>
            </>
        )}

        <div className='md:hidden block'>
            <NavDrawer />
        </div>
    </main>
  )
}

export default Navbar