import React from 'react'
import { Button } from '../ui/button'
import { Plus, PlusIcon } from 'lucide-react'
import { BiRightArrow } from 'react-icons/bi'
import { ResumeTabs } from './resume-tabs'
import Link from 'next/link'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious
} from '@/components/ui/carousel'

interface CardProps {
    id: string,
    image: string,
    templateName: string,
    downloads: string
}

const ListofTemplates = [{
    id: '1',
    image: '/resumes/resume (1).png',
    templateName: 'Aesthetic Navy Resume',
    downloads: '120+ downloads'
}, {
    id: '2',
    image: '/resumes/resume (2).png',
    templateName: 'Aesthetic Navy Resume',
    downloads: '120+ downloads'
}, {
    id: '3',
    image: '/resumes/resume (3).png',
    templateName: 'Aesthetic Navy Resume',
    downloads: '120+ downloads'
}, {
    id: '4',
    image: '/resumes/resume (4).png',
    templateName: 'Aesthetic Navy Resume',
    downloads: '120+ downloads'
}, {
    id: '5',
    image: '/resumes/resume (5).png',
    templateName: 'Aesthetic Navy Resume',
    downloads: '120+ downloads'
}, {
    id: '6',
    image: '/resumes/resume (6).png',
    templateName: 'Aesthetic Navy Resume',
    downloads: '120+ downloads'
}, {
    id: '7',
    image: '/resumes/resume (7).png',
    templateName: 'Aesthetic Navy Resume',
    downloads: '120+ downloads'
}, {
    id: '8',
    image: '/resumes/resume (8).png',
    templateName: 'Aesthetic Navy Resume',
    downloads: '120+ downloads'
}]

const ResumeD = () => {

  return (
    <div className='h-[90vh] max-w-7xl mx-auto px-[1rem] md:px-0'>
        <section className='flex justify-between flex-wrap gap-y-4 md:gap-y-0 items-center'>
            <section className='flex flex-col'>
                <h1 className='text-xl md:text-2xl font-normal text-dark-5' style={{
                    fontFamily: "Anton SC, sans-serif"
                }}>
                    Resume Builder
                </h1>
                <h1 className='text-muted-foreground pt-1'>
                    Fill in the socials and wait for the magic to happen
                </h1>
            </section>
            <section className=''>
                <Button className='bg-dark-1 text-dark-5 font-normal active:scale-95 active:translate-y-1 hover:bg-dark-1/85 transition-all duration-200 ease-in-out' variant={"tertiary"}>
                    <Link href={"/resume-builder/new/1234"} className='flex gap-x-2 items-center'>
                        <Plus />
                        Create Resume
                    </Link>
                </Button>
            </section>
        </section>

        <section className='pt-[3rem] flex justify-between items-center'>
            <h1 className='text-lg md:text-xl font-normal text-dark-5' style={{
                fontFamily: "Anton SC, sans-serif"
            }}>
                Custom Templates
            </h1>   
            <Button className='font-bold text-lg text-blue-600 hover:underline hover:scale-105 transition-all duration-200 ease-in-out active:text-dark-5 active:scale-95 active:translate-y-1' variant={"tertiary"} style={{
                fontFamily: "Baskervville SC, serif"
            }}>
                <Link href={"/templates"} className='flex gap-x-1 items-center'>
                See all <BiRightArrow /></Link>
            </Button>
        </section>

        <Carousel opts={{
            align: 'start'
        }} className='max-w-7xl w-full z-0'>
            <CarouselContent>
                <CarouselItem className='basis-1/2 md:basis-1/6 lg:basis-1/6'>
                    <Link href={"/resume-builder/new"}>
                        <div className='h-[25vh] hover:shadow-lg cursor-pointer w-[20vh] flex-col border flex items-center justify-center'>  
                            <PlusIcon />
                            <h1 className='font-normal' style={{
                                fontFamily: "Anton SC, sans-serif"
                            }}>
                                Blank Resume
                            </h1>
                        </div>
                    </Link>
                </CarouselItem>
                {ListofTemplates.map((context : CardProps, index : number) => (
                    <>
                    <CarouselItem key={context.id} className='basis-1/2 sm:basis-1/3 md:basis-1/6 lg:basis-1/6'>
                        <Link href={`/resume-builder/new/template/${context.id}`} key={index}>
                            <div className='h-[25vh] hover:shadow-lg cursor-pointer max-w-md border'>
                                <img 
                                    src={context.image} 
                                    alt='placeholder' 
                                    className='relative h-[15vh] max-w-md object-contain border-b' 
                                />
                                <section className='h-[5vh] px-2 py-1'>
                                    <h1 className='text-sm px-2 py-1 text-dark-5'>
                                        {context.templateName}
                                    </h1>
                                    <h1 className='text-sm text-muted-foreground my-1'>
                                        {context.downloads}
                                    </h1>
                                </section>
                            </div>
                        </Link>
                    </CarouselItem>
                    </>
                ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
            </Carousel>

        <section className='flex-col flex py-[3.5rem]'>
            <h1 className='pb-2 text-dark-5 font-normal text-lg md:text-lg' style={{
                fontFamily: "Anton SC, sans-serif"
            }}>
                My Resumes
            </h1>
            <ResumeTabs />
        </section>
    </div>
  )
}

export default ResumeD

