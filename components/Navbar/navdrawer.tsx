"use client"

import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { MenuIcon } from "lucide-react"
import Link from "next/link"
import React from "react"
import { LogoutModal } from "../auth/logoutModal"

export function NavDrawer() {
  const [isLoggedin, setIsLoggedin] = React.useState<boolean>(true);
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">
            <MenuIcon />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>
            <h1 className="text-2xl font-medium text-dark-5" style={{
                fontFamily: "Anton SC , sans-serif"
            }}>
                Scrapeus
            </h1>
          </SheetTitle>
        </SheetHeader>
        <ul className='justify-start items-start flex flex-col py-[2rem]'> 
                <li className='hover:bg-slate-200 transition-all py-4 px-2 duration-150 ease-in-out w-full h-full'>
                    <Link className="" style={{
                        fontFamily: "Baskervville Sc, serif",
                        fontWeight: 700
                    }} href="/api/v1/resumes" >
                        Resumes
                    </Link>
                </li>
                <li className='hover:bg-slate-200 transition-all duration-150 py-4 px-2 ease-in-out w-full h-full'>
                    <Link className="" style={{
                        fontFamily: "Baskervville Sc, serif",
                        fontWeight: 700
                    }} href="/api/v1/cv" >
                        CV
                    </Link>
                </li>
                <li className='hover:bg-slate-200 transition-all duration-150 py-4 px-2 ease-in-out w-full h-full'>
                    <Link className="" style={{
                        fontFamily: "Baskervville Sc, serif",
                        fontWeight: 700
                    }} href="/api/v1/jobs" >
                        Jobs
                    </Link>
                </li>
                <li className='hover:bg-slate-200 transition-all duration-150 py-4 px-2 ease-in-out w-full h-full'>
                    <Link className="" style={{
                        fontFamily: "Baskervville Sc, serif",
                        fontWeight: 700
                    }} href="/api/v1/skills" >
                        Skills
                    </Link>
                </li>
        </ul>

        <SheetFooter>
          <SheetClose asChild>
            {isLoggedin ? (
              <>
              <section className="flex items-start justify-center gap-x-[2rem] flex-wrap">
                <Button>
                  <Link className="" href={"/dash"}>
                    Dashboard  
                  </Link>
                </Button>
                <LogoutModal />
                </section>
              </>
            ) : (
              <>
               <section className="flex items-start justify-center gap-x-[2rem] flex-wrap">
               <Button variant={"primary"}>
                  <Link href={"/sign-up"}>
                    Sign Up
                  </Link> 
                </Button>
                <Button variant={"destructive"}>
                  <Link href={"/sign-in"}>
                    Login
                  </Link>
                </Button>
               </section>
              </>
            )}
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}
