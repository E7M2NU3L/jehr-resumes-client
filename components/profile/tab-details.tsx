"use client"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"
import { CgArrowTopRight } from "react-icons/cg"

interface TimeProps {
    days: number,
    hours: number,
    minutes: number,
    seconds: number
}

export function UserDetails() {

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  function calculateTimeLeft() {
    const endTime = new Date('2024-12-31T23:59:59').getTime(); // Replace with your billing period end date
    const now = new Date().getTime();
    const difference = endTime - now;
    
    let timeLeft: TimeProps = {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    };
    
    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      };
    }
    
    return timeLeft;
  }
  return (
    <Tabs defaultValue="account" className="w-[400px]">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="account">Resumes</TabsTrigger>
        <TabsTrigger value="password">Billing</TabsTrigger>
      </TabsList>
      <TabsContent value="account">
        <Card>
          <CardHeader>
            <CardTitle>Previous Resumes / CVs</CardTitle>
            <CardDescription>
              These are the Files that you have created with scrapeo
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-1 flex justify-between items-center px-3 py-[0.8rem] bg-dark-5/25 rounded-lg hover:translate-x-1 hover:scale-105 transition-all duration-200 ease-in-out max-w-md mx-auto">
                <div>
                    <h1 className="text-normal text-lg text-dark-5" style={{
                        fontFamily: "Anton SC, serif"
                    }}>
                        Resume Demo 1
                    </h1>
                    
                    <main className="flex gap-x-2 items-start pt-[0.8rem]">
                        <h1 className="text-sm font-medium text-muted-foreground" style={{
                            fontFamily: "BAskervville SC, serif"
                        }}>
                            support from
                        </h1>
                        <section className="flex justify-center items-center gap-x-2">
                            <Image src={"/images/card-image.png"} width={22} height={22} className="rounded-full" alt="placeholder profile" />
                            <Image src={"/images/card-image.png"} width={22} height={22} className="rounded-full" alt="placeholder profile" />
                        </section>
                    </main>
                </div>
                <div className="">
                    <Button className="text-2xl hover:text-green-500">
                        <CgArrowTopRight />
                    </Button>
                </div>

            </div>
            <div className="space-y-1 flex justify-between items-center px-3 bg-dark-5/25 rounded-lg hover:translate-x-1 py-[0.8rem] hover:scale-105 transition-all duration-200 ease-in-out max-w-md mx-auto">
                <div>
                    <h1 className="text-normal text-lg text-dark-5" style={{
                        fontFamily: "Anton SC, serif"
                    }}>
                        Resume Demo 1
                    </h1>
                    
                    <main className="flex pt-[0.8rem] gap-x-2 items-start">
                        <h1 className="text-sm font-medium text-muted-foreground" style={{
                            fontFamily: "BAskervville SC, serif"
                        }}>
                            support from
                        </h1>
                        <section className="flex justify-center items-center gap-x-2">
                            <Image src={"/images/card-image.png"} width={22} height={22} className="rounded-full" alt="placeholder profile" />
                            <Image src={"/images/card-image.png"} width={22} height={22} className="rounded-full" alt="placeholder profile" />
                        </section>
                    </main>
                </div>
                <div className="">
                    <Button className="text-2xl hover:text-green-500">
                        <CgArrowTopRight />
                    </Button>
                </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button variant={"outline"}>
                <Link href={"/dash"}>
                    Go to Dashboard
                </Link>
               </Button>
          </CardFooter>
        </Card>
      </TabsContent>
      <TabsContent value="password">
      <Card className="max-w-md mx-auto">
      <CardHeader>
        <CardTitle>Billing</CardTitle>
        <CardDescription>
          Upgrade your plan before it ends to maintain your streak
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-1">
          <Label>Current Plan:</Label>
          <p>Premium Plan</p> {/* Replace with your dynamic billing plan */}
        </div>
        <div className="space-y-1">
          <Label>Billing Period:</Label>
          <p>January 1, 2024 - December 31, 2024</p> {/* Replace with your dynamic billing period */}
        </div>
        <div className="space-y-1">
          <Label>Time Left:</Label>
          <p>
            {timeLeft ? (
                <>
                {timeLeft.days}d {timeLeft.hours}h {timeLeft.minutes}m {timeLeft.seconds}s
                </>
            ) : (
                <>
                Loading ..
                </>
            )}
          </p>
        </div>
      </CardContent>
      <CardFooter>
        <Button>
            <Link href={"/billing"}>
            Go to Billing
            </Link>
            </Button>
      </CardFooter>
    </Card>
      </TabsContent>
    </Tabs>
  )
}
