import Dashnav from '@/components/dashboard/dashnav'
import React from 'react'

interface ChildrenProps  {
    children: React.ReactNode
}

const DashboardLayout = ({children} : ChildrenProps) => {
  return (
    <div>
        <Dashnav />
        {children}
    </div>
  )
}

export default DashboardLayout