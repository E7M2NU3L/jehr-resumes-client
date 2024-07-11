import React from 'react'
import { Button } from '../ui/button'

const CTA = () => {
  return (
    <div className='min-h-[40vh] flex justify-between items-center max-w-7xl mx-auto'>
        <h1 className='text-2xl max-w-md md:text-5xl font-bold text-dark-5' style={{
            fontFamily: "Anton SC, sans-serif"
        }}>
            Ready to Transform your Career?
        </h1>
        <Button size={"sm"}>
            Get Started
        </Button>
    </div>
  )
}

export default CTA