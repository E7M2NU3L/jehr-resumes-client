import FAQ from '@/components/pricing/Faq'
import CTA from '@/components/pricing/cta'
import PriceCards from '@/components/pricing/price-cards'
import React from 'react'

const Pricing = () => {
  return (
    <>
      <PriceCards />
      <CTA />
      <FAQ />
    </>
  )
}

export default Pricing