import Image from 'next/image'
import React from 'react'

const Features = () => {
  return (
    <div className='min-h-screen flex justify-around items-center flex-wrap px-[3rem] md:px-0'>
      <div>
        <Image src={"/images/hero (1).png"} width={500} height={500} className='' alt='features' />
      </div>
      <div className='flex justify-start flex-col items-start max-w-xl'>
        <h1 className='text-2xl mb-4 md:text-5xl font-medium text-dark-5' style={{
          fontFamily: "Anton SC, sans-serif"
        }}>
          Automatically build your resume by scraping GitHub and LinkedIn profiles.
        </h1>
        <h1 className='font-medium text-lg mb-6' style={{
          fontFamily: "Baskervville SC, serif"
        }}>
          Our resume designer application uses advanced algorithms to extract relevant information from your GitHub and LinkedIn profiles, creating a professional resume in seconds.
        </h1>
        <section className='flex justify-around items-center'>
          <main className='flex flex-col justify-start gap-y-4 items-start'>
            <h1 className='text-3xl md:text-5xl font-extrabold' style={{
              fontFamily: "Anton SC, serif"
            }}>
              Effortlessly
            </h1>
            <h1 className='font-medium text-lg mb-6' style={{
          fontFamily: "Baskervville SC, serif"
        }}>
              Scrape GitHub and LinkedIn for accurate and up-to-date information.
            </h1>
          </main>
          <main className='flex flex-col justify-start gap-y-4 items-start'>
            <h1 className='text-3xl md:text-5xl font-extrabold' style={{
                fontFamily: "Anton SC, serif"
              }}>
              Quickly
            </h1>
            <h1 className='font-medium text-lg mb-6' style={{
          fontFamily: "Baskervville SC, serif"
        }}>
              Create a polished resume with our easy-to-use editor.
            </h1>
          </main>
        </section>
      </div>
    </div>
  )
}

export default Features