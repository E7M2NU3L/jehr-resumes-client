import Image from 'next/image'
import React from 'react'
import { Button } from '../ui/button'
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa'
import { Separator } from '../ui/separator'

const Footer = () => {
  const fullYear = new Date().getFullYear();

  return (
    <div className=' max-w-7xl mx-auto'>
      <section className='flex justify-between items-center px-[1rem] py-[3rem] flex-col gap-y-[1rem] md:px-0 md:flex-row'>
        <Image src={"/images/app-logo.png"} alt='app-navigator' width={62} height={62} className='rounded-full' />

        <section className='flex items-center flex-wrap gap-x-1 md:gap-x-3'>
          <Button variant={"link"} className='font-bold' style={{
            fontFamily: "Baskervville SC, serif"
          }}>
            Resume Designer
          </Button>
          <Button variant={"link"} className='font-bold' style={{
            fontFamily: "Baskervville SC, serif"
          }}>
            Jobs Search
          </Button>
          <Button variant={"link"} className='font-bold' style={{
            fontFamily: "Baskervville SC, serif"
          }}>
            About us
          </Button>
          <Button variant={"link"} className='font-bold' style={{
            fontFamily: "Baskervville SC, serif"
          }}>
            FAQs
          </Button>
          <Button variant={"link"} className='font-bold' style={{
            fontFamily: "Baskervville SC, serif"
          }}>
            
            Contact us
          </Button>
        </section>
        
        <section className='flex items-center gap-x-3 text-2xl'>
          <FaFacebook />
          <FaInstagram />
          <FaLinkedin />
          <FaTwitter />
          <FaYoutube />  
        </section>
      </section>
      
      <Separator className='bg-dark-5 px-[1rem]' />

      <section className='py-[2rem] flex flex-wrap justify-center items-center gap-x-2'>
          <Button variant={"link"} size={"sm"}>
            {fullYear} Scrapeus.,  &copy; all rights reserved
          </Button>
          <Button className='' variant={"link"} size={"sm"}>privacy policy</Button>
          <Button className='' variant={"link"} size={"sm"}>terms & conditions</Button>
          <Button className='' variant={"link"} size={"sm"}>cookie policy</Button>
      </section>
    </div>
  )
}

export default Footer