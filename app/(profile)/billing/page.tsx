import Bills from '@/components/profile/billing'
import Payments from '@/components/profile/payments'
import React from 'react'

const Billing = () => {
  return (
    <div className='max-w-7xl mx-auto'>
      <Bills />
      <Payments />
    </div>
  )
}

export default Billing