"use client"

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Separator } from '@/components/ui/separator'
import { ResumeSchema } from '@/schemas/resumeSchemas'
import { zodResolver } from '@hookform/resolvers/zod'
import { Edit3Icon } from 'lucide-react'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState, useTransition } from 'react'
import { useForm } from 'react-hook-form'
import * as z from 'zod';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface ResData {
    resumeName: string,
    linkedinLink: string,
    githubLink: string
}


interface ResumeDataProps {
    id: string,
    message: string,
    status: string,
    ResumeData: ResData
}

const NewResume = () => {
    const form = useForm<z.infer<typeof ResumeSchema>>({
        resolver: zodResolver(ResumeSchema),
        defaultValues: {
            resumeName: '',
            githubLink: '',
            linkedinLink: ''
        }
    });

    const [IsPending, startTransition] = useTransition();
    const [error, setError] = useState<string>('');
    const [success, setSuccess] = useState<string>('');
    const [linkid, setLinkid] = useState<string>('');
    const router = useRouter();

    useEffect(() => {
        if (error !== '') {
            toast(error);
        }
    }, [error]);

    useEffect(() => {
        if (success !== '') {
            toast(success);
        }
    }, [success]);

    const onSubmit = async (values : z.infer<typeof ResumeSchema>) => {
        try {
            startTransition(async () => {
                const endpoint = 'http://localhost:8000/api/user-info-scrape'
                const res = await axios.post(endpoint, values);
                const data: ResumeDataProps = res.data;
                if (data) {
                    setLinkid(data.id);
                    setSuccess("Resume has been created");

                    setTimeout(() => {
                        setError('');
                        setSuccess('');
        
                        router.push(`/resume-builder/new/${linkid}` || `/resume-builder/new/${data.id}`);
                    }, 3000);
                }
            })

        } catch (error) {
            if (axios.isAxiosError(error) && error.response) {
                console.log(error.response.data);
                setError(error.response.data.message || "An error occurred during Resume Creation");
              } else if (error instanceof Error) {
                console.log(error.message);
                setError(error.message);
              } else {
                console.log("Unknown Error");
                setError("Unknown Error");
              }
        }
    }
    
    
  return (
    <div className='min-h-[90vh] flex justify-center items-center'>
        <Form {...form}>
        <form className='' onSubmit={form.handleSubmit(onSubmit)}>
            
        <Card className='max-w-md hover:shadow-2xl transition-all duration-300 ease-in-out py-2 px-3'>
            <CardHeader>
                <h1 className='text-2xl md:text-4xl font-normal text-dark-5' style={{
                    fontFamily: "Anton SC, serif"
                }}>
                    Personal Information
                </h1>
            </CardHeader>
            <CardDescription>       
                <span className='text-lg font-bold text-slate-700' style={{
                    fontFamily: "Baskervville SC, serif"
                }}>
                Resume Info
                </span>
            </CardDescription>
            <CardContent>
            <FormField
                control={form.control}
                name='resumeName'
                render={({field}) => (
                    <FormItem>
                         <div className='my-4 flex flex-col justify-start gap-y-3'>
                        <FormLabel>
                        Resume Name
                        </FormLabel>
                        <FormControl>
                            <Input disabled={IsPending} {...field} placeholder='Demo Project' />
                        </FormControl>
                        </div>
                        <FormMessage />
                    </FormItem>
                )}
            /> 
            </CardContent>
            <Separator className='my-2' />
            <CardDescription>
                <span className='text-lg font-bold text-slate-700' style={{
                    fontFamily: "Baskervville SC, serif"
                }}>
                User Socials
                </span>
            </CardDescription>
            <CardContent>
                <FormField
                    control={form.control}
                    name='githubLink'
                    render={({field}) => (
                        <FormItem>
                            <div className='my-4 flex flex-col justify-start gap-y-3'>
                            <FormLabel>
                            Resume Name
                            </FormLabel>
                            <FormControl>
                                <Input disabled={IsPending} {...field} placeholder='https://github.com/johndoe' />
                            </FormControl>
                            </div>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name='linkedinLink'
                    render={({field}) => (
                        <FormItem>
                            <div className='my-4 flex flex-col justify-start gap-y-3'>
                            <FormLabel>
                            Resume Name
                            </FormLabel>
                            <FormControl>
                                <Input disabled={IsPending} {...field} placeholder='https://linkedin.com/johndoe' />
                            </FormControl>
                            </div>
                            <FormMessage />
                        </FormItem>
                    )}
                />
            </CardContent>
            <Separator className='my-3' />
            <CardFooter>
            <Button variant={"primary"} disabled={IsPending} type='submit'>
                {!IsPending ? <>
                    <Edit3Icon />
                    Create</> : <>
                        Loading...
                    </>}
            </Button>
            </CardFooter>
        </Card>
        </form>

        </Form>
        <ToastContainer />
    </div>
  )
}

export default NewResume