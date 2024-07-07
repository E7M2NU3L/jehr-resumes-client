import React from 'react'
import { Button } from '../ui/button'

const Customise = () => {
  return (
    <div className='min-h-screen'>
      <main className='max-w-5xl mx-auto mt-[4rem] mb-[2.5rem] md:my-[2.5rem]'>
        <h1 className='text-2xl md:text-5xl font-bold text-black text-center px-[2rem] md:text-start md:px-0' style={{
          fontFamily: "Anton SC, sans-serif"
        }}>
        Automated Scraping: Gather user details from social platforms like LinkedIn and GitHub.
        </h1>
      </main>

      <section className='flex justify-center items-center gap-x-[8vh] flex-wrap gap-y-[2rem] md:gap-y-0 px-[1rem] md:px-0'>
        <main className='min-h-[20vh] max-w-md'>
          <main className='w-full h-[50%]'>
            <img src="/images/card-image.png" alt='placeholder' className='h-[300px] w-full shadow-md' />
          </main>
          <section className='flex flex-col justify-center items-center text-center'>
            <h1 className='font-bold text-2xl md:text-4xl text-black py-[1.5rem]' style={{
              fontFamily: "Anton SC, sans-serif"
            }}>
              Custom Resume Templates: Choose from a variety of professionally designed templates.
            </h1>
            <h1 className='font-bold text-lg mb-2' style={{
              fontFamily: "Baskervville SC, serif"
            }}>
            Easily create and edit your resume with our built-in resume editor.
            </h1>

            <Button variant={"link"}>
              Learn More {">"}
            </Button>
          </section>
        </main>
        <main className='min-h-[20vh] max-w-md'>
          <main className='w-full h-[50%]'>
            <img src="/images/card-image.png" alt='placeholder' className='h-[300px] w-full shadow-md' />
          </main>
          <section className='flex flex-col justify-center items-center text-center'>
            <h1 className='font-bold text-2xl md:text-4xl text-black py-[1.5rem]' style={{
              fontFamily: "Anton SC, sans-serif"
            }}>
              Job Scraping: Find relevant job opportunities with our internal job scraping feature.
            </h1>
            <h1 className='font-bold text-lg mb-2' style={{
              fontFamily: "Baskervville SC, serif"
            }}>
            Choose from a wide range of customizable resume templates.
            </h1>

            <Button variant={"link"}>
            Sign Up {">"}
            </Button>
          </section>
        </main>
        <main className='min-h-[20vh] max-w-md'>
          <main className='w-full h-[50%]'>
            <img src="/images/card-image.png" alt='placeholder' className='h-[300px] w-full shadow-md' />
          </main>
          <section className='flex flex-col justify-center items-center text-center'>
            <h1 className='font-bold text-2xl md:text-4xl text-black py-[1.5rem]' style={{
              fontFamily: "Anton SC, sans-serif"
            }}>
              Resume Editor: Easily make changes to your resume with our intuitive editor.
            </h1>
            <h1 className='font-bold text-lg mb-2' style={{
              fontFamily: "Baskervville SC, serif"
            }}>
            Create your professional resume in minutes with our easy-to-use editor.
            </h1>

            <Button variant={"link"}>
              Sign up {">"}
            </Button>
          </section>
        </main>
      </section>
    </div>
  )
}

export default Customise