import Image from 'next/image'
import React from 'react'
import { Button } from '../ui/button'
import { CgBolt } from 'react-icons/cg'

const Marketing = () => {
  return (
    <div className='flex min-h-[90vh] justify-around max-w-7xl items-center mx-auto md:flex-row flex-col px-[2rem] md:px-0 pb-[4rem] md:pb-0'>
         <section className='max-w-xl'>
            <h1 className='text-black text-lg pb-2' style={{
                fontFamily: "Baskervville, serif"
            }}>
                simplify
            </h1>
            <h1 className='text-2xl md:text-4xl font-bold text-black mb-[2rem]' style={{
                fontFamily: "Anton SC, serif"
            }}>
            Discover Unique Resume Templates to Showcase Your Skills and Experience
            </h1>
            <h1 className='font-bold mb-[2.7rem] text-lg text-black' style={{
                fontFamily: "Baskervville SC, sans-serif"
            }}>
            Our application offers a wide range of custom resume templates designed to impress employers and highlight your qualifications. Choose from various styles and layouts to create a professional and eye-catching resume.
            </h1>

            <section className='flex flex-col gap-y-3'>
                <main className='flex gap-x-3 items-center'>
                    <CgBolt className='text-2xl' />
                    <h1 className='font-medium text-lg text-black' style={{
                        fontFamily: "Baskervville SC, serif"
                    }}>
                    Modern and Stylish Designs
                    </h1>
                </main>
                <main className='flex gap-x-3 items-center'>
                    <CgBolt className='text-2xl' />
                    <h1 className='font-medium text-lg text-black' style={{
                        fontFamily: "Baskervville SC, serif"
                    }}>
                    Creative and Attention-Grabbing Formats
                    </h1>
                </main>
                <main className='flex gap-x-3 items-center'>
                    <CgBolt className='text-2xl' />
                    <h1 className='font-medium text-lg text-black' style={{
                        fontFamily: "Baskervville SC, serif"
                    }}>
                    Professional and Elegant Templates
                    </h1>
                </main>
            </section>

            <section className='my-[2rem] flex justify-start items-start gap-x-[1rem]'>
                <Button className='' variant={"primary"}>
                    Sign up
                </Button>
                <Button className='' variant={"link"}>
                    Learn More {">"}
                </Button>
            </section>
        </section>
        <section>
            <Image src={"/images/card-image.png"} alt='' width={500} height={500} />
        </section>
    </div>
  )
}

export default Marketing