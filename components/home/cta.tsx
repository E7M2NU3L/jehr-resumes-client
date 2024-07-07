import React from 'react'
import { Button } from '../ui/button'
import { BiRightArrowAlt } from 'react-icons/bi'

const CTA = () => {
  return (
        <div className='flex min-h-[30vh] justify-start max-w-7xl items-start flex-col mx-auto px-[2rem] md:px-0 pb-[2rem] md:py-0'>
        <h1 className='text-5xl font-bold text-black pb-4' style={{
            fontFamily: "Anton SC, serif",
        }}>
            Design Your Perfect Resume
        </h1>
        <h1 className='text-lg font-medium text-black'style={{
            fontFamily: "Baskervville SC, serif"
        }}>
        Create a professional resume with our automated designer application.
        </h1>

        <section className='pt-[1.7rem] gap-x-4 flex justify-around items-start'>
            <Button className='' variant={"primary"}>
                Sign up
            </Button>
            <Button className='flex items-center gap-x-3' variant={"secondary"}>
                Learn More <BiRightArrowAlt />
            </Button>
        </section>
    </div>
  )
}

export default CTA