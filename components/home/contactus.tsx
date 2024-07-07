import { LocateIcon, Mail, Phone } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import { Badge } from '../ui/badge'

const Contacts = () => {
  return (
    <div className='min-h-[30vh] relative flex flex-col justify-center max-w-7xl mx-auto items-center'>
        <section className='flex justify-between items-center w-full flex-col md:flex-row px-[1rem] md:px-0 gap-y-[2rem] md:gap-y-0'>
            <main className='max-w-xl pt-[3rem]'>
                <Badge className='bg-green-500 mb-[1.4rem] text-white hover:bg-green-500'>
                    Get in Touch
                </Badge>
                <h1 className='text-2xl md:text-5xl font-bold mb-[1.8rem] text-dark-5' style={{
                    fontFamily: "Anton SC, sans-serif"
                }}>
                    Contact us
                </h1>
                <h1 className='font-bold text-xl text-dark-5' style={{
                            fontFamily: "Baskervville SC, serif"
                        }}>
                    For any support or queries, feel free to reach out to us
                </h1>
            </main>
            <main className='max-w-xl flex flex-col gap-y-4'>
                <section className='flex justify-start items-start gap-x-2'>
                    <Mail />
                    <section>
                        <h1 className='font-bold text-xl text-dark-5' style={{
                            fontFamily: "Baskervville SC, serif"
                        }}>
                            mail
                        </h1>
                        <h1 className='font-medium text-lg text-black' style={{
                            fontFamily: "Baskervville SC, serif"
                        }}>
                            aemmanuel685210@gmail.com
                        </h1>
                    </section>
                </section>
                <section className='flex justify-start items-start gap-x-2'>
                    <Phone />
                    <section>
                        <h1 className='font-bold text-xl text-dark-5' style={{
                            fontFamily: "Baskervville SC, serif"
                        }}>
                            phone
                        </h1>
                        <h1 className='font-medium text-lg text-black' style={{
                            fontFamily: "serif"
                        }}>
                            +91 7397336625
                        </h1>
                    </section>
                </section>
                <section className='flex justify-start items-start gap-x-2'>
                    <LocateIcon />
                    <section>
                        <h1 className='font-bold text-xl text-dark-5' style={{
                            fontFamily: "Baskervville SC, serif"
                        }}>
                            location
                        </h1>
                        <h1 className='font-medium text-lg text-black' style={{
                            fontFamily: "Baskervville SC, serif"
                        }}>
                            Chennai, Tamilnadu, India
                        </h1>
                    </section>
                </section>
            </main>
        </section>
    </div>
  )
}

export default Contacts