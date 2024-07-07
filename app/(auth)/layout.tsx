import Navbar from '@/components/Navbar/Navbar'
import React from 'react'

const AuthLayout = ({children} : {children : React.ReactNode}) => {
  return (
    <div>
        <Navbar />
        {children}
    </div>
  )
}

export default AuthLayout