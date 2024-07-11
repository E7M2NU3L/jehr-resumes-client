import React from 'react'
import { GiBottomRight3dArrow, GiPriceTag } from 'react-icons/gi'
import { Button } from '../ui/button'
import { Badge } from '../ui/badge'
import { Separator } from '../ui/separator'

const PriceCards = () => {
  return (
    <div className='min-h-[90vh] py-[3rem] max-w-7xl mx-auto'>
        <section className='max-w-md text-center flex flex-col justify-center items-center gap-y-[1rem] mx-auto'>
            <GiPriceTag className='text-2xl' />
            <h1 className='font-bold text-2xl md:text-5xl text-dark-5' style={{
                fontFamily: "Anton SC, sans-serif"
            }}>
                Choose your perfect plan
            </h1>
            <h1 className='text-lg font-medium md:text-lg text-black' style={{
                fontFamily: "BAskervville SC, serif"
            }}>
                pay once get access forever
            </h1>
            <Button variant={"outline"} size={"sm"}>
                Contact us
            </Button>
        </section>
        <section className='flex w-full justify-between items-center px-[1rem] flex-col md:flex-row'>
            <main className='min-h-[20vh] cursor-pointer max-w-md shadow-xl hover:shadow-2xl rounded-lg hover:rounded-xl hover:scale-105 hover:translate-x-1 px-[1rem] py-[1.3rem] transition-all duration-300 ease-in-out'>
                <Badge className='font-medium bg-dark-5' style={{
                    fontFamily: "Baskervville SC, serif"
                }}>
                    One time
                </Badge>
                <h1 className='text-2xl pt-[0.9rem] md:text-4xl font-bold' style={{
                    fontFamily: "Anton SC, sans-serif"
                }}>
                    $ 1.99/use
                </h1>

                <Separator className='my-4' />

               <section className='flex flex-col gap-y-3 pb-[1.3rem]'>
               <h1 style={{
                            fontFamily: "Baskervville SC, serif"
                        }}>
                    This Pricing if for a single resume purchase, in which you can have
                </h1>

                <ul>
                    <li className='flex text-xl items-center gap-x-2'>
                        <GiBottomRight3dArrow />
                        <span className='' style={{
                            fontFamily: "Baskervville SC, serif"
                        }}>
                            Inbuilt Resume Builder
                        </span>
                    </li>
                    <li className='flex text-xl items-center gap-x-2'>
                        <GiBottomRight3dArrow />
                        <span className='' style={{
                            fontFamily: "Baskervville SC, serif"
                        }}>
                            Exportable for multiple formats
                        </span>
                    </li>
                    <li className='flex text-xl items-center gap-x-2'>
                        <GiBottomRight3dArrow />
                        <span className='' style={{
                            fontFamily: "Baskervville SC, serif"
                        }}>
                            Custom Templates
                        </span>
                    </li>
                </ul>
               </section>

                <h1 className='text-lg mb-[1.5rem] bg-black/15 px-4 py-2 rounded-lg font-normal' style={{
                    fontFamily: "Anton SC, sans-serif"
                }}>
                    These features are available only for that particular day for you to design and export
                </h1>

                <Button variant={"primary"} className='text-white' style={{
                    fontFamily: "Anton SC, sans-serif"
                }}>
                    Get Started
                </Button>
            </main>
            <main className='min-h-[20vh] cursor-pointer max-w-md shadow-xl hover:shadow-2xl rounded-lg hover:rounded-xl hover:scale-105 hover:translate-x-1 px-[1rem] py-[1.3rem] transition-all duration-300 ease-in-out'>
                <Badge className='font-medium bg-dark-5' style={{
                    fontFamily: "Baskervville SC, serif"
                }}>
                    One month
                </Badge>
                <h1 className='text-2xl pt-[0.9rem] md:text-4xl font-bold' style={{
                    fontFamily: "Anton SC, sans-serif"
                }}>
                    $ 12.99/Mo
                </h1>

                <Separator className='my-4' />

               <section className='flex flex-col gap-y-3 pb-[1.3rem]'>
               <h1 style={{
                            fontFamily: "Baskervville SC, serif"
                        }}>
                    This Pricing if for a single resume purchase, in which you can have
                </h1>

                <ul>
                    <li className='flex text-xl items-center gap-x-2'>
                        <GiBottomRight3dArrow />
                        <span className='' style={{
                            fontFamily: "Baskervville SC, serif"
                        }}>
                            Unlimited Resume Downloads
                        </span>
                    </li>
                    <li className='flex text-xl items-center gap-x-2'>
                        <GiBottomRight3dArrow />
                        <span className='' style={{
                            fontFamily: "Baskervville SC, serif"
                        }}>
                            Inbuilt Resume Builder
                        </span>
                    </li>
                    <li className='flex text-xl items-center gap-x-2'>
                        <GiBottomRight3dArrow />
                        <span className='' style={{
                            fontFamily: "Baskervville SC, serif"
                        }}>
                            Jobs Search
                        </span>
                    </li>
                    <li className='flex text-xl items-center gap-x-2'>
                        <GiBottomRight3dArrow />
                        <span className='' style={{
                            fontFamily: "Baskervville SC, serif"
                        }}>
                            Clear Exports
                        </span>
                    </li>
                    <li className='flex text-xl items-center gap-x-2'>
                        <GiBottomRight3dArrow />
                        <span className='' style={{
                            fontFamily: "Baskervville SC, serif"
                        }}>
                            More Custom Templates
                        </span>
                    </li>
                </ul>
               </section>

                <section className='flex items-center gap-x-3'>
                    <Button variant={"primary"} className='text-white' style={{
                        fontFamily: "Anton SC, sans-serif"
                    }}>
                        Get Started
                    </Button>
                    <Button className='font-medium' variant={"secondary"} style={{
                        fontFamily: "Anton SC, sans-serif"
                    }}>
                        Try Yearly <span className='text-green-700 ps-2'>-10%</span>
                    </Button>
                </section>
            </main>
        </section>
    </div>
  )
}

export default PriceCards