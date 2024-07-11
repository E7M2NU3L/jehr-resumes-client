import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
  } from "@/components/ui/tabs"
  import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"

  export function ResumeTabs() {
    return (
      <Tabs defaultValue="account" className="">
        <TabsList className="grid w-[400px] grid-cols-2">
          <TabsTrigger value="account">Drafts <span className="px-2 py-1 text-sm bg-dark-4/80  ms-2 rounded-full text-blue-700">4</span></TabsTrigger>
          <TabsTrigger value="password">Completed <span className="px-2 py-1 text-sm bg-dark-4/80  ms-2 rounded-full text-blue-700">2</span></TabsTrigger>
        </TabsList>
        <TabsContent value="account">
        <Carousel className="max-w-xl w-full" opts={{
            align: 'start'
        }}>
            <CarouselContent className="flex justify-start items-center gap-x-3">
            <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                <div className='h-[25vh] hover:shadow-lg cursor-pointer w-[20vh] border'>
                    <img 
                        src={"/resumes/resume (1).png"} 
                        alt='placeholder' 
                        className='relative h-[15vh] bg-dark-4/50 w-[20vh] object-contain border-b' 
                    />
                    <section className='h-[5vh] px-2 py-1'>
                        <h1 className='text-sm px-2 py-1 text-dark-5'>
                            Untitled Resume 1
                        </h1>
                        <h1 className='text-sm text-muted-foreground my-1'>
                            11 days ago
                        </h1>
                    </section>
                </div>
            </CarouselItem>
            <CarouselItem className="md:basis-1/2 lg:basis-1/3">
            <div className='h-[25vh] hover:shadow-lg cursor-pointer w-[20vh] border'>
                <img 
                    src={"/resumes/resume (2).png"} 
                    alt='placeholder' 
                    className='relative h-[15vh] bg-dark-4/50 w-[20vh] object-contain border-b' 
                />
                <section className='h-[5vh] px-2 py-1'>
                    <h1 className='text-sm px-2 py-1 text-dark-5'>
                       Untitled Resume 1
                    </h1>
                    <h1 className='text-sm text-muted-foreground my-1'>
                        1 days ago
                    </h1>
                </section>
            </div>
            </CarouselItem>
            <CarouselItem className="md:basis-1/2 lg:basis-1/3">
            <div className='h-[25vh] hover:shadow-lg cursor-pointer w-[20vh] border'>
                <img 
                    src={"/resumes/resume (3).png"} 
                    alt='placeholder' 
                    className='relative h-[15vh] bg-dark-4/50 w-[20vh] object-contain border-b' 
                />
                <section className='h-[5vh] px-2 py-1'>
                    <h1 className='text-sm px-2 py-1 text-dark-5'>
                        Untitled Resume 1
                    </h1>
                    <h1 className='text-sm text-muted-foreground my-1'>
                        1 days ago
                    </h1>
                </section>
            </div>
            </CarouselItem>
            <CarouselItem className="md:basis-1/2 lg:basis-1/3">
            <div className='h-[25vh] hover:shadow-lg cursor-pointer w-[20vh] border'>
                <img 
                    src={"/resumes/resume (4).png"} 
                    alt='placeholder' 
                    className='relative h-[15vh] bg-dark-4/50 w-[20vh] object-contain border-b' 
                />
                <section className='h-[5vh] px-2 py-1'>
                    <h1 className='text-sm px-2 py-1 text-dark-5'>
                        Untitled Resume 1
                    </h1>
                    <h1 className='text-sm text-muted-foreground my-1'>
                        1 days ago
                    </h1>
                </section>
            </div>
            </CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext /> 
        </Carousel>
        </TabsContent>
        <TabsContent value="password" className="max-w-7xl px-4 overflow-x-scroll scroll-smooth scrollbar-hide overflow-y-hidden">
        <Carousel opts={{
            align: 'start'
        }} className="max-w-xl w-full">
            <CarouselContent className='flex justify-start items-center gap-4'>
                <CarouselItem className="basis-1/2 md:basis-1/2 lg:basis-1/3">
                    <div className='h-[25vh] hover:shadow-lg cursor-pointer w-[20vh] border'>
                        <img 
                            src={"/resumes/resume (5).png"} 
                            alt='placeholder' 
                            className='relative h-[15vh] bg-dark-4/50 w-[20vh] object-contain border-b' 
                        />
                        <section className='h-[5vh] px-2 py-1'>
                            <h1 className='text-sm px-2 py-1 text-dark-5'>
                                Banking Resume
                            </h1>
                            <h1 className='text-sm text-muted-foreground my-1'>
                            4 days ago
                            </h1>
                        </section>
                    </div>
                </CarouselItem>
                <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                <div className='h-[25vh] hover:shadow-lg cursor-pointer w-[20vh] border'>
                    <img 
                        src={"/resumes/resume (6).png"} 
                        alt='placeholder' 
                        className='relative h-[15vh] bg-dark-4/50 w-[20vh] object-contain border-b' 
                    />
                    <section className='h-[5vh] px-2 py-1'>
                        <h1 className='text-sm px-2 py-1 text-dark-5'>
                        Banking Resume
                        </h1>
                        <h1 className='text-sm text-muted-foreground my-1'>
                            4 days ago
                        </h1>
                    </section>
                </div>
                </CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
        </TabsContent>
      </Tabs>
    )
  }
  