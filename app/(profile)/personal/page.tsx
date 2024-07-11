import { UserDetails } from '@/components/profile/tab-details'
import { Edit, Mail, Phone, Share } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import { CgWebsite } from 'react-icons/cg'
import { GiJoin, GiUpgrade } from 'react-icons/gi'

const Personal = () => {
  return (
    <div className='min-h-[90vh] flex justify-center items-start gap-x-[1.5rem] py-[3rem]'>
     <section className='w-[400px]'>
      <section className='w-full relative h-[10vh] bg-dark-5 flex justify-center'>
        <Image 
          src={"/images/card-image.png"} 
          width={100} 
          height={100} 
          alt='placeholder-profile' 
          className='rounded-full shadow-md absolute transform translate-y-1/2' 
        />
      </section>

      <section className='text-center pt-[7vh]'>
        <h1 className='text-xl font-medium text-dark-5' style={{
          fontFamily: "Anton SC, sans-serif"
        }}>Emmanuel Lothbrok</h1>
        <h1 className='text-muted-foreground font-semibold text-sm' style={{
        fontFamily: "serif"
      }}>
        Joined March 2024
      </h1>

      <section className='flex justify-center gap-x-4 items-center max-w-md mx-auto py-[1.5rem]'>
        <h1 className='flex items-center hover:bg-dark-5 px-3 py-1 rounded-lg hover:text-white transition-all duration-300 ease-in-out hover:-translate-y-1 active:translate-y-1 active:scale-95 cursor-pointer font-bold gap-x-2'>
          <Edit className='mx-1' />
          Edit
        </h1>
        <h1 className='flex items-center hover:bg-dark-5 px-3 py-1 rounded-lg hover:text-white transition-all duration-300 ease-in-out hover:-translate-y-1 active:translate-y-1 active:scale-95 cursor-pointer font-bold gap-x-2'>
          <Share className='mx-1' />
          Share
        </h1>
        <h1 className='flex items-center hover:bg-dark-5 px-3 py-1 rounded-lg hover:text-white transition-all duration-300 ease-in-out hover:-translate-y-1 active:translate-y-1 active:scale-95 cursor-pointer font-bold gap-x-2'>
          <GiUpgrade className='mx-1' />
          Upgrade...
        </h1>
      </section>

      <section>
        <h1 className='text-sm font-bold text-black' style={{
          fontFamily: "Baskervville SC, serif"
        }}>
          I am a versatile full-stack developer with expertise in modern web technologies, including React, Next.js, and Python. Known for enhancing workplace productivity, I have built robust backend systems and responsive designs.
        </h1>
      </section>
      </section>

      <section className='py-[3.5rem]'>
        <h1 className='text-lg font-normal pb-[1.3rem]' style={{
          fontFamily: "Anton SC, sans-serif"
        }}>
          Information
        </h1>
        <main className='flex flex-col gap-y-3'>
          <section className='flex justify-between items-center px-2'>
            <h1 className='flex text-muted-foreground font-medium text-lg  justify-center gap-x-1 items-center' style={{
              fontFamily: "Baskervville SC, serif"
            }}>
              <CgWebsite />
              website
            </h1>

            <h1 className='font-bold text-dark-5 hover:underline transition-all duration-200 ease-in-out hover:translate-x-1 max-w-[18rem] overflow-x-clip line-clamp-2 cursor-pointer active:translate-y-1 active:scale-95'>
              https://best-ngo-2k24.vercel.app/
            </h1>
          </section>
          <section className='flex justify-between items-center px-2'>
            <h1 className='flex text-muted-foreground font-medium text-lg  justify-center gap-x-1 items-center' style={{
              fontFamily: "Baskervville SC, serif"
            }}>
              <Mail />
              mail
            </h1>

            <h1 className='font-bold text-dark-5 hover:underline transition-all duration-200 ease-in-out hover:translate-x-1 max-w-[18rem] overflow-x-clip line-clamp-2 cursor-pointer active:translate-y-1 active:scale-95'>
              aemmanuel685210@gmail.com
            </h1>
          </section>
          <section className='flex justify-between items-center px-2'>
            <h1 className='flex text-muted-foreground font-medium text-lg  justify-center gap-x-1 items-center' style={{
              fontFamily: "Baskervville SC, serif"
            }}>
              <Phone />
              phone
            </h1>

            <h1 className='font-bold text-dark-5 hover:underline transition-all duration-200 ease-in-out hover:translate-x-1 max-w-[18rem] overflow-x-clip line-clamp-2 cursor-pointer active:translate-y-1 active:scale-95'>
              +91 7397336625
            </h1>
          </section>
          <section className='flex justify-between items-center px-2'>
            <h1 className='flex text-muted-foreground font-medium text-lg  justify-center gap-x-1 items-center' style={{
              fontFamily: "Baskervville SC, serif"
            }}>
              <GiJoin />
              Joined
            </h1>

            <h1 className='font-bold text-dark-5 hover:underline transition-all duration-200 ease-in-out hover:translate-x-1 max-w-[18rem] overflow-x-clip line-clamp-2 cursor-pointer active:translate-y-1 active:scale-95'>
              March 2023
            </h1>
          </section>
        </main>
      </section>

      <section className='flex items-center flex-wrap gap-x-3 gap-y-3'>
        <h1 className='border border-dark-5 rounded-lg px-2 py-1' style={{
          fontFamily: "Anton SC, sans-serif"
        }}>UI UX Expert</h1>
        <h1 className='border border-dark-5 rounded-lg px-2 py-1' style={{
          fontFamily: "Anton SC, sans-serif"
        }}>UI UX Expert</h1>
        <h1 className='border border-dark-5 rounded-lg px-2 py-1' style={{
          fontFamily: "Anton SC, sans-serif"
        }}>UI UX Expert</h1>
        <h1 className='border border-dark-5 rounded-lg px-2 py-1' style={{
          fontFamily: "Anton SC, sans-serif"
        }}>UI UX Expert</h1>
      </section>
      
    </section>

      <UserDetails />
    </div>
  )
}

export default Personal