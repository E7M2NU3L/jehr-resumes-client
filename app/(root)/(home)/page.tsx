import Contacts from '@/components/home/contactus'
import CTA from '@/components/home/cta'
import Customise from '@/components/home/customize'
import Effortless from '@/components/home/effortless'
import Features from '@/components/home/features'
import Hero from '@/components/home/hero'
import Marketing from '@/components/home/marketing'
import Pricing from '@/components/home/pricing'
import Simplify from '@/components/home/simplify'
import Testimonials from '@/components/home/testimonials'
import React from 'react'

const Home = () => {
  return (
    <>
      <Hero />
      <Customise />
      <Features />
      <Marketing />
      <Pricing />
      <CTA />
      <Testimonials />
      <Simplify />
      <Effortless />
      <Contacts />
    </>
  )
}

export default Home