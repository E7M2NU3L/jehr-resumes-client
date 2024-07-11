import Dashnav from '@/components/dashboard/dashnav'
import React from 'react'

interface ChildrenProps  {
    children: React.ReactNode
}

const DashboardLayout = ({children} : ChildrenProps) => {
  return (
    <div className='overflow-x-hidden overflow-y-scroll h-screen scroll-smooth scrollbar-hide'>
        <Dashnav />
        {children}
    </div>
  )
}

export default DashboardLayout