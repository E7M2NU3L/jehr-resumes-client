import React from 'react'
import { Badge } from '../ui/badge'
import { ArrowRight } from 'lucide-react'
import { Button } from '../ui/button'

const Effortless = () => {
  return (
    <div className='min-h-[70vh] py-[3rem] max-w-7xl flex flex-col-reverse px-[1rem] md:px-0 md:flex-row justify-around items-start mx-auto'>
        <section className='max-w-xl'>
            <h1 className='font-bold text-lg md:text-xl text-black' style={{
                fontFamily: "BAskervville SC, serif"
            }}>
            Our resume designer application offers a time-saving solution for creating top-notch resumes. With our custom templates and built-in editor, you can easily create a professional resume that will impress employers. Our application provides a range of services to help you create professional resumes, search for jobs, and customize templates to suit your needs.
            </h1>

            <section className='flex justify-between items-center py-[1.5rem] flex-wrap'>
                <main className='flex flex-col gap-y-[1rem]'>
                    <h1 className='text-2xl md:text-5xl font-bold text-dark-5' style={{
                        fontFamily: "Anton SC, sans-serif"
                    }}>
                        95%
                    </h1>
                    <h1 className='font-bold text-xl text-black' style={{
                        fontFamily: "BAskervville SC, serif"
                    }}>
                        User satisfaction rate
                    </h1>
                </main>
                <main className='flex flex-col gap-y-[1rem]'>
                    <h1 className='text-2xl md:text-5xl font-bold text-dark-5' style={{
                        fontFamily: "Anton SC, sans-serif"
                    }}>
                        120
                    </h1>
                    <h1 className='font-bold text-xl text-black' style={{
                        fontFamily: "BAskervville SC, serif"
                    }}>
                        Resumes Builted
                    </h1>
                </main>
            </section>

            <section className='flex items-center gap-x-2'>
                <Button className='' variant={"outline"}>
                    Learn More
                </Button>
                <Button className='flex gap-x-1 items-center' variant={"link"}>
                    Sign Up <ArrowRight />
                </Button>
            </section>
        </section>
        <section className='max-w-xl'>
            <Badge className='bg-destructive hover:bg-destructive/90 text-white font-bold' style={{
                fontFamily: "Baskervville SC, serif"
            }}>
                Effortless
            </Badge>
            <h1 className='text-2xl md:text-5xl font-bold pt-[3rem] text-dark-5' style={{
                fontFamily: "Anton SC, sand-serif"
            }}>
                Transform your resume with our automated Design
            </h1>
        </section>
    </div>
  )
}

export default Effortless