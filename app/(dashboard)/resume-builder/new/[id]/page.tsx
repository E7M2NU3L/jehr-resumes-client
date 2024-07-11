"use client"

import { useAppDispatch, useAppSelector } from '@/store/store';
import { Book, Edit, GalleryHorizontal, Upload } from 'lucide-react'
import React from 'react'

const BlankResume = () => {
  const dispatch = useAppDispatch();
  const sidebarState = useAppSelector((state) => state.resume);

  console.log(sidebarState);
  return (
    <div className='min-h-[90vh] flex items-center'>
      <section className='w-[10%] flex flex-col justify-center items-center md:w-[5%] h-[90vh] bg-dark-5'>
        <main className='flex-flex-col gap-y-[2rem] justify-around items-center'>
          <section className='flex text-sm text-dark-4 font-light flex-col gap-y-1 items-center px-2 py-2 hover:bg-gradient-to-tr hover:from-blue-400 hover:via-sky-400 hover:to-blue-400 rounded-full hover:-translate-y-1 hover:scale-105 active:scale-95 active:translate-y-1 transition-all ease-in-out duration-200 cursor-pointer hover:text-dark-5 hover:shadow-lg' style={{
            fontFamily: "Anton SC, sans-serif"
          }}>
            <Edit />
            <span className='hidden md:block'>
              Modify
            </span>
          </section>
          <section className='flex text-sm text-dark-4 font-light flex-col gap-y-1 items-center px-2 py-2 hover:bg-gradient-to-tr hover:from-blue-400 hover:via-sky-400 hover:to-blue-400 rounded-full hover:-translate-y-1 hover:scale-105 active:scale-95 active:translate-y-1 transition-all ease-in-out duration-200 cursor-pointer hover:text-dark-5 hover:shadow-lg' style={{
            fontFamily: "Anton SC, sans-serif"
          }}>
            <Upload />
            <span className='hidden md:block'>
              Upload
            </span>
          </section>
          <section className='flex text-sm text-dark-4 font-light flex-col gap-y-1 items-center px-2 py-2 hover:bg-gradient-to-tr hover:from-blue-400 hover:via-sky-400 hover:to-blue-400 rounded-full hover:-translate-y-1 hover:scale-105 active:scale-95 active:translate-y-1 transition-all ease-in-out duration-200 cursor-pointer hover:text-dark-5 hover:shadow-lg' style={{
            fontFamily: "Anton SC, sans-serif"
          }}>
            <GalleryHorizontal />
            <span className='hidden md:block'>
              Templates
            </span>
          </section>
          <section className='flex text-sm text-dark-4 font-light flex-col gap-y-1 items-center px-2 py-2 hover:bg-gradient-to-tr hover:from-blue-400 hover:via-sky-400 hover:to-blue-400 rounded-full hover:-translate-y-1 hover:scale-105 active:scale-95 active:translate-y-1 transition-all ease-in-out duration-200 cursor-pointer hover:text-dark-5 hover:shadow-lg' style={{
            fontFamily: "Anton SC, sans-serif"
          }}>
            <Book />
            <span className='hidden md:block'>
              Fillers
            </span>
          </section>
        </main>
      </section>
      <section className='md:w-[15%] hidden md:flex h-[90vh] border-x-2'></section>
      <section className='w-[90%] md:w-[60%] h-[90vh] bg-slate-100'>

      </section>
      <section className='md:w-[20%] md:flex hidden h-[90vh] bg-dark-4/20 border-l-2'>

      </section>
    </div>
  )
}

export default BlankResume