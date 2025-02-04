import Footer from '@/components/Footer/Footer'
import Navbar from '@/components/Navbar/Navbar'
import React from 'react'

const layout = ({children}: {children: React.ReactNode}) => {
  return (
    <div className='overflow-x-hidden'>
        <Navbar />
        {children}
        <Footer />
    </div>
  )
}

export default layout