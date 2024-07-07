import { Star, StarOff } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import { FaStar } from 'react-icons/fa'

const Testimonials = () => {
  return (
    <main className=''>
        <div className='min-h-[90vh] py-[3rem] flex flex-col max-w-7xl mx-auto'>
        <main className='flex flex-col px-[1.5rem] md:px-0'>
            <h1 className='text-2xl md:text-4xl font-bold mb-3' style={{
                fontFamily: "Anton SC, serif"
            }}>
            Happy Customers
            </h1>
            <h1 className='font-medium text-lg' style={{
                fontFamily: "Baskervville, serif"
            }}>
            Read what our customers have to say about us
            </h1>
        </main>
        <main className='flex justify-around items-center gap-x-[5rem] mt-[1.8rem] w-full flex-col md:flex-row gap-y-[3rem] md:gap-y-0 px-[2rem] md:px-0'>
            <section className='flex flex-col'>
                <section className='flex items-center justify-start gap-x-0 mb-[1.6rem]'>
                   <FaStar />
                   <FaStar />
                   <FaStar />
                   <FaStar />
                   <FaStar />
                </section>
                <h1 className='text-2xl font-bold pb-[2rem]' style={{
                    fontFamily: "Baskervville Sc, serif"
                }} >
                Our experience with the resume designer application has been amazing. It saved us so much time and effort!
                </h1>
                <section className='flex items-center gap-x-[3rem]'>
                <main className='flex justify-around items-center gap-x-3'>
                    <Image src={"/images/hero (2).png"} alt='placeholder' width={32} height={32} className='rounded-lg' />
                    <section>
                    <h1 className='text-lg font-bold' style={{
                        fontFamily: "Baskervville, serif"
                    }}>
                        John Doe
                    </h1>
                    <h1 className='font-medium' style={{
                        fontFamily: "Baskervville, serif"
                    }}>
                        HR Manager, ABC Company
                    </h1>
                    </section>
                </main>

                <section className='flex items-center gap-x-3'>
                <div className='h-[5vh] w-1 bg-black'></div>
                <div className='flex'>
                    <Image src={"/images/web-app-logo.png"} alt='placeholder' width={34} height={34} className='rounded-full' />
                    <h1 className='text-lg font-bold'>
                        Zenexa
                    </h1>
                </div>
                </section>
                </section>
            </section>
            <section className='flex flex-col'>
                <section className='flex items-center justify-start gap-x-0 mb-[1.4rem]'>
                   <FaStar />
                   <FaStar />
                   <FaStar />
                   <FaStar />
                   <FaStar />
                </section>
                <h1 className='text-2xl font-bold pb-[2rem]' style={{
                    fontFamily: "Baskervville Sc, serif"
                }} >
                I couldnt believe how easy it was to create a professional resume using this application. It saved me so much time and effort!
                </h1>
                <section className='flex items-center gap-x-[3rem]'>
                <main className='flex justify-around items-center gap-x-3'>
                    <Image src={"/images/hero (2).png"} alt='placeholder' width={32} height={32} className='rounded-lg' />
                    <section>
                    <h1 className='text-lg font-bold' style={{
                        fontFamily: "Baskervville, serif"
                    }}>
                        John Doe
                    </h1>
                    <h1 className='font-medium' style={{
                        fontFamily: "Baskervville, serif"
                    }}>
                        HR Manager, ABC Company
                    </h1>
                    </section>
                </main>

                <section className='flex items-center gap-x-3'>
                <div className='h-[5vh] w-1 bg-black'></div>
                <div className='flex'>
                    <Image src={"/images/web-app-logo.png"} alt='placeholder' width={34} height={34} className='rounded-full' />
                    <h1 className='text-lg font-bold'>
                        Zenexa
                    </h1>
                </div>
                </section>
                </section>
            </section>
           
        </main>
        <main className='flex justify-around items-center gap-x-[5rem] mt-[4rem] w-full flex-col md:flex-row gap-y-[3rem] md:gap-y-0 px-[2rem] md:px-0'>
            <section className='flex flex-col'>
                <section className='flex items-center justify-start gap-x-0 mb-[1.6rem]'>
                   <FaStar />
                   <FaStar />
                   <FaStar />
                   <FaStar />
                   <FaStar />
                </section>
                <h1 className='text-2xl font-bold pb-[2rem]' style={{
                    fontFamily: "Baskervville Sc, serif"
                }} >
                Our experience with the resume designer application has been amazing. It saved us so much time and effort!
                </h1>
                <section className='flex items-center gap-x-[3rem]'>
                <main className='flex justify-around items-center gap-x-3'>
                    <Image src={"/images/hero (2).png"} alt='placeholder' width={32} height={32} className='rounded-lg' />
                    <section>
                    <h1 className='text-lg font-bold' style={{
                        fontFamily: "Baskervville, serif"
                    }}>
                        John Doe
                    </h1>
                    <h1 className='font-medium' style={{
                        fontFamily: "Baskervville, serif"
                    }}>
                        HR Manager, ABC Company
                    </h1>
                    </section>
                </main>

                <section className='flex items-center gap-x-3'>
                <div className='h-[5vh] w-1 bg-black'></div>
                <div className='flex'>
                    <Image src={"/images/web-app-logo.png"} alt='placeholder' width={34} height={34} className='rounded-full' />
                    <h1 className='text-lg font-bold'>
                        Zenexa
                    </h1>
                </div>
                </section>
                </section>
            </section>
            <section className='flex flex-col'>
                <section className='flex items-center justify-start gap-x-0 mb-[1.4rem]'>
                   <FaStar />
                   <FaStar />
                   <FaStar />
                   <FaStar />
                   <FaStar />
                </section>
                <h1 className='text-2xl font-bold pb-[2rem]' style={{
                    fontFamily: "Baskervville Sc, serif"
                }} >
                I couldnt believe how easy it was to create a professional resume using this application. It saved me so much time and effort!
                </h1>
                <section className='flex items-center gap-x-[3rem]'>
                <main className='flex justify-around items-center gap-x-3'>
                    <Image src={"/images/hero (2).png"} alt='placeholder' width={32} height={32} className='rounded-lg' />
                    <section>
                    <h1 className='text-lg font-bold' style={{
                        fontFamily: "Baskervville, serif"
                    }}>
                        John Doe
                    </h1>
                    <h1 className='font-medium' style={{
                        fontFamily: "Baskervville, serif"
                    }}>
                        HR Manager, ABC Company
                    </h1>
                    </section>
                </main>

                <section className='flex items-center gap-x-3'>
                <div className='h-[5vh] w-1 bg-black'></div>
                <div className='flex'>
                    <Image src={"/images/web-app-logo.png"} alt='placeholder' width={34} height={34} className='rounded-full' />
                    <h1 className='text-lg font-bold'>
                        Zenexa
                    </h1>
                </div>
                </section>
                </section>
            </section>
           
        </main>
    </div>
    </main>
  )
}

export default Testimonials