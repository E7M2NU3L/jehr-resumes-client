import { CookingPot } from 'lucide-react'
import React from 'react'
import { Button } from '../ui/button'
import { GiAbstract040 } from 'react-icons/gi'

const Pricing = () => {
  return (
    <div className='min-h-screen py-[2rem] flex flex-col max-w-7xl mx-auto'>
        <main className='flex flex-col gap-y-[1rem] px-[1rem] md:px-0  pb-[3rem]'>
            <h1 className='text-md font-light' style={{
                fontFamily: "Baskervville SC, serif"
            }}>
                Simple
            </h1>
            <h1 className='text-2xl md:text-5xl text-black' style={{
                fontFamily: "Anton Sc, sans-serif"
            }}>
            Pricing Options
            </h1>
            <h1 className='text-lg font-light' style={{
                fontFamily: "Baskervville SC, serif"
            }}>
            Choose the plan that suits your needs and budget.
            </h1>
        </main>

        <section className='flex justify-between px-4 pb-[4rem] md:pb-0 items-center flex-col md:flex-row'>
            <section>
                <section className='flex justify-start gap-x-[1.7rem] items-start'>
                    <GiAbstract040 className='text-2xl ' />
                    <section>
                        <h1 className='text-xl font-bold text-black pb-4' style={{
                            fontFamily: "Baskervville SC, serif"
                        }}>
                        Flexible Pricing
                        </h1>
                        <h1 className='pb-5 font-light text-lg text-black' style={{
                            fontFamily: "Baskervville SC, serif"
                        }}>
                        Affordable plans with no hidden fees.
                        </h1>
                    </section>
                </section>
                <section className='flex justify-start gap-x-[1.7rem] items-start'>
                    <GiAbstract040 className='text-2xl ' />
                    <section>
                        <h1 className='text-xl font-bold text-black pb-4' style={{
                            fontFamily: "Baskervville SC, serif"
                        }}>
                        Custom Templates
                        </h1>
                        <h1 className='pb-5 font-light text-lg text-black' style={{
                            fontFamily: "Baskervville SC, serif"
                        }}>
                        Access a wide range of professionally designed templates.
                        </h1>
                    </section>
                </section>
                <section className='flex justify-start gap-x-[1.7rem] items-start'>
                    <GiAbstract040 className='text-2xl ' />
                    <section>
                        <h1 className='text-xl font-bold text-black pb-4' style={{
                            fontFamily: "Baskervville SC, serif"
                        }}>
                        Job Scraping
                        </h1>
                        <h1 className='pb-5 font-light text-lg text-black' style={{
                            fontFamily: "Baskervville SC, serif"
                        }}>
                        Get notified about new job opportunities directly in the app.
                        </h1>
                    </section>
                </section>
            </section>
            <section className='border border-black py-[2rem] px-[1rem]'>
                <section className='flex justify-between items-center mb-[2rem]'>
                    <section className='flex flex-col pr-[2rem]'>
                        <h1 className='text-lg md:text-lg font-medium text-black' style={{
                            fontFamily: "Anton SC, serif"
                        }}>
                        Basic Plan
                        </h1>
                        <h1 style={{
                        fontFamily: "Baskervville SC, serif"
                    }}>
                        Ideal for individuals and freelancers
                        </h1>
                    </section>
                    <section>
                        <h1 className='text-2xl md:text-5xl text-black' style={{
                            fontFamily: "Anton SC, sans-serif"
                        }}>
                        $19/mo
                        </h1>
                    </section>
                </section>
                <div className='h-[0.2px] bg-black w-full px-[1.5rem]'></div>
                <section className='pt-[2rem]'>
                    <h1 className='pb-3 text-lg font-medium' style={{
                        fontFamily: "Baskervville SC, serif"
                    }}>
                    Includes:
                    </h1>

                    <section className='flex justify-around items-center pb-[2rem] flex-wrap gap-y-3 md:gap-x-0'>
                        <main className='flex flex-col gap-y-3'>
                            <main className='flex justify-start items-center gap-x-4'>
                                <CookingPot />
                                <h1>
                                Customizable Templates
                                </h1>
                            </main>
                            <main className='flex justify-start items-center gap-x-4'>
                                <CookingPot />
                                <h1>
                                24/7 Customer Support
                                </h1>
                            </main>
                            <main className='flex justify-start items-center gap-x-4'>
                                <CookingPot />
                                <h1>
                                Unlimited Downloads
                                </h1>
                            </main>
                            <main className='flex justify-start items-center gap-x-4'>
                                <CookingPot />
                                <h1>
                                Job Alerts
                                </h1>
                            </main>
                            <main className='flex justify-start items-center gap-x-4'>
                                <CookingPot />
                                <h1>
                                Multiple File Formats
                                </h1>
                            </main>
                        </main>
                        <main className='flex flex-col gap-y-3'>
                            <main className='flex justify-start items-center gap-x-4'>
                                <CookingPot />
                                <h1>
                                Customizable Templates
                                </h1>
                            </main>
                            <main className='flex justify-start items-center gap-x-4'>
                                <CookingPot />
                                <h1>
                                24/7 Customer Support
                                </h1>
                            </main>
                            <main className='flex justify-start items-center gap-x-4'>
                                <CookingPot />
                                <h1>
                                Unlimited Downloads
                                </h1>
                            </main>
                            <main className='flex justify-start items-center gap-x-4'>
                                <CookingPot />
                                <h1>
                                Job Alerts
                                </h1>
                            </main>
                            <main className='flex justify-start items-center gap-x-4'>
                                <CookingPot />
                                <h1>
                                Multiple File Formats
                                </h1>
                            </main>
                        </main>
                    </section>
                </section>
                <div className='h-[0.2px] bg-black w-full px-[1.5rem] mb-[2rem]'></div>
                <Button className='w-full' variant={"primary"}>
                    Get Started
                </Button>
            </section>
        </section>
    </div>
  )
}

export default Pricing