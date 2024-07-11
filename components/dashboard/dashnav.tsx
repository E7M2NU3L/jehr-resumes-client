"use client"

import Link from 'next/link'
import React from 'react'
import { ProfileOpts } from './profileOptions'
import { FaChevronDown, FaTools } from 'react-icons/fa'
import { Notify } from './notifications'
import { Button } from '../ui/button'
import { ChevronDown } from 'lucide-react'
import { Tools } from './tools'

const Dashnav = () => {
    const username = "Emmanuel"
  return (
    <div className='min-h-[10vh] flex justify-between items-center px-[2rem]'>
        <section className='flex items-center gap-x-[5vh]'>
            <h1 className='font-normal text-2xl cursor-pointer text-dark-5 hover:underline transition-all duration-200 ease-in-out' style={{
                fontFamily: "Anton SC, sans-serif"
            }}>
                <Link href={"/"}>
                Scrapeus
                </Link>
            </h1>

            <h1 className='font-bold hidden md:block bg-dark-4 px-3 rounded-lg text-sm text-blue-500 py-1 text-[18px]' style={{
                fontFamily: "serif"
            }}>
                <span className='text-slate-500'>Hi</span> {username}!
            </h1>
        </section>

        <section className='flex items-center gap-x-[1rem]'>
            <Tools />
            <div className='hidden md:block'>
            <Notify  />
            </div>
            <ProfileOpts />
        </section>
    </div>
  )
}

export default Dashnav